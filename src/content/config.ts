import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    image: z.string().optional(),
    isPublish: z.boolean(),
    isImage: z.boolean().default(false),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { posts: postsCollection };
