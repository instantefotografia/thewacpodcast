import { c as createComponent } from './astro-component_LJ7oMgmt.mjs';
import 'piccolore';
import { A as AstroError, I as ImageMissingAlt, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate, F as FontFamilyNotFound, u as unescapeHTML, r as renderComponent } from './prerender_BEPFSR4y.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_C8yN89JF.mjs';
import { r as resolveSrc, i as isESMImportedImage, g as getImage$1 } from './deterministic-string_COzYB4V5.mjs';
import 'clsx';
import * as mime from 'mrmime';
import { b as $$Text, $ as $$BaseLayout, a as $$Wrapper } from './BaseLayout_C29aMkG-.mjs';
import readingTime from 'reading-time';

const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = Number.parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = Number.parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  if (layout !== "none") {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/node_modules/astro/components/Image.astro", void 0);

const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.layout ?? "none";
  const useResponsive = layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.layout;
    props.fit ??= imageConfig.objectFit ?? "cover";
    props.position ??= imageConfig.objectPosition ?? "center";
  } else if (imageConfig.objectFit || imageConfig.objectPosition) {
    props.fit ??= imageConfig.objectFit;
    props.position ??= imageConfig.objectPosition;
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  const clonedSrc = isESMImportedImage(originalSrc) ? (
    // @ts-expect-error - clone is a private, hidden prop
    originalSrc.clone ?? originalSrc
  ) : originalSrc;
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) {
    resultFallbackFormat = clonedSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = {
    ...imgAdditionalAttributes,
    ...fallbackImage.attributes
  };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/node_modules/astro/components/Picture.astro", void 0);

const componentDataByCssVariable = new Map([]);

function filterPreloads(data, preload) {
  if (!preload) {
    return null;
  }
  if (preload === true) {
    return data;
  }
  return data.filter(
    ({ weight, style, subset }) => preload.some((p) => {
      if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) {
        return false;
      }
      if (p.style !== void 0 && p.style !== style) {
        return false;
      }
      if (p.subset !== void 0 && p.subset !== subset) {
        return false;
      }
      return true;
    })
  );
}
function checkWeight(input, target) {
  const trimmedInput = input.trim();
  if (trimmedInput.includes(" ")) {
    return trimmedInput === target;
  }
  if (target.includes(" ")) {
    const [a, b] = target.split(" ");
    const parsedInput = Number.parseInt(input);
    return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
  }
  return input === target;
}

const $$Font = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Font;
  const { cssVariable, preload = false } = Astro2.props;
  const data = componentDataByCssVariable.get(cssVariable);
  if (!data) {
    throw new AstroError({
      ...FontFamilyNotFound,
      message: FontFamilyNotFound.message(cssVariable)
    });
  }
  const filteredPreloadData = filterPreloads(data.preloads, preload);
  return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/node_modules/astro/components/Font.astro", void 0);

const assetQueryParams = undefined;
					const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"responsiveStyles":false};
					Object.defineProperty(imageConfig, 'assetQueryParams', {
						value: assetQueryParams,
						enumerable: false,
						configurable: true,
					});
							const getImage = async (options) => await getImage$1(options, imageConfig);

const $$BlogCard2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard2;
  const { url, title, description, pubDate, image, author } = {
    url: "/blog/posts/" + Astro2.props.post.id,
    title: Astro2.props.post.data.title,
    author: Astro2.props.post.data.author,
    image: Astro2.props.post.data.image.url,
    description: Astro2.props.post.data.description,
    pubDate: new Date(Astro2.props.post.data.pubDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    })
  };
  const formatAuthorName = (slug) => {
    return slug.replace(/-/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  const formattedAuthor = formatAuthorName(author);
  const timeToRead = readingTime(Astro2.props.post.body);
  return renderTemplate`${maybeRenderHead()}<article class="relative"> <a${addAttribute(url, "href")}${addAttribute(title, "title")}${addAttribute(`Read more about ${title}`, "aria-label")} class="absolute inset-0"></a> ${renderComponent($$result, "Image", $$Image, { "src": image, "width": "800", "height": "800", "loading": "eager", "decoding": "async", "class": "object-cover aspect-square w-full", "alt": title })} <div class="mt-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "uppercase text-base-400" }, { "default": ($$result2) => renderTemplate` <time${addAttribute(pubDate, "datetime")}>${pubDate}</time> <span>·</span> <span>${timeToRead.text}</span> ` })} ${renderComponent($$result, "Text", $$Text, { "tag": "h2", "variant": "textSM", "class": "mt-4 font-medium" }, { "default": ($$result2) => renderTemplate`${formattedAuthor} — ${title}` })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-1 text-base-600" }, { "default": ($$result2) => renderTemplate`${description}` })} </div> </article>`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/components/blog/BlogCard2.astro", void 0);

const $$AuthorsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AuthorsLayout;
  const { frontmatter } = Astro2.props;
  const authorSlug = Astro2.url.pathname.split("/").filter(Boolean).pop();
  const authorName = authorSlug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const allPosts = await getCollection("posts");
  const allPodcasts = await getCollection("podcast");
  const relatedPosts = allPosts.filter((post) => post.data.author === authorSlug);
  const relatedPodcasts = allPodcasts.filter(
    (episode) => episode.data.author === authorSlug
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-24" }, { "default": async ($$result3) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> ${renderComponent($$result3, "Image", $$Image, { "width": 800, "height": 800, "src": frontmatter.image.url, "alt": frontmatter.image.alt, "loading": "lazy", "decoding": "async", "class": "w-full bg-base-50 object-cover sticky top-12 aspect-square grayscale" })} <div class="lg:py-32"> <div> ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "display3XL", "class": "font-serif font-light tracking-tight text-base-900" }, { "default": async ($$result4) => renderTemplate`${frontmatter.name}` })} ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS", "class": "mt-1 font-medium uppercase text-base-600" }, { "default": async ($$result4) => renderTemplate`${frontmatter.role}` })} <div class="flex flex-col justify-between h-full mt-4"> ${frontmatter.bio && renderTemplate`<div class="flex flex-col gap-2"> ${frontmatter.bio.split("\n").map((paragraph) => renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-base-600" }, { "default": async ($$result4) => renderTemplate`${paragraph}` })}`)} </div>`}  ${frontmatter.socials && renderTemplate`<div class="flex items-center mt-12 gap-4"> <a${addAttribute(frontmatter.socials.twitter, "href")} aria-label="Twitter" class="text-base-600 hover:text-base-900">
Twitter
</a> <a${addAttribute(frontmatter.socials.linkedin, "href")} aria-label="LinkedIn" class="text-base-600 hover:text-base-900">
Linkedin
</a> <a${addAttribute(frontmatter.socials.email, "href")} aria-label="Email" class="text-base-600 hover:text-base-900">
Email
</a> <a${addAttribute(frontmatter.socials.website, "href")} aria-label="Website" class="text-base-600 hover:text-base-900">
Website
</a> </div>`} </div> </div> </div> </div> ` })} </section> <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-32 pb-12" }, { "default": async ($$result3) => renderTemplate`${relatedPosts.length > 0 && renderTemplate`<div> ${renderComponent($$result3, "Text", $$Text, { "tag": "h2", "variant": "displayMD", "class": "font-serif font-light text-base-600" }, { "default": async ($$result4) => renderTemplate`
More articles from ${authorName}` })} <div class="items-start pt-2 mt-2 border-t border-black grid grid-cols-1 md:grid-cols-2  gap-2 gap-y-8"> ${relatedPosts.map((post) => renderTemplate`${renderComponent($$result3, "BlogCard2", $$BlogCard2, { "post": post })}`)} </div> </div>`}` })} </section> <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-32 pb-12" }, { "default": async ($$result3) => renderTemplate`${relatedPodcasts.length > 0 && renderTemplate`<div> ${renderComponent($$result3, "Text", $$Text, { "tag": "h2", "variant": "displayMD", "class": "font-serif font-light text-base-600" }, { "default": async ($$result4) => renderTemplate`
Interviews with ${authorName}` })} <div class="items-start pt-2 mt-2 border-t border-black grid grid-cols-1 md:grid-cols-2  gap-2 gap-y-8"> ${relatedPodcasts.map((episode) => renderTemplate`${renderComponent($$result3, "BlogCard2", $$BlogCard2, { "post": episode })}`)} </div> </div>`}` })} </section> ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/layouts/AuthorsLayout.astro", void 0);

async function getStaticPaths() {
  const authors = await getCollection("authors");
  const paths = authors.map((page) => {
    return {
      params: { slug: page.id },
      props: { page },
      trailingSlash: false
    };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "AuthorsLayout", $$AuthorsLayout, { "frontmatter": page.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/authors/[...slug].astro", void 0);

const $$file = "/sessions/eager-modest-galileo/mnt/WAC - Website/src/pages/authors/[...slug].astro";
const $$url = "/authors/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
