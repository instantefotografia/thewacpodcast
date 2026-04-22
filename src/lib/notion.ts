import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// ─── Client ──────────────────────────────────────────────────────────────────

// Use process.env for server-only vars in .ts files (import.meta.env not resolved here by Vite)
const NOTION_API_KEY = process.env.NOTION_API_KEY ?? import.meta.env.NOTION_API_KEY;
const notion = new Client({ auth: NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const DB_EPISODES         = process.env.NOTION_DB_EPISODES         ?? import.meta.env.NOTION_DB_EPISODES;
const DB_EPISODE_CONTENT  = process.env.NOTION_DB_EPISODE_CONTENT  ?? import.meta.env.NOTION_DB_EPISODE_CONTENT;
const DB_GUESTS           = process.env.NOTION_DB_GUESTS           ?? import.meta.env.NOTION_DB_GUESTS;
const DB_BLOG             = process.env.NOTION_DB_BLOG             ?? import.meta.env.NOTION_DB_BLOG;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function prop(page: any, name: string) {
  return page.properties?.[name];
}

function richText(p: any): string {
  return p?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
}

function title(p: any): string {
  return p?.title?.map((t: any) => t.plain_text).join("") ?? "";
}

function select(p: any): string {
  return p?.select?.name ?? "";
}

function date(p: any): string {
  return p?.date?.start ?? "";
}

function files(p: any): string {
  const f = p?.files?.[0];
  if (!f) return "";
  return f.type === "external" ? f.external.url : f.file.url;
}

function url(p: any): string {
  return p?.url ?? "";
}

function number(p: any): number | null {
  return p?.number ?? null;
}

function relationIds(p: any): string[] {
  return p?.relation?.map((r: any) => r.id) ?? [];
}

function checkbox(p: any): boolean {
  return p?.checkbox ?? false;
}

// Constrói path local a partir do nome do guest (ex: "Julie Deffense" → "/images/guests/julie deffense.jpg")
// As URLs do Notion expiram em 1h — imagens devem estar em public/images/guests/
function guestPhotoPath(name: string): string {
  return `/images/guests/${name.toLowerCase()}.jpg`;
}

// Constrói path local da cover art do episódio (ex: episodeNumber=42 → "/images/episodes/ep-42.jpg" ou "bonus" → "/images/episodes/ep-bonus.jpg")
function episodeCoverPath(episodeNumber: number | null | string): string {
  if (!episodeNumber) return "";
  return `/images/episodes/ep-${episodeNumber}.jpg`;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Guest {
  id: string;
  name: string;
  role: string;
  brand: string;
  bio: string;
  photo: string;
  instagram: string;
  website: string;
  language: string;
}

export interface Episode {
  id: string;
  title: string;
  slug: string;
  season: number | null;
  episodeNumber: number | null;
  publishedDate: string;
  status: string;
  coverArt: string;
  audioUrl: string;
  youtubeUrl: string;
  shortDescription: string;
  isPopular: boolean;
  guestIds: string[];
  guests?: Guest[];
  spotifyUrl?: string;
  // From Episode Content DB (populated separately)
  keyQuotes?: string;
  summaryEn?: string;
  transcriptFile?: string;
}

export interface EpisodeContent {
  id: string;
  episodeId: string;
  keyQuotes: string;
  summaryEn: string;
  transcriptFile: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cluster: string[];
  type: string;
  publishDate: string;
  status: string;
  episodeId: string | null;
}

// ─── Guest resolver ──────────────────────────────────────────────────────────

export async function resolveEpisodeGuests(episodes: Episode[]): Promise<Episode[]> {
  const allGuests = await getGuests();
  const guestMap = new Map(allGuests.map((g) => [g.id, g]));
  return episodes.map((ep) => ({
    ...ep,
    guests: ep.guestIds.map((id) => guestMap.get(id)).filter(Boolean) as Guest[],
  }));
}

// ─── Guests ──────────────────────────────────────────────────────────────────

export async function getGuests(): Promise<Guest[]> {
  const response = await notion.dataSources.query({
    data_source_id: DB_GUESTS,
    page_size: 100,
  });

  return response.results.map((page: any) => {
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
      language: select(prop(page, "Language")),
    };
  });
}

export async function getGuestById(id: string): Promise<Guest | null> {
  try {
    const page: any = await notion.pages.retrieve({ page_id: id });
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
      language: select(prop(page, "Language")),
    };
  } catch {
    return null;
  }
}

// ─── Episode Content ─────────────────────────────────────────────────────────

export async function getEpisodeContent(episodeId: string): Promise<EpisodeContent | null> {
  try {
    const response = await notion.dataSources.query({
      data_source_id: DB_EPISODE_CONTENT,
      filter: {
        property: "Episode",
        relation: { contains: episodeId },
      },
      page_size: 1,
    });

    if (!response.results.length) return null;
    const page: any = response.results[0];

    // Strip markdown link syntax if Notion stored it as [ep-1.md](http://ep-1.md)
    const rawTranscriptFile = richText(prop(page, "Transcript File"));
    const transcriptFile = rawTranscriptFile.replace(/^\[(.+?)\]\(.+?\)$/, "$1").trim();

    return {
      id: page.id,
      episodeId,
      keyQuotes: richText(prop(page, "Key Quotes")),
      summaryEn: richText(prop(page, "Summary EN")),
      transcriptFile,
    };
  } catch (err) {
    console.error(`Failed to fetch episode content for ${episodeId}:`, err);
    return null;
  }
}

// ─── Episodes ────────────────────────────────────────────────────────────────

export async function getEpisodes(): Promise<Episode[]> {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      property: "Status",
      select: { equals: "Published" },
    },
    sorts: [{ property: "Published Date", direction: "descending" }],
    page_size: 100,
  });

  return response.results.map((page: any) => {
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
      spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO",
    };
  });
}

export async function getPopularEpisodes(): Promise<Episode[]> {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      and: [
        { property: "Status", select: { equals: "Published" } },
        { property: "Popular", checkbox: { equals: true } },
      ],
    },
    sorts: [{ property: "Published Date", direction: "descending" }],
    page_size: 4,
  });

  return response.results.map((page: any) => {
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
      spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO",
    };
  });
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  const response = await notion.dataSources.query({
    data_source_id: DB_EPISODES,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Published" } },
      ],
    },
    page_size: 1,
  });

  if (!response.results.length) return null;
  const page: any = response.results[0];
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
    spotifyUrl: "https://open.spotify.com/show/6CBDI1nNRGpOqMFsdvJbzO",
  };
}

export async function getEpisodeBody(pageId: string): Promise<string> {
  const blocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(blocks).parent ?? "";
}

export function getTranscriptFile(filename: string): string {
  if (!filename) return "";
  try {
    const filepath = join(process.cwd(), "src/data/transcripts", filename);
    return readFileSync(filepath, "utf-8");
  } catch (err) {
    console.error(`Failed to read transcript file: ${filename}`, err);
    return "";
  }
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await notion.dataSources.query({
    data_source_id: DB_BLOG,
    filter: {
      property: "Status",
      select: { equals: "Publicado" },
    },
    sorts: [{ property: "Publish Date", direction: "descending" }],
    page_size: 100,
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: title(prop(page, "Title")),
    slug: richText(prop(page, "Slug")),
    excerpt: richText(prop(page, "Excerpt")),
    cluster: prop(page, "Cluster")?.multi_select?.map((s: any) => s.name) ?? [],
    type: select(prop(page, "Type")),
    publishDate: date(prop(page, "Publish Date")),
    status: select(prop(page, "Status")),
    episodeId: relationIds(prop(page, "Episode"))[0] ?? null,
  }));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await notion.dataSources.query({
    data_source_id: DB_BLOG,
    filter: {
      and: [
        { property: "Slug", rich_text: { equals: slug } },
        { property: "Status", select: { equals: "Publicado" } },
      ],
    },
    page_size: 1,
  });

  if (!response.results.length) return null;
  const page: any = response.results[0];

  return {
    id: page.id,
    title: title(prop(page, "Title")),
    slug: richText(prop(page, "Slug")),
    excerpt: richText(prop(page, "Excerpt")),
    cluster: prop(page, "Cluster")?.multi_select?.map((s: any) => s.name) ?? [],
    type: select(prop(page, "Type")),
    publishDate: date(prop(page, "Publish Date")),
    status: select(prop(page, "Status")),
    episodeId: relationIds(prop(page, "Episode"))[0] ?? null,
  };
}

export async function getBlogPostBody(pageId: string): Promise<string> {
  const blocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(blocks).parent;
}
