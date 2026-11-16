---
title: "Optimizing Token Costs with Prompt Caching and Context Windows"
description: "A production engineering guide to designing breakpoint architectures that leverage Claude's 90% prompt caching discounts while minimizing cache churn."
date: 2026-10-05
category: "tutorial"
tags: ["prompt-caching", "architecture", "performance", "cost-reduction", "advanced"]
difficulty: "Advanced"
estimatedTime: "30 mins"
prerequisites:
  - "In-depth understanding of LLM tokenization and Anthropic Messages API"
  - "Experience maintaining multi-turn conversational agents or RAG pipelines"
  - "Python 3.10+ or Node.js environment"
---

> **Note**: This is a sample tutorial demonstrating the Claudaily content format for the **Tutorials** category.

With prompt caching, Anthropic offers a **90% discount** on cached input tokens and up to an 80% decrease in time-to-first-token (TTFT). However, realizing these benefits requires careful arrangement of system prompts, tool definitions, and user conversation turns. If an upstream block shifts by a single character, all downstream cache segments are invalidated.

In this tutorial, you will design a multi-tiered caching architecture for a production codebase-assistant agent.

---

## Step 1: Understand Cache Hierarchy and Prefix Rules

Anthropic's prompt cache relies on strict prefix matching:
1. The minimum cacheable prompt size is **1,024 tokens** on Claude 3.5 Sonnet and Opus (2,048 tokens on Haiku).
2. Up to **4 cache breakpoints** (`cache_control: {"type": "ephemeral"}`) can be declared in a single API call.
3. If block $N$ changes, blocks $N+1$ through end-of-prompt cannot hit the cache.

Therefore, you must organize your request payload from **most static to most dynamic**:

```text
[1. Base System Instructions]  --> Never changes (Cache Breakpoint #1)
[2. Tool Definitions]          --> Static across session (Cache Breakpoint #2)
[3. Repository Context / Docs] --> Updates on file saves (Cache Breakpoint #3)
[4. Conversation History]      --> Updates on user turn (Cache Breakpoint #4)
[5. Latest User Query]         --> Fresh input
```

---

## Step 2: Implement Multi-Breakpoint Python Architecture

Here is how to set up the prompt structure using the Anthropic Python SDK:

```python
import os
import anthropic

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

def call_claude_with_optimized_cache(
    system_rules: str,
    repository_files: str,
    conversation_history: list[dict],
    user_message: str
):
    # 1. System Prompt with Ephemeral Cache
    system_prompt = [
        {
            "type": "text",
            "text": system_rules,
            "cache_control": {"type": "ephemeral"}
        }
    ]

    # 2. Build Messages Array with Structured Cache Points
    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": f"Here is the project codebase:\n\n{repository_files}",
                    "cache_control": {"type": "ephemeral"}
                },
                {
                    "type": "text",
                    "text": "Codebase loaded. I am ready for instructions."
                }
            ]
        },
        {
            "role": "assistant",
            "content": "Codebase indexed and stored in memory. How can I help you today?"
        }
    ]

    # 3. Append Prior Conversation Turns
    for turn in conversation_history:
        messages.append(turn)

    # 4. Append Current User Query
    messages.append({
        "role": "user",
        "content": user_message
    })

    # Execute Call
    response = client.beta.prompt_caching.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=2048,
        system=system_prompt,
        messages=messages
    )

    # Inspect Cache Telemetry
    usage = response.usage
    print(f"Tokens written to cache: {getattr(usage, 'cache_creation_input_tokens', 0)}")
    print(f"Tokens read from cache:   {getattr(usage, 'cache_read_input_tokens', 0)}")
    print(f"Standard input tokens:     {usage.input_tokens}")

    return response.content[0].text
```

---

## Step 3: Verify Cache Hits via Telemetry

When running the function twice with the same codebase:

1. **Call 1 (Cache Write)**:
   ```text
   Tokens written to cache: 45,210
   Tokens read from cache:   0
   Standard input tokens:     125
   ```
2. **Call 2 (Cache Read - 90% savings)**:
   ```text
   Tokens written to cache: 0
   Tokens read from cache:   45,210  <-- Billed at 10% standard rate
   Standard input tokens:     42
   ```

---

## Troubleshooting

### Cache read tokens count is 0 despite identical prompts
- **Check Minimum Token Threshold**: Ensure the content before `cache_control` exceeds 1,024 tokens.
- **Cache TTL Expiration**: Anthropic caches live for 5 minutes. If requests are spaced farther apart without a keep-alive ping, the cache expires.
- **Dynamic Content in Static Headers**: Ensure you are not injecting timestamps, random IDs, or session nonces into the system prompt prior to the cache breakpoint.
