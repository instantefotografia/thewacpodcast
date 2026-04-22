import rss from '@astrojs/rss';
import { g as getCollection } from './_astro_content_C8yN89JF.mjs';

async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Lexington Themes",
    description:
      "Free and premium multipage themes and UI Kits For freelancers, developers, businesses, and personal use. Beautifully crafted with Astro.js, and Tailwind CSS — Simple & easy to customise.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/posts/${post.id}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
