---
title: "Claude 3.5 Sonnet Upgraded with Breakthrough Computer Use API"
description: "Anthropic introduces revolutionary Computer Use capabilities alongside an upgraded Claude 3.5 Sonnet, allowing the model to interact directly with desktop software interfaces."
date: 2026-10-22
updated: 2026-10-24
category: "news"
tags: ["anthropic", "sonnet", "computer-use", "api", "models"]
sources:
  - title: "Anthropic Research: Introducing Computer Use and Upgraded 3.5 Sonnet"
    url: "https://www.anthropic.com/news/3-5-models-and-computer-use"
  - title: "Anthropic Documentation: Computer Use (Beta)"
    url: "https://docs.anthropic.com/en/docs/agents-and-tools/computer-use"
---

> **Note**: This is a sample article demonstrating the Claudaily content format for the **News** category.

Anthropic has announced a significant update to its flagship model, **Claude 3.5 Sonnet**, alongside a brand new public beta capability called **Computer Use**. This milestone allows developers to direct Claude to interact with computer interfaces just as humans do—looking at a screen, moving a cursor, clicking buttons, and typing keystrokes.

## What is Computer Use?

Traditional AI agent workflows rely on bespoke APIs, web scrapers, or rigidly structured function definitions. Anthropic's Computer Use bridges the gap between text-based reasoning and graphical user interfaces (GUIs).

The model achieves this by:
1. Receiving a desktop screenshot.
2. Translating user instructions into actionable mouse coordinates, clicks, or keystroke commands.
3. Taking a subsequent screenshot to verify that the target application responded correctly.

```bash
# Example invocation with the Anthropic Python SDK
pip install anthropic
```

```python
import anthropic

client = anthropic.Anthropic()
response = client.beta.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=[{
        "type": "computer_20241022",
        "name": "computer",
        "display_width_px": 1024,
        "display_height_px": 768,
        "display_number": 1
    }],
    messages=[{"role": "user", "content": "Open the browser and look up recent papers on diffusion models."}]
)
```

## Performance Benchmarks

On **OSWorld**, a benchmark testing multimodal AI agents on open-ended computer tasks across real operating system environments, Claude 3.5 Sonnet scored **14.9%** in the screenshot-only category—more than double the score of the previous state-of-the-art model (7.8%).

Furthermore, the upgraded Sonnet model brings measurable gains across coding benchmarks, increasing SWE-bench Verified scores from 33.4% to **49.0%**, outperforming all other publicly evaluated foundation models.

## Safety and Guardrails

Anthropic emphasizes that Computer Use remains experimental and is being rolled out with specific safety constraints:
- Autonomous web browsing in high-risk domains (financial transactions, CAPTCHA bypasses, identity authentication) is restricted.
- System prompts require confirmation before executing irreversible filesystem actions.
- Developers can monitor agent actions in real-time using containerized sandboxes like Docker.

## Availability

The upgraded Claude 3.5 Sonnet and the Computer Use API are available immediately via the Anthropic API, Amazon Bedrock, and Google Cloud Vertex AI.
