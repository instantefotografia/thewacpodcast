# WAC Website — Pendente

## Deploy
- [ ] Configurar projecto na Vercel (importar repo)
- [ ] Adicionar todas as variáveis de ambiente na Vercel:
  - `NOTION_API_KEY`
  - `NOTION_DB_EPISODES`
  - `NOTION_DB_EPISODE_CONTENT`
  - `NOTION_DB_GUESTS`
  - `NOTION_DB_BLOG`
  - `NOTION_DB_SUBSCRIBERS` = `e441c4fd-8a0f-4c81-9f5e-2bf7cf8acb0f`
- [ ] Apontar domínio `thewacpodcast.com` para Vercel

## Decisões tomadas (não voltar atrás)
- Sem player de áudio no site — CTAs directos para Spotify / Apple Podcasts / YouTube
- Navegação simples e fixa (sem MegaMenu, sem burger)
- Blog: hero fullscreen (título + subtítulo apenas na primeira view)
- Blog: H2 em serif grande (~5xl), blockquote em itálico sem border esquerda
- Episódio: container `max-w-3xl` (+33% vs original)
- Footer: 4 colunas — descrição · Social · Listen On · Navigate

## Stack
- Astro 6 + `@astrojs/vercel` (adapter, output static com `prerender = false` na API route)
- Tailwind CSS (via Vite plugin)
- Notion SDK (`@notionhq/client`) + `notion-to-md`
- API route: `src/pages/api/subscribe.ts` — guarda emails na DB Notion Subscribers
