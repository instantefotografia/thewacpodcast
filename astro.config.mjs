import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    includeFiles: ["src/data/transcripts/**"],
  }),

  vite: {
    plugins: [tailwindcss()],
    cacheDir: "/tmp/vite-cache-wac",
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://thewacpodcast.com",
  integrations: [sitemap(), mdx()],
});
