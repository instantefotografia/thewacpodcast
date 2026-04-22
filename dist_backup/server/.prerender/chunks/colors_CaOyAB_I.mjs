import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import './prerender_CQFbZyH5.mjs';
import 'clsx';

const $$Colors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Colors;
  return Astro2.redirect("/", 301);
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/system/colors.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/system/colors.astro";
const $$url = "/system/colors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Colors,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
