import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? "ntn_z617309038235HA0ugr5nV8afImBQbFDcDsrbgJdNH16Dd";
const notion = new Client({ auth: NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });
const DB_EPISODES = process.env.NOTION_DB_EPISODES ?? "1aa1ee5c-9aea-4c47-9dd8-9a232495627d";
const DB_EPISODE_CONTENT = process.env.NOTION_DB_EPISODE_CONTENT ?? "797dd386-e9ab-4b91-a1e4-1e3ae8d8af9e";
const DB_GUESTS = process.env.NOTION_DB_GUESTS ?? "2890310a-f64a-4c00-9c1d-90dcd40dc2d5";
const DB_BLOG = process.env.NOTION_DB_BLOG ?? "aea83ffa-5cd4-460d-bbf6-1b54329c9be0";
function prop(page, name) {
  return page.properties?.[name];
}
function richText(p) {
  return p?.rich_text?.map((t) => t.plain_text).join("") ?? "";
}
function title(p) {
  return p?.title?.map((t) => t.plain_text).join("") ?? "";
}
function select(p) {
  return p?.select?.name ?? "";
}
function date(p) {
  return p?.date?.start ?? "";
}
function url(p) {
  return p?.url ?? "";
}
function number(p) {
  return p?.number ?? null;
}
function relationIds(p) {
  return p?.relation?.map((r) => r.id) ?? [];
}
function checkbox(p) {
  return p?.checkbox ?? false;
}
function guestPhotoPath(name) {
  return `/images/guests/${name.toLowerCase()}.jpg`;
}
function episodeCoverPath(episodeNumber) {
  if (!episodeNumber) return "";
  return `/images/episodes/ep-${episodeNumber}.jpg`;
}
async function resolveEpisodeGuests(episodes) {
  const allGuests = await getGuests();
  const guestMap = new Map(allGuests.map((g) => [g.id, g]));
  return episodes.map((ep) => ({
    ...ep,
    guests: ep.guestIds.map((id) => guestMap.get(id)).filter(Boolean)
  }));
}
async function getGuests() {
  const response = await notion.dataSources.query({
    data_source_id: DB_GUESTS,
    page_size: 100
  });
  return response.results.map((page) => {
    const name = title(prop(page, "Name"));
    return {
      id: page.id,
      name,
      role: richText(prop(page, "Role")),
      brand: richText(prop(page, "Brand")),
      bio: richText(prop(page, "Bio")),
      photo: guestPhotoPath(name),
      instagram: url(prop(page, "Instagram")),
      website: url(prop(page, "Website")),
      language: select(prop(page, "Language"))
    };
  });
}
async function getGuestById(id) {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const name = title(prop(page, "Name"));
    return {
      id: page.id,
      name,
      role: richText(prop(page, "Role")),
      brand: richText(prop(page, "Brand")),
      bio: richText(prop(page, "Bio")),
      photo: guestPhotoPath(name),
      instagram: url(prop(page, "Instagram")),
      website: url(prop(page, "Website")),
      language: select(prop(page, "Language"))
    };
  } catch {
    return null;
  }
}
async function getEpisodeContent(episodeId) {
  try {
    const response = await notion.dataSources.query({
      data_source_id: DB_EPISODE_CONTENT,
      filter: {
        property: "Episode",
        relation: { contains: episodeId }
      },
      page_size: 1
    });
    if (!response.results.length) return null;
    const page = response.results[0];
    const rawTranscriptFile = richText(prop(page, "Transcript File"));
    const transcriptFile = rawTranscriptFile.replace(/^\[(.+?)\]\(.+?\)$/, "$1").trim();
    return {
      id: page.id,
      episodeId,
      keyQuotes: richText(prop(page, "Key Quotes")),
      summaryEn: richText(prop(page, "Summary EN")),
      transcriptFile
    };
  } catch (err) {
    console.error(`Failed to fetch episode content for ${episodeId}:`, err);
    return null;
  }
}
async function getEpisodes() {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      property: "Status",
      select: { equals: "Published" }
    },
    sorts: [{ property: "Published Date", direction: "descending" }],
    page_size: 100
  });
  return response.results.map((page) => {
    const epNum = number(prop(page, "Episode Number"));
    return {
      id: page.id,
      title: title(prop(page, "Title")),
      slug: richText(prop(page, "Slug")),
      season: number(prop(page, "Season")),
      episodeNumber: epNum,
      publishedDate: date(prop(page, "Published Date")),
      status: select(prop(page, "Status")),
      coverArt: episodeCoverPath(epNum),
      audioUrl: url(prop(page, "Audio URL")),
      youtubeUrl: url(prop(page, "YouTube URL")),
      shortDescription: richText(prop(page, "Short Description")),
      isPopular: checkbox(prop(page, "Popular")),
      guestIds: relationIds(prop(page, "Guest")),
      spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO"
    };
  });
}
async function getPopularEpisodes() {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Popular", checkbox: { equals: true } }
      ]
    },
    sorts: [{ property: "Published Date", direction: "descending" }],
    page_size: 4
  });
  return response.results.map((page) => {
    const epNum = number(prop(page, "Episode Number"));
    return {
      id: page.id,
      title: title(prop(page, "Title")),
      slug: richText(prop(page, "Slug")),
      season: number(prop(page, "Season")),
      episodeNumber: epNum,
      publishedDate: date(prop(page, "Published Date")),
      status: select(prop(page, "Status")),
      coverArt: episodeCoverPath(epNum),
      audioUrl: url(prop(page, "Audio URL")),
      youtubeUrl: url(prop(page, "YouTube URL")),
      shortDescription: richText(prop(page, "Short Description")),
      isPopular: true,
      guestIds: relationIds(prop(page, "Guest")),
      spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO"
    };
  });
}
async function getEpisodeBySlug(slug) {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Published" } }
      ]
    },
    page_size: 1
  });
  if (!response.results.length) return null;
  const page = response.results[0];
  const epNum = number(prop(page, "Episode Number"));
  return {
    id: page.id,
    title: title(prop(page, "Title")),
    slug: richText(prop(page, "Slug")),
    season: number(prop(page, "Season")),
    episodeNumber: epNum,
    publishedDate: date(prop(page, "Published Date")),
    status: select(prop(page, "Status")),
    coverArt: episodeCoverPath(epNum),
    audioUrl: url(prop(page, "Audio URL")),
    youtubeUrl: url(prop(page, "YouTube URL")),
    shortDescription: richText(prop(page, "Short Description")),
    isPopular: checkbox(prop(page, "Popular")),
    guestIds: relationIds(prop(page, "Guest")),
    spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO"
  };
}
async function getEpisodeBody(pageId) {
  const blocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(blocks).parent ?? "";
}
function getTranscriptFile(filename) {
  if (!filename) return "";
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filepath = join(__dirname, "../data/transcripts", filename);
    return readFileSync(filepath, "utf-8");
  } catch (err) {
    console.error(`Failed to read transcript file: ${filename}`, err);
    return "";
  }
}
async function getBlogPosts() {
  const response = await notion.dataSources.query({
    data_source_id: DB_BLOG,
    filter: {
      property: "Status",
      select: { equals: "Publicado" }
    },
    sorts: [{ property: "Publish Date", direction: "descending" }],
    page_size: 100
  });
  return response.results.map((page) => ({
    id: page.id,
    title: title(prop(page, "Title")),
    slug: richText(prop(page, "Slug")),
    excerpt: richText(prop(page, "Excerpt")),
    cluster: prop(page, "Cluster")?.multi_select?.map((s) => s.name) ?? [],
    type: select(prop(page, "Type")),
    publishDate: date(prop(page, "Publish Date")),
    status: select(prop(page, "Status")),
    episodeId: relationIds(prop(page, "Episode"))[0] ?? null
  }));
}
async function getBlogPostBySlug(slug) {
  const response = await notion.dataSources.query({
    data_source_id: DB_BLOG,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Publicado" } }
      ]
    },
    page_size: 1
  });
  if (!response.results.length) return null;
  const page = response.results[0];
  return {
    id: page.id,
    title: title(prop(page, "Title")),
    slug: richText(prop(page, "Slug")),
    excerpt: richText(prop(page, "Excerpt")),
    cluster: prop(page, "Cluster")?.multi_select?.map((s) => s.name) ?? [],
    type: select(prop(page, "Type")),
    publishDate: date(prop(page, "Publish Date")),
    status: select(prop(page, "Status")),
    episodeId: relationIds(prop(page, "Episode"))[0] ?? null
  };
}
async function getBlogPostBody(pageId) {
  const blocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(blocks).parent;
}

export { getBlogPostBySlug as a, getBlogPostBody as b, getTranscriptFile as c, getEpisodes as d, getEpisodeBySlug as e, getEpisodeContent as f, getBlogPosts as g, getGuestById as h, getEpisodeBody as i, getPopularEpisodes as j, resolveEpisodeGuests as r };
