import { Client } from '@notionhq/client';

const prerender = false;
const NOTION_API_KEY = process.env.NOTION_API_KEY ?? "ntn_z617309038235HA0ugr5nV8afImBQbFDcDsrbgJdNH16Dd";
const DB_SUBSCRIBERS = process.env.NOTION_DB_SUBSCRIBERS ?? "e441c4fd-8a0f-4c81-9f5e-2bf7cf8acb0f";
const POST = async ({ request }) => {
  try {
    const body = await request.json().catch(() => null);
    const email = body?.email?.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!DB_SUBSCRIBERS) {
      console.error("NOTION_DB_SUBSCRIBERS env var not set");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const notion = new Client({ auth: NOTION_API_KEY });
    await notion.pages.create({
      parent: { database_id: DB_SUBSCRIBERS },
      properties: {
        Email: {
          title: [{ text: { content: email } }]
        },
        "Subscribed At": {
          date: { start: (/* @__PURE__ */ new Date()).toISOString() }
        }
      }
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
