# Make.app — Project Context for Claude Code

## Overview

Make.app is a PWA where users describe mini-apps in plain language and Claude AI generates them instantly. Apps run in sandboxed iframes and all data persists locally via Dexie/IndexedDB. The core loop: describe → generate → use → edit.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 + TypeScript 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first) + design-system.css |
| Routing | React Router v7 (BrowserRouter) |
| Storage | Dexie 4 (IndexedDB) |
| AI | Anthropic Claude API (`claude-sonnet-4-6`) — `import.meta.env.VITE_ANTHROPIC_API_KEY` |
| PWA | vite-plugin-pwa 1.x + Workbox |
| Fonts | DM Sans + DM Serif Display (Google Fonts in index.html) |

## Design System

All CSS lives in `src/styles/design-system.css` — extracted verbatim from the HTML prototype. This file contains:
- CSS custom properties (`--cream`, `--ink`, `--spark`, `--font-d/b`, `--spring`, `--smooth`, `--sh-sm/md`)
- Tile color classes (`.c-blue`, `.c-sand`, `.c-ink`, `.c-sage`, `.c-rose`, `.c-amber`)
- Screen transition system (`.screen.hr/.hl/.on`)
- All animation keyframes (`up`, `slideUp`, `orb`, `orbs`, `db`, `mbar`)
- All shared utility classes (`.dtitle`, `.eyebrow`, `.back-btn`, `.fab`, `.icard`, `.cta`, `.mkbtn`, `.chip`, `.aopt`, `.tbar`, etc.)

**Use these classes directly in TSX.** Don't re-implement them with Tailwind.

## Key Rules (Non-Negotiable)

1. **TypeScript only** — no `.js` files in `src/`
2. **No direct Dexie calls from components** — always use `useRepository()` from `src/context/RepositoryContext.tsx`
3. **No direct Anthropic API calls from components** — always call through `src/services/generation.ts`
4. **The iframe bridge is sacred** — mini-apps live in sandboxed iframes; `LOAD_DATA` / `SAVE_ENTRY` / `DELETE_ENTRY` postMessage protocol must not break between sessions
5. **API key via `import.meta.env.VITE_ANTHROPIC_API_KEY`** — never `process.env`
6. **Save a version before every HTML overwrite** — `repo.saveVersion()` before `repo.saveApp()` with new html

## File Structure

```
src/
  screens/      Library, Create, Plan, Generating, Viewer, Edit
  components/   AppTile, BackButton, FAB, MiniAppFrame, PlanChat, GeneratingScreen
  db/db.ts      MakeAppDB (Dexie) + db singleton
  repositories/ IAppRepository interface + DexieAppRepository
  context/      RepositoryContext — RepositoryProvider + useRepository hook
  services/     generation.ts — Claude API calls + prompt templates
  styles/       design-system.css — all CSS from HTML prototype
  types.ts      MiniApp, AppEntry, AppVersion interfaces
```

## Tab Bar

Visible on `/` and `/create`. Hidden on `/plan`, `/generating`, `/app/:id`, `/app/:id/edit`. Implemented in `App.tsx` using `useLocation()`.

## Sessions Completed

- **Session 1** ✅ — Full scaffold: Vite 8 + React 19 + TypeScript 6, Tailwind v4, Dexie 4, React Router v7, vite-plugin-pwa. Complete design-system.css from HTML prototype. All stub screens and components. Repository layer. Context.

## Sessions Remaining

- **Session 2** — Library screen (tile grid matching prototype, FAB, empty state)
- **Session 3** — Create + Plan screens (textarea, chips, Q&A chat flow with setTimeout)
- **Session 4** — Data layer wiring (useRepository into Library, verify DB reads/writes)
- **Session 5** — Claude API + Generating screen (real API, progress animation)
- **Session 6** — Viewer + iframe bridge (MiniAppFrame, postMessage)
- **Session 7** — Edit flow (context card, edit prompt, save version)
- **Session 8** — Polish + PWA (screen transitions, stagger animations, install prompt)
