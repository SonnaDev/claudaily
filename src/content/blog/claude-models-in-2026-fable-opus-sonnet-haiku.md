---
title: "Claude Models in 2026: Fable, Opus, Sonnet & Haiku Compared"
description: "Which Claude model should you use? A clear guide to Fable 5.2, Opus 5.5, Sonnet 5.5 and Haiku 5.5, with release dates, strengths and API model IDs."
date: 2026-11-20
updated: 2026-11-20
category: "news"
tags: ["models", "fable", "opus", "sonnet", "haiku", "claude-5-5"]
sources:
  - title: "Introducing Claude Opus 5.5, Anthropic"
    url: "https://www.anthropic.com/claude-opus-5-5"
  - title: "Anthropic newsroom (Sonnet 5.5 and Haiku 5.5 announcements)"
    url: "https://www.anthropic.com/news"
  - title: "Claude Sonnet 5.5 announcement thread on X"
    url: "https://x.com/claudeai/status/2104633140409192757"
---

Anthropic now ships several Claude models at once, and the names can be confusing. If you are trying to work out which Claude model to use in late 2026, here is the short version, followed by the details behind it.

## Quick Answer

- **Fable 5.2** is the most capable Claude model most people can use. Choose it for the hardest, highest-stakes work.
- **Opus 5.5** is the strongest pick for serious coding and knowledge work when you want top quality at a lower cost than the previous Opus.
- **Sonnet 5.5** is the everyday workhorse: fast, lower-cost, and strong on well-scoped tasks.
- **Haiku 5.5** is the small, fast model for high-volume jobs.
- **Mythos 5.2** exists, but it is limited to vetted organizations and is not generally available.

---

## The Current Claude Lineup at a Glance

| Model | Released | Best for | API model ID |
| :--- | :--- | :--- | :--- |
| **Claude Fable 5.2** | Nov 9, 2026 | Hardest tasks, top capability | `claude-fable-5-2` |
| **Claude Opus 5.5** | Sep 22, 2026 | Agentic coding, knowledge work | `claude-opus-5-5` |
| **Claude Sonnet 5.5** | Sep 28, 2026 | Everyday tasks, bug fixes, documents | `claude-sonnet-5-5` |
| **Claude Haiku 5.5** | Oct 7, 2026 | Speed and volume | `claude-haiku-5-5` |
| **Claude Mythos 5.2** | Nov 9, 2026 | Vetted organizations only | *Not publicly available* |

> *Pricing and plan limits change, so always confirm the current numbers on Anthropic's pricing page before you commit to a model for production.*

---

## How the Claude 5.5 Family Rolled Out

Anthropic opened the Claude 5.5 generation one tier at a time. Opus 5.5 came first on September 22, Sonnet 5.5 followed six days later on September 28, and Haiku 5.5 arrived on October 7. Anthropic then released Fable 5.2 and Mythos 5.2 on November 9, the newest models at the top of the lineup.

---

## Claude Fable 5.2: The Top of the Public Lineup

Fable belongs to Anthropic's Mythos tier, which sits above Opus. Fable 5.2 and Mythos 5.2 share the same underlying model, but Fable ships with extra safety measures for biology and cybersecurity, which is what makes it suitable for general release. For a full explanation of how the two relate, read our guide to [Claude Mythos and Project Glasswing](/news/what-is-claude-mythos-project-glasswing).

Pick Fable when the task is difficult enough that quality matters more than speed or cost: complex multi-step analysis, large refactors, or work where a mistake is expensive.

---

## Claude Opus 5.5: Strong Value for Serious Work

Anthropic describes Opus 5.5 as leading in agentic coding and knowledge work. It performs at roughly the level of Fable 5.1 on most work and costs about 40% less to run than Opus 5 on typical workloads. At launch it was priced at $4 per million input tokens and $20 per million output tokens.

Anthropic's own knowledge-work example is a good illustration: a task that took Opus 5 93 minutes finished in 63 minutes on Opus 5.5, at half the cost. Treat vendor benchmarks as a starting point and test on your own tasks, but the direction is clear. Opus 5.5 is available on all major platforms, including Amazon Web Services, Google Cloud and Microsoft Azure.

One more detail: because Opus 5.5 is comparable to Mythos 5.1 in biology and cybersecurity, Anthropic deploys it with safeguards similar to those on Fable 5.1. Vetted organizations can apply to a Life Sciences Verification Program to use it for biology research.

---

## Claude Sonnet 5.5: The Everyday Default

Sonnet 5.5 is a clear upgrade over Sonnet 5. Anthropic says it runs more than 30% faster and costs up to 30% less for most work. Its price per token is the same as Sonnet 5, but it typically needs far fewer tokens to finish the same task, which is where the savings come from.

Anthropic positions it as the faster, lower-cost companion to Opus 5.5, strongest at well-scoped everyday tasks, fixing bugs, and producing polished documents and slides. It is also the first Sonnet model to include the cyber safeguards and fallbacks found on Anthropic's most capable models. If you are not sure which model to start with, start here.

---

## Claude Haiku 5.5: Speed and Volume

Haiku 5.5 is Anthropic's fastest and most capable small model. It is built for high-volume work such as summarization, subagents and browser use. If you run thousands of small calls, like triaging an inbox or summarizing support calls, Haiku is the model to test first.

---

## Which Claude Model Should You Choose?

- **Start with Sonnet 5.5** for most writing, analysis and coding help.
- **Move up to Opus 5.5** when Sonnet's answers are not good enough on complex coding or research tasks.
- **Use Fable 5.2** for the toughest problems where quality is the only thing that matters.
- **Use Haiku 5.5** when you need speed, scale or low cost and the task is simple.

*A practical tip for developers:* if you already run workloads on Opus 5 or Sonnet 5, re-test them on the 5.5 versions and compare cost per task, not just quality.

---

## Frequently Asked Questions

### What is the latest Claude model?
As of November 20, 2026, the newest models are Claude Fable 5.2 and Claude Mythos 5.2, both released on November 9, 2026. Most people can use Fable 5.2, Opus 5.5, Sonnet 5.5 and Haiku 5.5.

### Is "Claude 5.5" a single model?
No. Claude 5.5 is a family of three models: Opus 5.5, Sonnet 5.5 and Haiku 5.5.

### Can I use Claude Mythos 5.2?
Not generally. Mythos access is limited to vetted organizations, mainly through Anthropic's Project Glasswing program.

### Which Claude model is best for coding?
Anthropic highlights Opus 5.5 for agentic coding, and Fable 5.2 sits above it for the hardest problems. Sonnet 5.5 is a strong, cheaper choice for well-scoped tasks like bug fixes.

### What are the API model names?
The model IDs are `claude-fable-5-2`, `claude-opus-5-5`, `claude-sonnet-5-5` and `claude-haiku-5-5`.

---

*Last verified: November 20, 2026. Independent blog, not affiliated with Anthropic.*
