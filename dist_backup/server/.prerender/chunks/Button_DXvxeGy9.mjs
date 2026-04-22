import { m as maybeRenderHead, b as addAttribute, s as spreadAttributes, c as renderSlot, a as renderTemplate, r as renderComponent, d as Fragment } from './prerender_CQFbZyH5.mjs';
import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant,
    size,
    onlyIconSize,
    iconOnly = false,
    gap,
    isLink = false,
    class: className,
    ...rest
  } = Astro2.props;
  const defaultClass = [
    "text-white",
    "bg-base-900",
    "hover:bg-base-800",
    "focus:outline-base-800"
  ];
  const accentClass = [
    "text-base-900",
    "bg-accent-500",
    "hover:bg-accent-400",
    "focus:outline-accent-400"
  ];
  const mutedClass = [
    "text-base-900",
    "bg-white",
    "hover:bg-base-50",
    "focus:outline-base-300"
  ];
  const sizes = {
    xxs: ["h-7.5", "px-4", "py-2", "text-xs"],
    xs: ["h-8", "px-4", "py-3", "text-xs"],
    sm: ["h-9", "px-4", "py-3", "text-sm"],
    base: ["h-10", "px-5", "py-4", "text-sm"],
    md: ["h-11", "px-5", "py-4", "text-base"],
    lg: ["h-12", "px-5", "py-4", "text-lg"],
    xl: ["h-13", "px-5", "py-4", "text-lg"]
  };
  const iconSizes = {
    xxs: ["size-7.5", "py-2", "text-xs"],
    xs: ["size-8", "text-xs"],
    sm: ["size-9", "text-sm"],
    base: ["size-10", "text-sm"],
    md: ["size-11", "text-base"],
    lg: ["size-12", "text-lg"],
    xl: ["size-13", "text-lg"]
  };
  const gapMap = {
    xs: ["gap-2"],
    sm: ["gap-4"],
    base: ["gap-8"],
    md: ["gap-10"],
    lg: ["gap-12"]
  };
  const variantClass = {
    default: defaultClass,
    accent: accentClass,
    muted: mutedClass,
    none: []
  };
  const sizeClass = iconOnly ? iconSizes[size] : sizes[size] || [];
  const gapClass = !iconOnly && gap ? gapMap[gap] : [];
  const additionalClasses = className ? className.split(" ") : [];
  const baseClass = [
    "flex",
    "justify-center",
    "text-center",
    "font-medium",
    "rounded-full",
    "items-center",
    "duration-500",
    "ease-in-out",
    "transition-all",
    "focus:outline-2",
    "focus:outline-offset-4"
  ];
  return renderTemplate`${isLink ? renderTemplate`${maybeRenderHead()}<a${addAttribute(rest.href, "href")}${addAttribute([
    ...baseClass,
    ...variantClass[variant] || [],
    ...sizeClass,
    ...gapClass,
    ...additionalClasses
  ], "class:list")}${spreadAttributes(rest)}>${iconOnly ? renderTemplate`${renderSlot($$result, $$slots["icon"])}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["left-icon"])}${renderSlot($$result2, $$slots["default"])}${renderSlot($$result2, $$slots["right-icon"])}` })}`}</a>` : renderTemplate`<button${addAttribute([
    ...baseClass,
    ...variantClass[variant] || [],
    ...sizeClass,
    ...gapClass,
    ...additionalClasses
  ], "class:list")}${spreadAttributes(rest)}>${iconOnly ? renderTemplate`${renderSlot($$result, $$slots["icon"])}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["left-icon"])}${renderSlot($$result2, $$slots["default"])}${renderSlot($$result2, $$slots["right-icon"])}` })}`}</button>`}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/elements/Button.astro", void 0);

export { $$Button as $ };
