import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, c as renderSlot, d as Fragment, u as unescapeHTML } from './prerender_BEPFSR4y.mjs';
import { g as getBlogPosts, a as getBlogPostBySlug, b as getBlogPostBody } from './notion_DABSCuBt.mjs';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from './BaseLayout_C29aMkG-.mjs';
import { $ as $$ShareButtons } from './ShareButtons_DTd65ecG.mjs';
import { marked } from 'marked';

const $$BlogArticleLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogArticleLayout;
  const { post, previous, next } = Astro2.props;
  const pubDate = post.publishDate ? new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }) : "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="min-h-dvh flex flex-col"> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "flex flex-col flex-1" }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto mt-auto pb-16"> ${post.cluster?.length > 0 && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400 tracking-widest mb-4" }, { "default": ($$result4) => renderTemplate`${post.cluster.join(" · ")}` })}`} ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "display3XL", "class": "font-serif font-light tracking-tight text-base-900 text-balance" }, { "default": ($$result4) => renderTemplate`${post.title}` })} ${post.excerpt && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-6 max-w-4xl mx-auto text-base-600" }, { "default": ($$result4) => renderTemplate`${post.excerpt}` })}`} </div> ` })} </section> <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pb-32" }, { "default": ($$result3) => renderTemplate` <div class="border-t border-black pt-8"> ${pubDate && renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mb-8 uppercase text-base-400" }, { "default": ($$result4) => renderTemplate` <time${addAttribute(post.publishDate, "datetime")}>${pubDate}</time> ` })}`} ${renderComponent($$result3, "Wrapper", $$Wrapper, { "variant": "prose", "class": "max-w-4xl mx-auto prose-h2:font-serif prose-h2:font-light prose-h2:tracking-tight prose-h2:text-5xl prose-h2:text-base-900 prose-h2:mt-16 prose-h2:mb-4 prose-blockquote:italic prose-blockquote:pl-8 prose-blockquote:font-serif prose-blockquote:font-light prose-blockquote:text-4xl prose-blockquote:leading-tight prose-blockquote:tracking-tight prose-blockquote:text-base-900 prose-blockquote:my-16" }, { "default": ($$result4) => renderTemplate` ${renderSlot($$result4, $$slots["default"])} ` })}  <div class="max-w-4xl mx-auto mt-16 pt-10 text-center"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displaySM", "class": "font-serif font-light text-base-900 text-balance leading-snug" }, { "default": ($$result4) => renderTemplate`
If this resonated, explore more articles in${" "}<a href="/blog" class="underline underline-offset-4 hover:opacity-60 transition-opacity">The WAC Blog</a>,
            or listen to${" "}<a href="/podcast" class="underline underline-offset-4 hover:opacity-60 transition-opacity">The WAC Podcast</a>,
            where we go deeper into the business of being a wedding professional in Europe.
` })} <div class="flex justify-center mt-8"> ${renderComponent($$result3, "ShareButtons", $$ShareButtons, { "contentType": "blog", "description": post.excerpt || post.title })} </div> </div> </div> ` })} </section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pb-24 pt-4" }, { "default": ($$result3) => renderTemplate` <nav class="flex flex-col md:flex-row lg:justify-between gap-4 lg:items-center text-xs pt-8"> ${previous && renderTemplate`<a${addAttribute(`/blog/${previous.slug}`, "href")} class="hover:opacity-80"> <span class="block text-base-900 font-medium uppercase">Previous:</span> <span class="block text-base-600">${previous.title}</span> </a>`} ${next && renderTemplate`<a${addAttribute(`/blog/${next.slug}`, "href")} class="hover:opacity-80 text-right"> <span class="block text-base-900 font-medium uppercase">Next:</span> <span class="block text-base-600">${next.title}</span> </a>`} </nav> ` })} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/layouts/BlogArticleLayout.astro", void 0);

async function getStaticPaths() {
  const posts = await getBlogPosts();
  return posts.filter((p) => p.slug).map((p) => ({
    params: { slug: p.slug },
    props: { slug: p.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.props;
  const post = await getBlogPostBySlug(slug);
  if (!post) return Astro2.redirect("/404");
  const bodyMd = await getBlogPostBody(post.id);
  const bodyHtml = bodyMd ? await marked(bodyMd) : "";
  const allPosts = await getBlogPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const previous = allPosts[idx + 1] || null;
  const next = allPosts[idx - 1] || null;
  return renderTemplate`${renderComponent($$result, "BlogArticleLayout", $$BlogArticleLayout, { "post": post, "previous": previous, "next": next }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(bodyHtml)}` })} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/[slug].astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
