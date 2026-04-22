import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute } from './prerender_CQFbZyH5.mjs';
import { a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from './BaseLayout_DLRnYciY.mjs';
import { $ as $$Button } from './Button_DXvxeGy9.mjs';
import { r as resolveEpisodeGuests, j as getPopularEpisodes, g as getBlogPosts } from './notion_DABSCuBt.mjs';
import { $ as $$Subscribe } from './Subscribe_CX81cZ8b.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "flex flex-col h-[calc(100dvh-8rem)] justify-center" }, { "default": ($$result2) => renderTemplate` <div class="max-w-4xl mt-auto"> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayLG", "class": "font-serif font-light text-base-600" }, { "default": ($$result3) => renderTemplate`The wedding industry grows when its people <span class="text-base-900 italic">share honestly.</span> The WAC Podcast is where that conversation lives.` })} </div> ` })} </section>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/landing/Hero.astro", void 0);

const $$PodcastPreview = createComponent(async ($$result, $$props, $$slots) => {
  const episodes = await resolveEpisodeGuests(await getPopularEpisodes());
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-32 pb-12" }, { "default": async ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between w-full gap-4"> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "font-medium uppercase" }, { "default": async ($$result3) => renderTemplate`
Start here
` })} ${renderComponent($$result2, "Button", $$Button, { "isLink": true, "size": "xs", "variant": "default", "class": "w-auto text-center", "href": "/podcast/", "aria-label": "Listen to all podcast episodes", "title": "Listen to all podcast episodes" }, { "default": async ($$result3) => renderTemplate`
All episodes
` })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mt-4 border-t border-black"> ${episodes.map((episode) => {
    const url = `/podcast/interviews/${episode.slug}`;
    const guestName = episode.guests?.[0]?.name ?? null;
    return renderTemplate`<article class="group"> <a${addAttribute(url, "href")}${addAttribute(episode.title, "title")}${addAttribute(`Listen to ${episode.title}`, "aria-label")} class="block aspect-square overflow-hidden"> ${episode.coverArt ? renderTemplate`<img${addAttribute(episode.coverArt, "src")}${addAttribute(guestName ?? episode.title, "alt")} width="800" height="800" class="object-cover w-full h-full group-hover:scale-105" loading="lazy">` : renderTemplate`<div class="w-full h-full bg-stone-100 group-hover:scale-105"></div>`} </a> <div class="mt-3"> ${episode.episodeNumber && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400" }, { "default": async ($$result3) => renderTemplate`
Ep. ${episode.episodeNumber}` })}`} <a${addAttribute(url, "href")} class="group-hover:underline"> ${renderComponent($$result2, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "mt-0.5 font-medium leading-snug" }, { "default": async ($$result3) => renderTemplate`${episode.title}` })} </a> ${guestName && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mt-1 text-base-500" }, { "default": async ($$result3) => renderTemplate`${guestName}` })}`} </div> </article>`;
  })} </div> ` })} </section>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/landing/PodcastPreview.astro", void 0);

const $$BlogPreview = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogPosts();
  const latest = posts[0] ?? null;
  return renderTemplate`${latest && renderTemplate`${maybeRenderHead()}<section>${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-32 pb-12" }, { "default": async ($$result2) => renderTemplate`<div class="flex flex-wrap items-center justify-between w-full gap-4">${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "font-medium uppercase" }, { "default": async ($$result3) => renderTemplate`
Latest article
` })}${renderComponent($$result2, "Button", $$Button, { "isLink": true, "size": "xs", "variant": "default", "href": "/blog/", "class": "w-auto text-center", "aria-label": "Read all blog posts", "title": "Read all blog posts" }, { "default": async ($$result3) => renderTemplate`
Read them all
` })}</div><div class="pt-4 mt-4 border-t border-black"><a${addAttribute(`/blog/${latest.slug}`, "href")} class="group block max-w-xl">${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400" }, { "default": async ($$result3) => renderTemplate`${latest.publishDate && new Date(latest.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  })}${latest.cluster?.length > 0 && renderTemplate`<span> · ${latest.cluster[0]}</span>`}` })}${renderComponent($$result2, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "mt-2 font-medium group-hover:underline" }, { "default": async ($$result3) => renderTemplate`${latest.title}` })}${latest.excerpt && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-1 text-base-600" }, { "default": async ($$result3) => renderTemplate`${latest.excerpt}` })}`}</a></div>` })}</section>`}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/landing/BlogPreview.astro", void 0);

const $$Manifesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-32 border-t border-black" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <div> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase tracking-wide text-base-400" }, { "default": ($$result3) => renderTemplate`
The WAC
` })} ${renderComponent($$result2, "Text", $$Text, { "tag": "h2", "variant": "displayLG", "class": "font-serif font-light mt-4 text-base-900 leading-tight" }, { "default": ($$result3) => renderTemplate`
We instead of I.
` })} </div> <div class="flex flex-col gap-5"> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result3) => renderTemplate`
WAC was built with the goal of collective greatness. A space, both
          digital and physical, where artists from all disciplines of the
          wedding industry share not only their accomplishments, but also their
          troubles and struggles.
` })} ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result3) => renderTemplate`
Portugal is the birthplace of WAC, but not the final destination.
          The industry is becoming global fast. The podcast was the first step.
          The meetups, workshops, and galas are what comes next.
` })} <div class="flex items-center gap-6 mt-4"> <a href="/about" class="uppercase text-xs font-medium text-base-900 border border-base-900 px-4 py-2 hover:bg-base-900 hover:text-white transition-colors">
About Rui
</a> <a href="/community" class="uppercase text-xs font-medium text-base-600 hover:text-base-900 transition-colors">
The Community
</a> </div> </div> </div> ` })} </section>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/landing/Manifesto.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "PodcastPreview", $$PodcastPreview, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} ${renderComponent($$result2, "Manifesto", $$Manifesto, {})} ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/index.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
