import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import './prerender_BEPFSR4y.mjs';
import 'clsx';

const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Link;
  return Astro2.redirect("/", 301);
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/link.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/link.astro";
const $$url = "/system/link";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Link,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
