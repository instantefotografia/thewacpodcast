import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import './prerender_CQFbZyH5.mjs';
import 'clsx';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/", 301);
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/blog/tags/index.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
