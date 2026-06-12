import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// LMI content-collection pattern, mirroring the EQUIBT v6x foundation.
// `courses` = AUSQ-certified training tracks. `insights` = articles/blog.

const courses = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/courses" }),
  schema: z.object({
    title: z.string(),
    track: z.enum([
      "Lean Six Sigma",
      "Lean Service Design",
      "Lean Business Analysis",
    ]),
    summary: z.string(),
    level: z.string().optional(), // e.g. "Green Belt", "Black Belt"
    // Sort key only. NEVER rendered as a public date.
    order: z.number().default(0),
    draft: z.boolean().default(true),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    readTime: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(true),
  }),
});

export const collections = { courses, insights };
