import { defineCollection, z } from "astro:content";

const newsletter = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().trim(),
    role: z.enum(["Admin", "User"]),
    section: z.enum([
      "Marketing",
      "Finance",
      "Engineering",
    ]),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().trim(),
    tags: z.array(z.string()),
    author: z.string().trim().default("Anonymous"),
    isDraft: z.boolean(),
  }),
});

export const collection = {
  newsletter,
  posts,
};
