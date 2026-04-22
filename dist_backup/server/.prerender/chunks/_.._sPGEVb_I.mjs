import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { a as renderTemplate } from './prerender_CQFbZyH5.mjs';
import 'clsx';

async function getStaticPaths() {
  return [];
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/blog/posts/[...slug].astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/blog/posts/[...slug].astro";
const $$url = "/blog/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
