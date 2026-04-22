import { c as createComponent } from './astro-component_Bq2C7GBZ.mjs';
import 'piccolore';
import { k as createRenderInstruction, r as renderComponent, d as Fragment, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, c as renderSlot, l as renderHead } from './prerender_CQFbZyH5.mjs';
import { escape } from 'html-escaper';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/node_modules/@lexingtonthemes/seo/src/AstroSeo.astro", void 0);

const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title = "Wedding Artists Community Podcast",
    description = "The podcast for wedding industry professionals who want to think deeper, build better, and connect with peers across the world.",
    image = "/og-image.jpg"
  } = Astro2.props;
  const siteUrl = "https://thewacpodcast.com";
  const fullTitle = title === "Wedding Artists Community Podcast" ? title : `${title} | WAC Podcast`;
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": fullTitle, "description": description, "canonical": siteUrl, "openGraph": {
    url: siteUrl,
    title: fullTitle,
    description,
    images: [
      {
        url: `${siteUrl}${image}`,
        width: 1200,
        height: 630,
        alt: "Wedding Artists Community Podcast",
        type: "image/jpeg"
      }
    ],
    site_name: "WAC Podcast",
    type: "website",
    locale: "en_US"
  }, "twitter": {
    handle: "@wacpodcast",
    site: "@wacpodcast",
    cardType: "summary_large_image"
  } })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/head/Seo.astro", void 0);

const $$Meta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#ffffff"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow">`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/head/Meta.astro", void 0);

const $$Fonts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Inter font from rsms.me/inter --><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css"><!-- Cormorant Garamond from Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/head/Fonts.astro", void 0);

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Favicons WAC --><link rel="icon" href="/WAC-icon-chocolate.png" type="image/png"><link rel="shortcut icon" href="/WAC-icon-chocolate.png" type="image/png"><link rel="apple-touch-icon" href="/WAC-icon-chocolate.png"><link rel="apple-touch-icon" sizes="180x180" href="/WAC-icon-chocolate.png">`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/head/Favicons.astro", void 0);

const $$FuseJS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- FuseJS: https://fusejs.io/ -->${renderScript($$result, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/scripts/FuseJS.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/scripts/FuseJS.astro", void 0);

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Seo", $$Seo, {})} ${renderComponent($$result, "Meta", $$Meta, {})} ${renderComponent($$result, "Fonts", $$Fonts, {})} ${renderComponent($$result, "Favicons", $$Favicons, {})} ${renderComponent($$result, "FuseJS", $$FuseJS, {})}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/head/BaseHead.astro", void 0);

const $$LogoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LogoIcon;
  const { class: className = "", variant = "chocolate", ...rest } = Astro2.props;
  const src = variant === "white" ? "/WAC-icon-branco.png" : "/WAC-icon-chocolate.png";
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")} alt="WAC"${addAttribute(className, "class")}${spreadAttributes(rest)}>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/assets/LogoIcon.astro", void 0);

const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Text;
  const textStyles = {
    display6XL: "text-4xl  sm:text-7xl md:text-9xl lg:text-[12rem]",
    display5XL: "text-4xl  sm:text-7xl md:text-8xl lg:text-[10rem]",
    display4XL: "text-4xl  sm:text-7xl md:text-8xl lg:text-9xl",
    display3XL: "text-5xl  sm:text-6xl md:text-7xl lg:text-8xl",
    display2XL: "text-5xl  sm:text-5xl md:text-6xl lg:text-7xl",
    displayXL: "text-4xl  sm:text-4xl md:text-5xl lg:text-6xl",
    displayLG: "text-3xl  sm:text-3xl md:text-4xl lg:text-5xl",
    displayMD: "text-2xl  sm:text-2xl md:text-3xl lg:text-4xl",
    displaySM: "text-lg  sm:text-xl md:text-2xl lg:text-3xl",
    displayXS: "text-base  sm:text-lg md:text-xl lg:text-2xl",
    textXL: "text-lg sm:text-xl md:text-2xl",
    textLG: "text-base sm:text-lg md:text-xl ",
    textBase: "text-base",
    textSM: "text-sm ",
    textXS: "text-xs "
  };
  const {
    tag: Tag = "p",
    // Defaults to paragraph tag
    class: className = "",
    // No additional classes by default
    variant = "textBase",
    // Defaults to textMD style variant
    ...rest
    // Collect remaining props
  } = Astro2.props;
  const baseClasses = textStyles[variant] || textStyles.textBase;
  const combinedClasses = `${baseClasses} ${className}`.trim();
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": combinedClasses, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["left-icon"])} ${renderSlot($$result2, $$slots["default"])} ${renderSlot($$result2, $$slots["right-icon"])} ` })}`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/elements/Text.astro", void 0);

const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Wrapper;
  const { variant = "standard", class: extraClass = "" } = Astro2.props;
  const variantClasses = {
    narrow: "max-w-xl px-4  mx-auto",
    standard: "max-w-7xl 2xl:max-w-[1656px] px-8 lg:px-8  mx-auto",
    // Prose styles
    prose: "prose prose-headings:text-base prose-headings:tracking-tight prose-headings:font-medium prose-p:text-base-600 prose-a:text-accent-800 prose-a:hover:text-accent-900 prose-blockquote:italic prose-blockquote:text-base-600 prose-blockquote:border-l-4 prose-blockquote:border-black prose-strong:text-base-900 prose-strong:font-bold prose-pre:bg-base-900 prose-pre:text-white prose-pre:rounded-md prose-pre:p-4 prose-img:rounded-lg prose-table:border-collapse prose-headings:font-serif prose-strong:font-sans prose-th:border-b-2 prose-th:border-base-300 prose-td:border-b prose-td:border-base-300 prose-hr:border-base-200 text-sm first-letter:text-2xl"
  };
  const classes = `${variantClasses[variant]} ${extraClass}`.trim();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/containers/Wrapper.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const podcastPlatforms = [
    { name: "Spotify", link: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO?si=d4a41214c2d8412a" },
    { name: "Apple Podcasts", link: "https://podcasts.apple.com/pt/podcast/the-wac-podcast/id1739397751" },
    { name: "YouTube", link: "https://www.youtube.com/@thewacpodcast" }
  ];
  const siteLinks = [
    { name: "Podcast", link: "/podcast" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Community", link: "/community" }
  ];
  const socialLinks = [
    { name: "Instagram", link: "https://instagram.com/thewacpodcast" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="z-0 w-full pb-2 bg-base-900"> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:pt-12" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LogoIcon", $$LogoIcon, { "class": "h-16 w-auto", "variant": "white" })}  <div class="mt-12 flex flex-col md:flex-row md:justify-between gap-12"> <!-- Description --> <div class="max-w-xs"> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-2 text-base-400" }, { "default": ($$result3) => renderTemplate`
The Wedding Artists Community is where photographers, planners, and
          creatives come to share honestly, build better, and connect with
          peers across the world.
` })} </div> <!-- Nav columns: Social · Listen On · Navigate --> <div class="flex flex-row gap-12 lg:gap-16"> <div> ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "variant": "textXS", "class": "font-medium text-white uppercase tracking-wide" }, { "default": ($$result3) => renderTemplate`
Social
` })} <nav class="flex flex-col mt-4 gap-2"> ${socialLinks.map((link) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "a", "variant": "textXS", "href": link.link, "target": "_blank", "rel": "noopener noreferrer", "class": "font-medium uppercase text-base-300 hover:underline tracking-wide" }, { "default": ($$result3) => renderTemplate`${link.name}` })}`)} </nav> </div> <div> ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "variant": "textXS", "class": "font-medium text-white uppercase tracking-wide" }, { "default": ($$result3) => renderTemplate`
Listen on
` })} <nav class="flex flex-col mt-4 gap-2"> ${podcastPlatforms.map((platform) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "a", "variant": "textXS", "href": platform.link, "aria-label": `Listen on ${platform.name}`, "class": "font-medium uppercase text-base-300 hover:underline tracking-wide" }, { "default": ($$result3) => renderTemplate`${platform.name}` })}`)} </nav> </div> <div> ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "variant": "textXS", "class": "font-medium text-white uppercase tracking-wide" }, { "default": ($$result3) => renderTemplate`
Navigate
` })} <nav class="flex flex-col mt-4 gap-2"> ${siteLinks.map((link) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "a", "variant": "textXS", "href": link.link, "class": "font-medium uppercase text-base-300 hover:underline tracking-wide" }, { "default": ($$result3) => renderTemplate`${link.name}` })}`)} </nav> </div> </div> </div> <div class="mt-12 pt-6 border-t border-base-800 text-center"> ${renderComponent($$result2, "Text", $$Text, { "tag": "span", "class": "text-xs font-medium text-white" }, { "default": ($$result3) => renderTemplate`
© ${(/* @__PURE__ */ new Date()).getFullYear()} Wedding Artists Community. All rights reserved.
` })} </div> ` })} </footer>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/global/Footer.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "", variant = "chocolate", ...rest } = Astro2.props;
  const src = variant === "white" ? "/WAC-logo-branco.png" : "/WAC-logo-chocolate.png";
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")} alt="Wedding Artists Community"${addAttribute(className, "class")}${spreadAttributes(rest)}>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/assets/Logo.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const primaryNavLinks = [
    { href: "/", link: "Home" },
    { href: "/podcast", link: "Podcast" },
    { href: "/blog", link: "Blog" },
    { href: "/about", link: "About" },
    { href: "/community", link: "Community" }
  ];
  return renderTemplate`<!-- Logo: pequeno em mobile, grande em desktop -->${maybeRenderHead()}<div class="fixed top-[6px] left-[8px] z-50 mix-blend-difference pointer-events-none"> <a href="/" class="pointer-events-auto"> <span class="sr-only">Wedding Artists Community</span> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-16 lg:h-36 w-auto", "variant": "white" })} </a> </div> <!-- Nav: esconde Home em mobile para não colidir com o logo --> <div class="fixed top-4 right-0 z-50 mix-blend-difference pointer-events-none"> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard" }, { "default": ($$result2) => renderTemplate` <nav class="flex items-center justify-end gap-4 lg:gap-6 pointer-events-auto"> ${primaryNavLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="uppercase text-white hover:opacity-60 font-medium text-[10px] lg:text-xs tracking-wide transition-opacity"> ${link.link} </a>`)} </nav> ` })} </div>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/global/navigation/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$AudioPlayerScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script type="module">\n    document.addEventListener("DOMContentLoaded", () => {\n      const playPauseBtn = document.getElementById("playPauseBtn");\n      const audioElement = document.getElementById("audioElement");\n      const seekBar = document.getElementById("seekBar");\n      const muteBtn = document.getElementById("muteBtn");\n      const backwardBtn = document.getElementById("backwardBtn");\n      const forwardBtn = document.getElementById("forwardBtn");\n      const currentTimeDisplay = document.getElementById("currentTime");\n      const durationDisplay = document.getElementById("duration");\n  \n      // Icons inside the buttons\n      const playIcon = document.getElementById("playIcon");\n      const pauseIcon = document.getElementById("pauseIcon");\n      const speakerIcon = document.getElementById("speakerIcon");\n      const muteIcon = document.getElementById("muteIcon");\n  \n      // Play/Pause toggle\n      playPauseBtn.addEventListener("click", () => {\n        if (audioElement.paused) {\n          audioElement.play();\n          playIcon.classList.add("hidden");\n          pauseIcon.classList.remove("hidden");\n        } else {\n          audioElement.pause();\n          pauseIcon.classList.add("hidden");\n          playIcon.classList.remove("hidden");\n        }\n      });\n  \n      // Mute/Unmute toggle\n      muteBtn.addEventListener("click", () => {\n        audioElement.muted = !audioElement.muted;\n        speakerIcon.classList.toggle("hidden", audioElement.muted);\n        muteIcon.classList.toggle("hidden", !audioElement.muted);\n      });\n  \n      // Backward 10s\n      backwardBtn.addEventListener("click", () => {\n        audioElement.currentTime = Math.max(0, audioElement.currentTime - 10);\n      });\n  \n      // Forward 10s\n      forwardBtn.addEventListener("click", () => {\n        audioElement.currentTime = Math.min(\n          audioElement.duration,\n          audioElement.currentTime + 10\n        );\n      });\n  \n      // Update time and seek bar\n      audioElement.addEventListener("timeupdate", () => {\n        const progress = (audioElement.currentTime / audioElement.duration) * 100;\n        seekBar.value = progress;\n  \n        const minutes = Math.floor(audioElement.currentTime / 60);\n        const seconds = Math.floor(audioElement.currentTime % 60);\n        currentTimeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;\n      });\n  \n      // Update duration\n      audioElement.addEventListener("loadedmetadata", () => {\n        const minutes = Math.floor(audioElement.duration / 60);\n        const seconds = Math.floor(audioElement.duration % 60);\n        durationDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;\n      });\n  \n      // Seek bar interaction\n      seekBar.addEventListener("input", () => {\n        const seekTo = (seekBar.value / 100) * audioElement.duration;\n        audioElement.currentTime = seekTo;\n      });\n    });\n  <\/script>'], ['<script type="module">\n    document.addEventListener("DOMContentLoaded", () => {\n      const playPauseBtn = document.getElementById("playPauseBtn");\n      const audioElement = document.getElementById("audioElement");\n      const seekBar = document.getElementById("seekBar");\n      const muteBtn = document.getElementById("muteBtn");\n      const backwardBtn = document.getElementById("backwardBtn");\n      const forwardBtn = document.getElementById("forwardBtn");\n      const currentTimeDisplay = document.getElementById("currentTime");\n      const durationDisplay = document.getElementById("duration");\n  \n      // Icons inside the buttons\n      const playIcon = document.getElementById("playIcon");\n      const pauseIcon = document.getElementById("pauseIcon");\n      const speakerIcon = document.getElementById("speakerIcon");\n      const muteIcon = document.getElementById("muteIcon");\n  \n      // Play/Pause toggle\n      playPauseBtn.addEventListener("click", () => {\n        if (audioElement.paused) {\n          audioElement.play();\n          playIcon.classList.add("hidden");\n          pauseIcon.classList.remove("hidden");\n        } else {\n          audioElement.pause();\n          pauseIcon.classList.add("hidden");\n          playIcon.classList.remove("hidden");\n        }\n      });\n  \n      // Mute/Unmute toggle\n      muteBtn.addEventListener("click", () => {\n        audioElement.muted = !audioElement.muted;\n        speakerIcon.classList.toggle("hidden", audioElement.muted);\n        muteIcon.classList.toggle("hidden", !audioElement.muted);\n      });\n  \n      // Backward 10s\n      backwardBtn.addEventListener("click", () => {\n        audioElement.currentTime = Math.max(0, audioElement.currentTime - 10);\n      });\n  \n      // Forward 10s\n      forwardBtn.addEventListener("click", () => {\n        audioElement.currentTime = Math.min(\n          audioElement.duration,\n          audioElement.currentTime + 10\n        );\n      });\n  \n      // Update time and seek bar\n      audioElement.addEventListener("timeupdate", () => {\n        const progress = (audioElement.currentTime / audioElement.duration) * 100;\n        seekBar.value = progress;\n  \n        const minutes = Math.floor(audioElement.currentTime / 60);\n        const seconds = Math.floor(audioElement.currentTime % 60);\n        currentTimeDisplay.textContent = \\`\\${String(minutes).padStart(2, "0")}:\\${String(seconds).padStart(2, "0")}\\`;\n      });\n  \n      // Update duration\n      audioElement.addEventListener("loadedmetadata", () => {\n        const minutes = Math.floor(audioElement.duration / 60);\n        const seconds = Math.floor(audioElement.duration % 60);\n        durationDisplay.textContent = \\`\\${String(minutes).padStart(2, "0")}:\\${String(seconds).padStart(2, "0")}\\`;\n      });\n  \n      // Seek bar interaction\n      seekBar.addEventListener("input", () => {\n        const seekTo = (seekBar.value / 100) * audioElement.duration;\n        audioElement.currentTime = seekTo;\n      });\n    });\n  <\/script>'])));
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/components/fundations/scripts/AudioPlayerScript.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { hideNav = false, hideFooter = false } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body class="flex flex-col bg-base-50 min-h-svh"> ${!hideNav && renderTemplate`${renderComponent($$result, "Navigation", $$Navigation, {})}`} <main class="grow">${renderSlot($$result, $$slots["default"])}</main> ${!hideFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} <!-- Scripts --> ${renderComponent($$result, "AudioPlayerScript", $$AudioPlayerScript, {})} </body></html>`;
}, "/Users/instante/WAC/Claude Projects/WAC - Website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Wrapper as a, $$Text as b, renderScript as r };
