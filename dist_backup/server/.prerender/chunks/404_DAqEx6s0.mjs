import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQFbZyH5.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_DLRnYciY.mjs';
import { $ as $$Button } from './Button_DXvxeGy9.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "hideNav": true, "hideFooter": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "text-center", "class": "flex flex-col items-center justify-center pt-32 pb-12 h-svh" }, { "default": ($$result3) => renderTemplate` <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display3XL", "class": "font-serif font-light tracking-tight text-center text-base-900" }, { "default": ($$result4) => renderTemplate`404
` })} <div class="flex justify-center"> ${renderComponent($$result3, "Button", $$Button, { "isLink": true, "href": "/", "class": "w-auto text-center", "size": "xs", "variant": "default" }, { "default": ($$result4) => renderTemplate`Go back home` })} </div> </div> ` })} </section> ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/404.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
