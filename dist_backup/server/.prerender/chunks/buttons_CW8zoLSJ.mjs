import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import './prerender_BEPFSR4y.mjs';
import 'clsx';

const $$Buttons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Buttons;
  return Astro2.redirect("/", 301);
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/buttons.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/system/buttons.astro";
const $$url = "/system/buttons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Buttons,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
