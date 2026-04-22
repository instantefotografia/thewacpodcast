import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import './prerender_BEPFSR4y.mjs';
import 'clsx';

const $$Overview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Overview;
  return Astro2.redirect("/", 301);
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/overview.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/overview.astro";
const $$url = "/system/overview";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Overview,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
