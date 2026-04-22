import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, d as Fragment, u as unescapeHTML, c as renderSlot } from './prerender_CQFbZyH5.mjs';
import { c as getTranscriptFile, d as getEpisodes, e as getEpisodeBySlug, f as getEpisodeContent, h as getGuestById, i as getEpisodeBody } from './notion_DABSCuBt.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_DLRnYciY.mjs';
import { $ as $$ShareButtons } from './ShareButtons_DaMsTXpR.mjs';
import { $ as $$Subscribe } from './Subscribe_CX81cZ8b.mjs';
import { marked } from 'marked';

const $$EpisodeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EpisodeLayout;
  const { episode, previous, next } = Astro2.props;
  const transcriptMd = episode.transcriptFile ? getTranscriptFile(episode.transcriptFile) : "";
  const transcriptHtml = transcriptMd ? await marked(transcriptMd) : "";
  const keyQuotesList = episode.keyQuotes ? episode.keyQuotes.split(/\s*---\s*/).map((q) => q.trim()).filter(Boolean) : [];
  const summaryParagraphs = episode.summaryEn ? episode.summaryEn.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean) : [];
  const pubDate = episode.publishedDate ? new Date(episode.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }) : "";
  const guest = episode.guests?.[0];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section>  <div class="pt-20 lg:pt-40 flex justify-center"> ${episode.coverArt ? renderTemplate`<img${addAttribute(episode.coverArt, "src")}${addAttribute(episode.title, "alt")} height="2000" width="2000" class="object-cover object-top max-h-[70dvh] max-w-[1000px]">` : null} </div> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pb-32" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl pt-12 mx-auto"> ${episode.episodeNumber && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400 mb-2" }, { "default": async ($$result4) => renderTemplate`
Episode ${episode.episodeNumber}${episode.season ? ` · Season ${episode.season}` : ""}` })}`} ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "displayMD", "class": "font-light leading-6 md:leading-8 text-base-600" }, { "default": async ($$result4) => renderTemplate` <span class="text-base-900">${episode.title}</span> ${episode.shortDescription && renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": async ($$result5) => renderTemplate` — ${episode.shortDescription}` })}`}` })}  ${guest && renderTemplate`<div class="mt-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "text-base-600" }, { "default": async ($$result4) => renderTemplate` <span class="font-medium">${guest.name}</span> ${guest.role && renderTemplate`<span class="block">${guest.role}</span>`}${guest.brand && renderTemplate`<span class="block italic">${guest.brand}</span>`}` })} </div>`} ${pubDate && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mt-2 text-base-400" }, { "default": async ($$result4) => renderTemplate` <time${addAttribute(pubDate, "datetime")}>${pubDate}</time> ` })}`} </div> <div class="max-w-3xl mx-auto"> ${episode.spotifyUrl && episode.audioUrl && renderTemplate`<div class="mt-16 lg:mt-24 flex flex-col sm:flex-row gap-4"> <a${addAttribute(episode.spotifyUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-3 bg-base-900 text-white rounded hover:bg-base-800 transition text-center font-medium text-sm">
Listen on Spotify
</a> ${episode.audioUrl && renderTemplate`<a${addAttribute(episode.audioUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-3 border border-base-900 text-base-900 rounded hover:bg-base-50 transition text-center font-medium text-sm">
Listen on Transistor
</a>`} </div>`} </div> <div class="max-w-3xl mx-auto"> ${summaryParagraphs.length > 0 && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "variant": "textXS", "class": "mt-24 text-base-900 uppercase lg:mt-40" }, { "default": async ($$result5) => renderTemplate`
summary
` })} ${renderComponent($$result4, "Wrapper", $$Wrapper, { "variant": "prose", "class": "mt-2" }, { "default": async ($$result5) => renderTemplate`${summaryParagraphs.map((para) => renderTemplate`<p>${para}</p>`)}` })} ` })}`} ${keyQuotesList.length > 0 && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "variant": "textXS", "class": "mt-12 text-base-900 uppercase lg:mt-20" }, { "default": async ($$result5) => renderTemplate`
key quotes
` })} <div class="mt-4 space-y-6"> ${keyQuotesList.map((quote) => renderTemplate`<blockquote class="border-l-2 border-base-900 pl-5 italic text-base-600 text-sm leading-relaxed"> ${quote} </blockquote>`)} </div> ` })}`}  ${transcriptHtml ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "variant": "textXS", "class": "mt-12 text-base-900 uppercase lg:mt-20" }, { "default": async ($$result5) => renderTemplate`
transcript
` })} ${renderComponent($$result4, "Wrapper", $$Wrapper, { "variant": "prose", "class": "mt-2" }, { "default": async ($$result5) => renderTemplate`${unescapeHTML(transcriptHtml)}` })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "variant": "textXS", "class": "mt-24 text-base-900 uppercase lg:mt-40" }, { "default": async ($$result5) => renderTemplate`
overview
` })} ${renderComponent($$result4, "Wrapper", $$Wrapper, { "variant": "prose", "class": "mt-2" }, { "default": async ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ` })}`} <div class="pt-6 mt-6 border-t border-black"> ${renderComponent($$result3, "ShareButtons", $$ShareButtons, { "contentType": "podcast", "description": episode.shortDescription || episode.title })} </div> </div> ` })} </section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pb-24 pt-8" }, { "default": async ($$result3) => renderTemplate` <nav class="flex flex-col md:flex-row lg:justify-between gap-4 lg:items-center relative text-xs"> ${previous && renderTemplate`<a${addAttribute(`/podcast/interviews/${previous.slug}`, "href")} class="hover:opacity-80"> <span class="block text-base-900 font-medium uppercase">Previous:</span> <span class="block text-base-600">${previous.title}</span> </a>`} ${next && renderTemplate`<a${addAttribute(`/podcast/interviews/${next.slug}`, "href")} class="hover:opacity-80 text-right"> <span class="block text-base-900 font-medium uppercase">Next:</span> <span class="block text-base-600">${next.title}</span> </a>`} </nav> ` })} ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/layouts/EpisodeLayout.astro", void 0);

async function getStaticPaths() {
  const episodes = await getEpisodes();
  return episodes.filter((ep) => ep.slug).map((ep) => ({
    params: { slug: ep.slug },
    props: { slug: ep.slug }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.props;
  const episode = await getEpisodeBySlug(slug);
  if (!episode) return Astro2.redirect("/404");
  const content = await getEpisodeContent(episode.id);
  if (content) {
    episode.keyQuotes = content.keyQuotes;
    episode.summaryEn = content.summaryEn;
    episode.transcriptFile = content.transcriptFile;
  }
  const guests = await Promise.all(
    episode.guestIds.map((id) => getGuestById(id))
  );
  episode.guests = guests.filter(Boolean);
  const bodyMd = await getEpisodeBody(episode.id);
  const bodyHtml = bodyMd ? await marked(bodyMd) : "";
  const allEpisodes = await getEpisodes();
  const idx = allEpisodes.findIndex((ep) => ep.slug === slug);
  const previous = allEpisodes[idx + 1] || null;
  const next = allEpisodes[idx - 1] || null;
  return renderTemplate`${renderComponent($$result, "EpisodeLayout", $$EpisodeLayout, { "episode": episode, "previous": previous, "next": next }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(bodyHtml)}` })} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/interviews/[...slug].astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/interviews/[...slug].astro";
const $$url = "/podcast/interviews/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
