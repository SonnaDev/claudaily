---
title: "Building a Structured Output Agent with Claude Tool Use and TypeScript"
description: "Learn how to use Anthropic's tool calling (function calling) capabilities in TypeScript to enforce strict JSON schemas and validate agent outputs."
date: 2026-10-15
draft: true
category: "tutorial"
tags: ["typescript", "api", "tool-use", "structured-data", "agents"]
difficulty: "Intermediate"
estimatedTime: "25 mins"
prerequisites:
  - "TypeScript 5.x and ts-node or tsx installed"
  - "Basic understanding of Zod or JSON Schema validation"
  - "Anthropic TypeScript SDK (@anthropic-ai/sdk)"
---

> **Note**: This is a sample tutorial demonstrating the Claudaily content format for the **Tutorials** category.

While foundation models excel at open-ended prose, backend systems and business applications demand **deterministic, strictly validated data**. By using Claude's native **Tool Use** (function calling) mechanism, you can guarantee that the model outputs structured JSON conforming to your exact application schemas.

In this guide, you will construct a TypeScript agent that takes messy unstructured customer feedback emails and outputs verified sentiment and bug triage tickets.

---

## Step 1: Project Setup

Create a new directory and install the necessary dependencies:

```bash
mkdir claude-structured-agent
cd claude-structured-agent
npm init -y
npm install @anthropic-ai/sdk zod
npm install -D typescript tsx @types/node
npx tsc --init
```

---

## Step 2: Define Your Schema

Define the schema that Claude must adhere to when processing incoming customer messages.

```typescript
// src/schema.ts
import { z } from "zod";

export const CustomerFeedbackSchema = z.object({
  sentiment: z.enum(["positive", "neutral", "negative"]),
  urgency: z.enum(["low", "medium", "high", "critical"]),
  category: z.enum(["bug_report", "feature_request", "billing", "praise"]),
  summary: z.string().max(120),
  actionItems: z.array(z.string()),
});

export type CustomerFeedback = z.infer<typeof CustomerFeedbackSchema>;
```

---

## Step 3: Implement the Tool Calling Loop

Construct the Anthropic SDK client and define the `extract_feedback` tool specification:

```typescript
// src/agent.ts
import Anthropic from "@anthropic-ai/sdk";
import { CustomerFeedbackSchema, type CustomerFeedback } from "./schema";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function parseCustomerFeedback(rawText: string): Promise<CustomerFeedback> {
  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    tools: [
      {
        name: "record_feedback_triage",
        description: "Records the structured triage results from customer feedback.",
        input_schema: {
          type: "object",
          properties: {
            sentiment: { type: "string", enum: ["positive", "neutral", "negative"] },
            urgency: { type: "string", enum: ["low", "medium", "high", "critical"] },
            category: { type: "string", enum: ["bug_report", "feature_request", "billing", "praise"] },
            summary: { type: "string", description: "Brief one-line summary" },
            actionItems: { type: "array", items: { type: "string" } },
          },
          required: ["sentiment", "urgency", "category", "summary", "actionItems"],
        },
      },
    ],
    tool_choice: { type: "tool", name: "record_feedback_triage" },
    messages: [
      {
        role: "user",
        content: `Please process this email into a structured triage report:\n\n${rawText}`,
      },
    ],
  });

  // Extract the tool invocation from the response
  const toolCall = response.content.find((block) => block.type === "tool_use");
  if (!toolCall || toolCall.type !== "tool_use") {
    throw new Error("Claude did not invoke the expected tool.");
  }

  // Validate the JSON input with Zod
  const parsedData = CustomerFeedbackSchema.parse(toolCall.input);
  return parsedData;
}
```

---

## Step 4: Run and Test

Test your implementation with an incoming feedback email:

```typescript
// src/index.ts
import { parseCustomerFeedback } from "./agent";

const email = `
Subject: Checkout page is throwing 500 errors on mobile Safari!
Hi team, we had at least 8 customers complain that after entering their credit card, 
the checkout button spins indefinitely and crashes on iOS. This is costing us sales.
`;

parseCustomerFeedback(email).then((result) => {
  console.log("Structured Triage Result:", JSON.stringify(result, null, 2));
});
```

Run with `tsx`:

```bash
export ANTHROPIC_API_KEY="your-api-key"
npx tsx src/index.ts
```

---

## Troubleshooting

### Issue: `ZodError: Expected 'bug_report', received 'bug'`
- **Cause**: The model hallucinated an enum variation.
- **Fix**: Use `tool_choice: { type: "tool", name: "..." }` and provide explicit enum definitions in `input_schema.properties.<field>.enum`.

### Issue: `toolCall is undefined`
- **Cause**: The model replied with natural text instead of calling the function.
- **Fix**: Force the tool choice using `tool_choice: { type: "tool", name: "record_feedback_triage" }`.
