import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './prerender_BEPFSR4y.mjs';
import 'clsx';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_C29aMkG-.mjs';
import { $ as $$Subscribe } from './Subscribe_DcKuCIah.mjs';

const $$AuthorGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AuthorGrid;
  const { images } = Astro2.props;
  const itemClasses = [
    "item-1",
    "item-2",
    "item-3",
    "item-4",
    "item-5",
    "item-6",
    "item-7"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="authorImageLayout" data-astro-cid-alkwlvnm> ${images.map((src, index) => renderTemplate`<div${addAttribute(`item ${itemClasses[index]}`, "class")}${addAttribute(`background-image: url(${src});`, "style")} data-astro-cid-alkwlvnm></div>`)} </div>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/authors/AuthorGrid.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-base-900"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-70 pb-24" }, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-white/50 mb-6 tracking-widest" }, { "default": ($$result4) => renderTemplate`
The Host
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "displayMD", "class": "font-serif font-light text-white/60" }, { "default": ($$result4) => renderTemplate` <span class="italic text-white">I started the WAC</span> because I
          needed the conversation to exist.
` })} </div> ` })} </section>  <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-24 pb-16" }, { "default": ($$result3) => renderTemplate` <div class="max-w-xl mx-auto"> <!-- Text Section --> <div class="mb-20"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed first-letter:text-2xl" }, { "default": ($$result4) => renderTemplate`
Not a blog. Not a newsletter. A real conversation with people in the
            same industry, carrying the same questions, pretending less than they
            do online.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-6" }, { "default": ($$result4) => renderTemplate`
I'm Rui. I've been photographing weddings professionally since 2010.
            Over those years I built something I'm proud of. I also spent a long
            time building it in relative silence, because the industry didn't
            have many places where you could say "I'm afraid I won't have
            bookings next year" without it reading as a sign of weakness.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-6" }, { "default": ($$result4) => renderTemplate`
Then I interviewed Greg Finck. One of the best wedding photographers
            in the world. And he said exactly that.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-900 font-medium leading-relaxed mt-6" }, { "default": ($$result4) => renderTemplate`
That conversation confirmed what I already suspected: the level of
            the brand doesn't change the level of the fear. It just changes how
            well you hide it. The WAC exists because hiding it is a waste.
` })} </div> </div>  ${renderComponent($$result3, "AuthorGrid", $$AuthorGrid, { "images": [
    "/images/hosts/wac-host-1.jpg",
    "/images/hosts/wac-host-2.jpg",
    "/images/hosts/wac-host-3.jpg",
    "/images/hosts/wac-host-4.jpg",
    "/images/hosts/wac-host-5.jpg",
    "/images/hosts/wac-host-6.jpg",
    "/images/hosts/wac-host-7.jpg"
  ] })} ` })} </section>  <section class="border-t border-base-200"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24" }, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-3 gap-16"> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-base-400 tracking-widest mb-6" }, { "default": ($$result4) => renderTemplate`
The Podcast
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result4) => renderTemplate`
Each episode is a conversation with someone who has built something
            real in this industry. Photographers, planners, creatives, venue
            directors. The format is simple. I ask the questions I actually want
            answered. We go where the conversation leads.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
No scripts. No manufactured energy.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
I've been doing this for two years. I moved too fast at first, too
            many things at once, too much looking at what the project could
            become instead of what it needed to be. I've slowed down. I came
            back to the thing that worked from the start: showing up,
            consistently, with good questions and the patience to listen.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-900 font-medium mt-4" }, { "default": ($$result4) => renderTemplate`
That's still the whole plan.
` })} <a href="/podcast" class="inline-block mt-8 uppercase text-xs font-medium text-base-900 border-b border-base-900 pb-0.5 hover:opacity-60 transition-opacity">
Listen to all episodes
</a> </div> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-base-400 tracking-widest mb-6" }, { "default": ($$result4) => renderTemplate`
The Blog
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result4) => renderTemplate`
I also write. The blog is where some of those conversations
            continue, or go further than the episode allowed. Topics with real
            weight in this industry: pricing, positioning, the slow work of
            building a reputation, what it means to want more without losing
            what already works.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
I write the way I host: directly, without performing expertise I
            don't have.
` })} <a href="/blog" class="inline-block mt-8 uppercase text-xs font-medium text-base-900 border-b border-base-900 pb-0.5 hover:opacity-60 transition-opacity">
Read the blog
</a> </div> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "font-medium uppercase text-base-400 tracking-widest mb-6" }, { "default": ($$result4) => renderTemplate`
The Host
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed" }, { "default": ($$result4) => renderTemplate`
Wedding photographer since 2010. Based in Portugal, working across
            Europe.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
I notice things. That's the job, whether I'm holding a camera or a
            microphone. I've spent fifteen years learning to read a room, to see
            what's about to happen before it does, and to stay out of the way
            when the moment arrives. I brought the same instinct to the WAC.
` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600 leading-relaxed mt-4" }, { "default": ($$result4) => renderTemplate`
I don't put a photo above the experience of the person in front of
            me. A conversation that feels real will always matter more to me
            than an episode that sounds polished.
` })} </div> </div> ` })} </section> ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/about.astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
