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

export const collection = {
  newsletter,
};
