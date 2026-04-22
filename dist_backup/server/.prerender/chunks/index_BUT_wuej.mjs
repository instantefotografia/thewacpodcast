import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as addAttribute } from './prerender_BEPFSR4y.mjs';
import { a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from './BaseLayout_C29aMkG-.mjs';
import { $ as $$Subscribe } from './Subscribe_DcKuCIah.mjs';
import { r as resolveEpisodeGuests, d as getEpisodes } from './notion_DABSCuBt.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const platforms = [
    { name: "Spotify", link: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO?si=d4a41214c2d8412a" },
    { name: "Apple Podcasts", link: "https://podcasts.apple.com/pt/podcast/the-wac-podcast/id1739397751" },
    { name: "YouTube", link: "https://www.youtube.com/@thewacpodcast" }
  ];
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "flex flex-col h-[calc(100dvh-6rem)] pb-12" }, { "default": ($$result2) => renderTemplate` <div class="max-w-3xl mt-auto"> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayLG", "class": "font-serif font-light text-base-600" }, { "default": ($$result3) => renderTemplate`Rui sits down with photographers, planners, designers, florists, and chefs — from Portugal to the US, from France to Mexico. <span class="text-base-900 italic">Every conversation is one the industry should hear.</span>` })} </div> <div class="flex items-center gap-6 mt-8"> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400 font-medium tracking-wide shrink-0" }, { "default": ($$result3) => renderTemplate`
Listen on
` })} <nav class="flex items-center gap-4 flex-wrap"> ${platforms.map((p) => renderTemplate`<a${addAttribute(p.link, "href")} target="_blank" rel="noopener noreferrer" class="text-xs font-medium uppercase tracking-wide text-base-600 hover:text-base-900 transition-colors border-b border-base-300 hover:border-base-900 pb-px"> ${p.name} </a>`)} </nav> </div> ` })} </section>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/podcast/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const episodes = await resolveEpisodeGuests(await getEpisodes());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-32 pb-12" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mt-4 border-t border-black"> ${episodes.map((episode) => {
    const url = `/podcast/interviews/${episode.slug}`;
    const guestName = episode.guests?.[0]?.name ?? null;
    return renderTemplate`<article class="group"> <a${addAttribute(url, "href")}${addAttribute(episode.title, "title")}${addAttribute(`Listen to ${episode.title}`, "aria-label")} class="block aspect-square overflow-hidden"> ${episode.coverArt ? renderTemplate`<img${addAttribute(episode.coverArt, "src")}${addAttribute(guestName ?? episode.title, "alt")} width="800" height="800" class="object-cover w-full h-full group-hover:scale-105" loading="lazy">` : renderTemplate`<div class="w-full h-full bg-stone-100 group-hover:scale-105"></div>`} </a> <div class="mt-3"> ${episode.episodeNumber && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400" }, { "default": async ($$result4) => renderTemplate`
Ep. ${episode.episodeNumber}` })}`} <a${addAttribute(url, "href")} class="group-hover:underline"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "mt-0.5 font-medium leading-snug" }, { "default": async ($$result4) => renderTemplate`${episode.title}` })} </a> ${guestName && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mt-1 text-base-500" }, { "default": async ($$result4) => renderTemplate`${guestName}` })}`} </div> </article>`;
  })} </div> ` })} </section> ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/podcast/index.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/podcast/index.astro";
const $$url = "/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
