import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_CQFbZyH5.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_DLRnYciY.mjs';
import { $ as $$Subscribe } from './Subscribe_CX81cZ8b.mjs';

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-base-900"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-70 pb-24" }, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-white/50 mb-6 tracking-widest" }, { "default": ($$result4) => renderTemplate`
Community
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "displayMD", "class": "font-serif font-light text-white/60" }, { "default": ($$result4) => renderTemplate` <span class="italic text-white">This is not a community</span> for
          people who have arrived.
` })} </div> ` })} </section>  <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-24 pb-16" }, { "default": ($$result3) => renderTemplate` <div class="max-w-2xl"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed first-letter:text-2xl" }, { "default": ($$result4) => renderTemplate`
There's already a place for that. It has a dress code and a waiting
          list and it signals, very clearly, that you are in. The WAC is not
          that place.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-6" }, { "default": ($$result4) => renderTemplate`
The WAC is for people who want more, for their work, for their
          thinking, for the way they move through this industry. People who are
          willing to say what went wrong, not just what went right. People who
          are as interested in someone else's question as they are in their own
          answer.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-900 font-medium leading-relaxed mt-6" }, { "default": ($$result4) => renderTemplate`
You might be ten years in with a full calendar and a price point that
          makes you proud. You might be two years in wondering if the work is
          actually getting better. Both of you belong here.
` })} </div> ` })} </section>  <section class="border-t border-base-200"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-base-400 tracking-widest mb-6" }, { "default": ($$result4) => renderTemplate`
Right now
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result4) => renderTemplate`
For now, it's the podcast. Two episodes a month, honest
            conversations with people who've built something worth talking
            about.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
The direction is towards something more: a space where the
            conversation continues after the episode ends. A place where the
            question someone asks in a group chat at 10pm gets a real answer
            from someone who's been there.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
And eventually, a room where we're all in the same place at the
            same time. Not a summit for the elite. An annual gathering for
            anyone who takes the work seriously enough to show up.
` })} <a href="/podcast" class="inline-block mt-8 uppercase text-xs font-medium text-base-900 border-b border-base-900 pb-0.5 hover:opacity-60 transition-opacity">
Listen to the podcast
</a> </div> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-base-400 tracking-widest mb-6" }, { "default": ($$result4) => renderTemplate`
Who it's for
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result4) => renderTemplate`
The WAC exists for wedding professionals who want more and better,
            for their work, for their income, for their life. Photographers,
            planners, creatives, venue teams.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
It is not aimed at people who are happy where they are. It's not a
            criticism of that choice. It's just a different conversation.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-900 font-medium leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
If you've ever listened to an episode and thought "I needed to hear
            that", you're already part of this.
` })} </div> </div> ` })} </section> ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/community.astro", void 0);

const $$file = "/Users/instante/WAC/Claude Projects/WAC - Website/src/pages/community.astro";
const $$url = "/community";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
