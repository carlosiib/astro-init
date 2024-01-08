import {
  defineCollection,
  reference,
  z,
} from "astro:content";

const newsletter = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().trim(),
    role: reference("role"),
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
    ref: reference("newsletter"),
  }),
});

const role = defineCollection({
  type: "data",
  schema: z.object({
    role: z.enum(["admin", "user"]),
  }),
});

export const collection = {
  newsletter,
  posts,
  role,
};
