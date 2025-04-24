import { defineCollection, z } from "astro:content";
const authors = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(), // use Astro image helper
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});

const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

const podcast = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(), // Astro image helper
        alt: z.string(),
      }),
      guestAvatar: z.object({
        url: image(), // Astro image helper
        alt: z.string(),
      }),
      episodeNumber: z.number().optional(),
      duration: z.string().optional(),
      audioSrc: z.string().optional(),
      tags: z.array(z.string()),
      isRecent: z.boolean().optional(),
      isPopular: z.boolean().optional(),
      isLocked: z.boolean().optional(),
    }),
});

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(), 
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      isRecent: z.boolean().optional(),
      isPopular: z.boolean().optional(),
      isLocked: z.boolean().optional(),
    }),
});

export const collections = {
  posts: posts,
  authors: authors,
  podcast: podcast,
  infopages: infopages,
};
