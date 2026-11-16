---
title: "Anthropic Releases Prompt Caching to Slash API Latency and Costs by up to 90%"
description: "Prompt Caching allows developers to cache large context windows across Claude requests, dramatically accelerating response times and lowering input token pricing."
date: 2026-08-14
category: "news"
tags: ["anthropic", "api", "prompt-caching", "performance", "cost-optimization"]
sources:
  - title: "Anthropic Engineering: Prompt Caching Announcement"
    url: "https://www.anthropic.com/news/prompt-caching"
  - title: "Anthropic API Guide: Prompt Caching Implementation"
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching"
---

> **Note**: This is a sample article demonstrating the Claudaily content format for the **News** category.

Anthropic has introduced **Prompt Caching** for the Claude API, a breakthrough feature addressing two of the most significant hurdles in production LLM engineering: high per-request latency and compounding token costs for long-context tasks.

## Why Prompt Caching Matters

When building applications such as conversational coding companions, financial document analyzers, or legal research systems, developers frequently send repetitive background context (like a codebase repository or massive PDF documentation) on every user turn.

With Prompt Caching, Anthropic stores the compiled prefix in a high-speed memory cache for 5 minutes (refreshed on every cache hit). 

### Key Economic and Performance Gains:
- **Cost Reduction**: Cached input tokens are discounted by **90%** compared to standard input token rates.
- **Latency Improvements**: Requests with long cached context return up to **2x faster**, significantly improving real-time interactive experiences.
- **Cache Invalidation**: Controlled directly by developers via cache control breakpoints in the API request JSON.

```json
{
  "role": "user",
  "content": [
    {
      "type": "text",
      "text": "<entire_codebase_context_here>",
      "cache_control": { "type": "ephemeral" }
    },
    {
      "type": "text",
      "text": "Find where user authentication tokens are validated."
    }
  ]
}
```

## Supported Models

Prompt Caching is supported on Claude 3.5 Sonnet, Claude 3.5 Haiku, and Claude 3 Opus. For developers working with book-length documents or codebase-scale prompts, this transforms multi-turn architectures from cost-prohibitive to commercially viable.
