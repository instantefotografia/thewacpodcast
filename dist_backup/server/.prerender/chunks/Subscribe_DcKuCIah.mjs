import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate, r as renderComponent } from './prerender_BEPFSR4y.mjs';
import { a as $$Wrapper, r as renderScript, b as $$Text } from './BaseLayout_C29aMkG-.mjs';
import { $ as $$Button } from './Button_BOAmrxSu.mjs';
import 'clsx';

const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArrowRight;
  const { variant, size, class: className, ...rest } = Astro2.props;
  const xs = ["size-3"];
  const sm = ["size-4"];
  const base = ["size-5"];
  const md = ["size-6"];
  const lg = ["size-7"];
  const xl = ["size-8"];
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"${addAttribute([
    "icon",
    size === "xs" && xs,
    size === "sm" && sm,
    size === "base" && base,
    size === "md" && md,
    size === "lg" && lg,
    size === "xl" && xl,
    className
  ], "class:list")}${spreadAttributes(rest)}> <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/fundations/icons/ArrowRight.astro", void 0);

const $$Subscribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "flex flex-col py-24 lg:pt-48" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "displayXL", "class": "font-serif font-light tracking-tight text-base-900 lg:text-balance" }, { "default": async ($$result3) => renderTemplate`
New episodes, twice a month. Be the first to hear them.
` })} <form id="subscribe-form" class="flex items-baseline w-full mt-8 space-y-4 gap-2"> <div class="w-full"> <label for="email" class="sr-only"> Email Address </label> <input type="email" id="subscribe-email" name="email" required class="w-full h-8 px-0 py-2 text-xs placeholder-black bg-transparent border-t-0 border-b border-black border-x-0 focus:outline-none focus:ring-2 focus:ring-base-500 focus:border-base-500" placeholder="your@email.com"> </div> ${renderComponent($$result2, "Button", $$Button, { "iconOnly": true, "size": "sm", "type": "submit", "variant": "default" }, { "default": async ($$result3) => renderTemplate` <span class="sr-only">Subscribe</span>  `, "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "ArrowRight", $$ArrowRight, { "slot": "icon", "size": "sm" })}` })} </form> <p id="subscribe-msg" class="hidden mt-3 text-xs text-base-600"></p> ` })} </section> ${renderScript($$result, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/ctas/Subscribe.astro?astro&type=script&index=0&lang.ts")}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/ctas/Subscribe.astro", void 0);

export { $$Subscribe as $ };
