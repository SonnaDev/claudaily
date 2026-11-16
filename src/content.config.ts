import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['news', 'tutorial']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Tutorial-only fields
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    estimatedTime: z.string().optional(),
    prerequisites: z.array(z.string()).optional(),
    // News-only fields
    sources: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      })
    ).optional(),
  }),
});

export const collections = { blog };
