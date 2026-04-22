import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_BEPFSR4y.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_C29aMkG-.mjs';
import { $ as $$Subscribe } from './Subscribe_DcKuCIah.mjs';
import { g as getBlogPosts } from './notion_DABSCuBt.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogPosts();
  function fmtDate(d) {
    return d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" }) : "";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-base-900"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-70 pb-24" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-white/50 mb-6 tracking-widest" }, { "default": async ($$result4) => renderTemplate`
The WAC Blog
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "displayMD", "class": "font-serif font-light text-white/60" }, { "default": async ($$result4) => renderTemplate` <span class="italic text-white">Industry insight,</span> craft, and
          community — for wedding professionals who think deeply about their work.
` })} </div> ` })} </section> ${posts.length === 0 ? renderTemplate`<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-400" }, { "default": async ($$result4) => renderTemplate`No articles published yet.` })} ` })} </section>` : renderTemplate`<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-16 pb-24" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "font-medium uppercase" }, { "default": async ($$result4) => renderTemplate`All articles` })} <div class="items-start pt-4 mt-4 border-t border-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="relative group"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="absolute inset-0 z-10"${addAttribute(post.title, "aria-label")}></a> <div> ${post.cluster?.length > 0 && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400 mb-2" }, { "default": async ($$result4) => renderTemplate`${post.cluster[0]}` })}`} ${renderComponent($$result3, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "font-medium group-hover:underline" }, { "default": async ($$result4) => renderTemplate`${post.title}` })} ${post.excerpt && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-1 text-base-600" }, { "default": async ($$result4) => renderTemplate`${post.excerpt}` })}`} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mt-3 uppercase text-base-400" }, { "default": async ($$result4) => renderTemplate` <time${addAttribute(post.publishDate, "datetime")}>${fmtDate(post.publishDate)}</time> ` })} </div> </article>`)} </div> ` })} </section>`}${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
