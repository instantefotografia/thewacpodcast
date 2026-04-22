import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, c as renderSlot } from './prerender_CQFbZyH5.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Bzpvvtw7.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_DLRnYciY.mjs';

const $$LegalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LegalLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textXS", "class": "font-medium text-base-900 uppercase" }, { "default": ($$result4) => renderTemplate`${frontmatter.page}` })} ${renderComponent($$result3, "Wrapper", $$Wrapper, { "variant": "prose", "class": "py-12" }, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })} ` })} </section> ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/layouts/LegalLayout.astro", void 0);

async function getStaticPaths() {
  const legal = await getCollection("legal");
  const paths = legal.map((page) => {
    return {
      params: { slug: page.id },
      props: { page },
      trailingSlash: false
    };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "LegalLayout", $$LegalLayout, { "frontmatter": page.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/legal/[...slug].astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/legal/[...slug].astro";
const $$url = "/legal/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
