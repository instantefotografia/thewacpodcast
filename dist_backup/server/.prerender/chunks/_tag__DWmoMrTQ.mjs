import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './prerender_CQFbZyH5.mjs';
import { b as $$Text, $ as $$BaseLayout, a as $$Wrapper } from './BaseLayout_DLRnYciY.mjs';
import { g as getCollection } from './_astro_content_Bzpvvtw7.mjs';

const $$PodcastCardSimple = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PodcastCardSimple;
  const { episode } = Astro2.props;
  const url = `/podcast/interviews/${episode.slug}`;
  const pubDate = episode.publishedDate ? new Date(episode.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }) : "";
  return renderTemplate`${maybeRenderHead()}<article class="relative"> <a${addAttribute(url, "href")}${addAttribute(episode.title, "title")}${addAttribute(`Listen to ${episode.title}`, "aria-label")} class="absolute inset-0"></a> ${episode.coverArt ? renderTemplate`<img${addAttribute(episode.coverArt, "src")}${addAttribute(episode.title, "alt")} width="500" height="500" class="object-cover aspect-square w-full" loading="lazy">` : renderTemplate`<div class="aspect-square bg-stone-100 w-full"></div>`} <div class="mt-4"> ${pubDate && renderTemplate`${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400" }, { "default": ($$result2) => renderTemplate` <time${addAttribute(pubDate, "datetime")}>${pubDate}</time> ` })}`} ${renderComponent($$result, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "mt-1 font-medium" }, { "default": ($$result2) => renderTemplate`${episode.title}` })} ${episode.shortDescription && renderTemplate`${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-1 text-base-600" }, { "default": ($$result2) => renderTemplate`${episode.shortDescription}` })}`} </div> </article>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/podcast/PodcastCardSimple.astro", void 0);

async function getStaticPaths() {
  const allPosts = await getCollection("podcast");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.data.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-xl"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "displayMD", "class": "font-serif font-light text-base-600" }, { "default": async ($$result4) => renderTemplate`
All our episodes about
<span class="italic text-base-900">${tag}</span> ` })} </div> <div class="items-start grid grid-cols-1mdm:grid-cols-2 gap-2 gap-y-12 mt-32 pt-2 border-t border-black"> ${posts.map((post) => renderTemplate`${renderComponent($$result3, "PodcastCardSimple", $$PodcastCardSimple, { "post": post })}`)} </div> ` })} </section> ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/tags/[tag].astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/tags/[tag].astro";
const $$url = "/podcast/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
