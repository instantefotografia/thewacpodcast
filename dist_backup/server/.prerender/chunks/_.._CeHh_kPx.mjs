import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { a as renderTemplate } from './prerender_BEPFSR4y.mjs';
import 'clsx';

async function getStaticPaths() {
  return [];
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/posts/[...slug].astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/posts/[...slug].astro";
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
