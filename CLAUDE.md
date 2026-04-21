# Make.app — Project Context for Claude Code

## Overview

Make.app is a PWA where users describe mini-apps in plain language and Claude AI generates them instantly. Apps run in sandboxed iframes and all data persists locally via Dexie/IndexedDB. The core loop: describe → generate → use → edit.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 + TypeScript 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first) + CSS custom properties |
| Routing | React Router v7 (declarative BrowserRouter API) |
| Storage | Dexie 4 (IndexedDB wrapper) |
| AI | Anthropic Claude API (`claude-sonnet-4-6`) via `import.meta.env.VITE_ANTHROPIC_API_KEY` |
| PWA | vite-plugin-pwa 1.x + Workbox |
| Fonts | DM Sans + DM Serif Display (Google Fonts, loaded in index.html) |

## Key Rules (Non-Negotiable)

1. **TypeScript only** — no `.js` files in `src/`
2. **No direct Dexie calls from components** — always use `useRepository()` from `src/context/RepositoryContext.tsx`
3. **No direct Anthropic API calls from components** — always call through `src/services/generation.ts`
4. **The iframe bridge is sacred** — mini-apps live in sandboxed iframes; the postMessage protocol (`LOAD_DATA`, `SAVE_ENTRY`, `DELETE_ENTRY`) must not break between sessions
5. **API key via `import.meta.env.VITE_ANTHROPIC_API_KEY`** — never `process.env`
6. **TypeScript 6 constraints**: no `enum`, no `namespace`; use `import type` for type-only imports (`verbatimModuleSyntax: true`)
7. **Save a version before every HTML overwrite** — call `repo.saveVersion()` before `repo.saveApp()` with new html
8. **One session per task** — do not build multiple screens in one session

## File Conventions

```
src/
  screens/          # One file per route — Library, Create, Plan, Generating, Viewer, Edit
  components/       # Reusable UI — AppTile, BackButton, FAB, MiniAppFrame, PlanChat, GeneratingScreen
  db/db.ts          # Dexie MakeAppDB class + db singleton
  repositories/     # IAppRepository interface + DexieAppRepository implementation
  context/          # RepositoryContext.tsx — RepositoryProvider + useRepository hook
  services/         # generation.ts — all Claude API calls and prompt templates
  styles/           # design-system.css — CSS custom property tokens
  types.ts          # MiniApp, AppEntry, AppVersion interfaces
```

## Design System (CSS Custom Properties)

```
--cream / --cream-2 / --cream-3    Off-white backgrounds
--ink / --ink-2 / --ink-3          Text hierarchy
--spark                            #1D6FFF — primary accent (blue), used sparingly
--spark-soft / --spark-mid         Blue tints for backgrounds/borders
--surface                          #FFFFFF — card surfaces
--danger / --success               Semantic colors
```

Typography: DM Serif Display (display headings, italic accents) + DM Sans (body, weights 300–600).

All colors use `!important` to prevent Safari dark mode override. `color-scheme: light` is set on `<html>`.

## Sessions Completed

- **Session 1** ✅ — Project scaffold: Vite 8 + React 19 + TypeScript 6, Tailwind v4, Dexie 4, React Router v7, vite-plugin-pwa. Design system CSS, all stub screens and components, repository layer, context, generation service stub.

## Sessions Remaining

- **Session 2** — Library screen (AppTile grid, empty state, FAB)
- **Session 3** — Create + Plan screens (textarea, suggestion chips, conversational Q&A flow)
- **Session 4** — Data layer wiring (wire RepositoryContext into screens, verify DB reads/writes)
- **Session 5** — Claude API + generation (implement `generateApp` in generation.ts, wire Create/Plan to real API, navigate to Viewer)
- **Session 6** — Viewer + iframe bridge (MiniAppFrame component, postMessage bridge)
- **Session 7** — Edit flow (edit prompt, version history, data survival across regeneration)
- **Session 8** — Polish + PWA (animations, transitions, version history UI, add-to-home-screen prompt)
