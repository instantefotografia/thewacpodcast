import type { APIRoute } from "astro";
import { Client } from "@notionhq/client";

export const prerender = false;

const NOTION_API_KEY =
  process.env.NOTION_API_KEY ?? import.meta.env.NOTION_API_KEY;
const DB_SUBSCRIBERS =
  process.env.NOTION_DB_SUBSCRIBERS ?? import.meta.env.NOTION_DB_SUBSCRIBERS;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => null);
    const email = body?.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!DB_SUBSCRIBERS) {
      console.error("NOTION_DB_SUBSCRIBERS env var not set");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const notion = new Client({ auth: NOTION_API_KEY });

    await notion.pages.create({
      parent: { database_id: DB_SUBSCRIBERS },
      properties: {
        Email: {
          title: [{ text: { content: email } }],
        },
        "Subscribed At": {
          date: { start: new Date().toISOString() },
        },
      },
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Subscribe error:", err);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
