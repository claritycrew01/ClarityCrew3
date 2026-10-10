# ClarityCrew

An academic study app for neurodivergent learners. Lessons, quizzes, flashcards, focus tools,
and accessibility controls in one static web app.

**Live:** https://claritycrew3.pages.dev/

## Features

- **Lessons:** 32 interactive lessons across 3 core subjects (12 mathematics, 10 science,
  10 english), organized into 9 chapters.
- **Quizzes:** 32 quizzes with instant feedback, a per-question timer, and full keyboard
  operation (see shortcuts below).
- **Flashcards:** 30 decks with flip, unknown/known rating, and keyboard navigation.
- **Focus mode:** study timer with session tracking.
- **Practice and progress:** review skills by subject and track completion over time.
- **Read aloud:** text to speech for lesson content, plus voice input.
- **Tutor panel:** an in-app study tutor drawer with local, rule based responses.
- **Personalization:** themes (light, dark, system), motion reduction, reading fonts
  (Atkinson Hyperlegible, OpenDyslexic, Inter, Outfit), and disability presets.
- **Privacy first:** fully static build, zero network calls, no analytics, no tracking.

## Accessibility

Accessibility is the core requirement of this project, not an add-on:

- Skip link on every page, with `#main-content` targets.
- Focus management on route changes (focus moves to the page heading).
- Escape closes the tutor drawer, the accessibility toolbar popover, and modal dialogs,
  with focus returned to the opener.
- Live regions for tutor status, quiz timer completion, and auth alerts.
- High contrast OKLCH color tokens, verified by an automated contrast script.
- Global focus ring, 44px minimum pointer targets, reduced motion support.

### Keyboard shortcuts

| Keys | Context | Action |
| --- | --- | --- |
| Tab (first press) | Everywhere | Reveal the skip link, Enter jumps to main content |
| 1 to 4 | Quiz | Select the matching option |
| Enter | Quiz | Check the answer, then advance |
| Enter or Space | Quiz (after answering) | Next question or results |
| Space or Enter | Flashcards | Flip the card |
| ArrowLeft / ArrowRight | Flashcards | Previous / next card |
| 1 / 2 | Flashcards | Mark unknown / known |
| Escape | Tutor drawer, toolbar, modals | Close and return focus to the opener |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export), React 19, TypeScript
- Tailwind CSS v4 with OKLCH design tokens, CVA, tailwind-merge
- Zustand stores with `skipHydration`, next-themes
- lucide-react icons, self-hosted fontsource fonts
- ESLint (`eslint-config-next`) and a custom contrast checker

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint over `src/` |
| `npx tsc --noEmit` | Type check |
| `node scripts/check-contrast.mjs` | Contrast audit of all color pairs (609 pairs) |

## Deployment

The site deploys itself. Cloudflare Pages is connected to this repository and reads
`wrangler.toml` (build command `npm install && npm run build`, output directory `out/`),
so every push to `master` produces a fresh deployment.

## Project structure

```
src/app/            Routes: landing, auth, app shell, subjects, quiz, flashcards,
                    focus, practice, progress, settings
src/components/     layout/, a11y/, providers/, video/
src/data/           Curriculum: subjects, quizzes, flashcards, videos
src/hooks/          TTS, read aloud, voice input, preferences
scripts/            check-contrast.mjs
docs/               Baseline audit, accessibility overhaul plan, keyboard walkthrough
```

## Documentation

- [`docs/baseline-a11y-audit.md`](docs/baseline-a11y-audit.md) starting audit findings
- [`docs/a11y-overhaul-plan.md`](docs/a11y-overhaul-plan.md) phased remediation plan and log
- [`docs/a11y-walkthrough.md`](docs/a11y-walkthrough.md) manual keyboard walkthrough for QA
