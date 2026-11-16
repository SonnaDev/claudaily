# Contributing to Claudaily

Thank you for your interest in contributing to **Claudaily**, the independent blog dedicated exclusively to Claude (Anthropic's AI assistant).

To maintain our standard of quality, technical accuracy, and reader trust, all submissions must follow these strict guidelines.

---

## 1. Categories and Scope

We accept only two types of articles:

1. **News**: Objective reporting on Claude model updates, API releases, company announcements, research papers, and benchmarks.
2. **Tutorials**: Actionable, step-by-step developer guides covering Claude Code, prompt engineering, Tool Use, prompt caching, and integrations.

---

## 2. Content Standards

### For News Articles
- **Verified Sources Required**: Every News post must include an array of `sources` in its frontmatter linking directly to official Anthropic documentation, research papers, or primary engineering posts.
- **Explicit Dates**: The publication date must reflect the official announcement date.
- **Tone**: Keep reporting factual, concise, and focused on practical impact for developers and users. Avoid sensationalism.

### For Tutorials
- **Goal Statement**: Every tutorial must begin with a clear explanation of what the reader will build and why.
- **Prerequisites**: Frontmatter must list all required software versions, SDKs, and API credentials.
- **Difficulty and Time**: Assign an accurate difficulty badge (`Beginner`, `Intermediate`, or `Advanced`) and estimated completion time (`estimatedTime: "20 mins"`).
- **Tested Code**: All code snippets must be tested against current versions of the Anthropic SDK. Do not include pseudocode or broken imports.
- **Troubleshooting Section**: Every tutorial must conclude with a `## Troubleshooting` section addressing at least two common failure modes or edge cases.

---

## 3. Frontmatter Specification

### News Frontmatter
```yaml
---
title: "Descriptive, Informative Headline"
description: "1-2 sentence summary for meta tags and cards."
date: 2026-11-14
category: "news"
tags: ["anthropic", "sonnet", "api"]
sources:
  - title: "Anthropic Official Announcement"
    url: "https://www.anthropic.com/news/..."
---
```

### Tutorial Frontmatter
```yaml
---
title: "Action-Oriented Tutorial Title"
description: "Clear explanation of what the tutorial teaches."
date: 2026-11-14
category: "tutorial"
tags: ["typescript", "claude-code", "tool-use"]
difficulty: "Intermediate" # Beginner | Intermediate | Advanced
estimatedTime: "25 mins"
prerequisites:
  - "Node.js 18+ installed"
  - "Active Anthropic API key"
---
```

---

## 4. Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Test production build and search index
npm run build
npm run preview
```

## 5. Independence Disclaimer Reminder

Claudaily is an independent publication and has no formal affiliation with Anthropic. Do not imply official endorsement or Anthropic sponsorship in post titles or body copy.
