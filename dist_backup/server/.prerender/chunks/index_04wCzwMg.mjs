import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQFbZyH5.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_DLRnYciY.mjs';
import { g as getCollection } from './_astro_content_Bzpvvtw7.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("podcast");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24 text-center" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textXS", "class": "font-medium text-base-900 uppercase" }, { "default": async ($$result4) => renderTemplate`
Tags
` })} <ul role="list" class="space-y-4 mt-12"> ${tags.map((tag) => renderTemplate`<li> ${renderComponent($$result3, "Text", $$Text, { "tag": "a", "variant": "displaySM", "href": `/podcast/tags/${tag}`, "class": "mx-auto font-serif font-light tracking-tight text-center text-base-900  hover:underline text-balance capitalize" }, { "default": async ($$result4) => renderTemplate`${tag}` })} </li>`)} </ul> ` })} </section> ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/tags/index.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/podcast/tags/index.astro";
const $$url = "/podcast/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
