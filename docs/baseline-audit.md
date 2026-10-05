# Phase 0 baseline audit

Recorded on branch `a11y-overhaul`, cut from `master` at `64db803`. Next.js 16.2.10, React 19,
Node 22.22.3 on win32. All commands run from the repo root. Exact output pasted.

## 1. Commands and results

### `git checkout -b a11y-overhaul`

```
Switched to a new branch 'a11y-overhaul'
a11y-overhaul
```

Working tree clean at branch creation.

### `npm run build`

Exit code: **0**

```
> claritycrew@3.0.0 build
> next build

⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
 We detected multiple lockfiles and selected the directory of C:\Users\archa\package-lock.json as the root directory.
 To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
 Detected additional lockfiles:
   * C:\Users\archa\Documents\ClarityCrew03\package-lock.json

▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 6.1s
  Running TypeScript ...
  Finished TypeScript in 4.4s ...
  Collecting page data using 11 workers ...
  Generating static pages using 11 workers (0/51) ...
  Generating static pages using 11 workers (12/51)
  Generating static pages using 11 workers (25/51)
  Generating static pages using 11 workers (38/51)
✓ Generating static pages using 11 workers (51/51) in 510ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /flashcards
├ ○ /focus
├ ○ /home
├ ○ /login
├ ○ /onboarding
├ ○ /practice
├ ○ /practice/review/skills
├ ○ /progress
├ ○ /quiz
├ ○ /settings
├ ○ /settings/accessibility
├ ○ /settings/personalization
├ ○ /signup
├ ● /subjects/[subjectId]
│ ├ /subjects/math
│ ├ /subjects/science
│ └ /subjects/english
└ ● /subjects/[subjectId]/[lessonId]
  ├ /subjects/math/linear-eq
  ├ /subjects/math/quad-eq
  ├ /subjects/math/systems
  └ [+29 more paths]

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

51 static pages. The build's own TypeScript phase passed.

Note: the workspace-root warning is pre-existing and unrelated to this overhaul. A stray
`C:\Users\archa\package-lock.json` outside the repo is detected as an additional lockfile. Left
alone, fixing it is outside the audit scope.

### `npx tsc --noEmit`

Exit code: **0**, no output. Re-verified after the 0B config change: still **0**.

### `npm run lint` before Phase 0B (stock script)

Exit code: **1**

```
> claritycrew@3.0.0 lint
> next lint

Invalid project directory provided, no such directory: C:\Users\archa\Documents\ClarityCrew03\lint
```

`next lint` was removed in Next 16 (the bin registers only build, dev, export, info, start,
telemetry, typegen, upgrade, experimental-*, internal). The stock script was dead.

### `npm run build` re-run after Phase 0B

Exit code: **0**, identical result: `✓ Compiled successfully in 3.3s`, TypeScript finished,
51/51 static pages.

### `npm run lint` after Phase 0B

Exit code: **1**, **5 errors, 0 warnings**, 4 files:

```
> claritycrew@3.0.0 lint
> eslint src

src\app\(app)\flashcards\page.tsx
  121:9  error  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events

src\app\(app)\onboarding\page.tsx
   22:5   error  Error: Calling setState synchronously within an effect can trigger cascading renders
   ... snippet shows setHydrated(true) at line 22 inside useEffect ...  react-hooks/set-state-in-effect
  208:21  error  The element li has an implicit role of listitem. Defining this explicitly is redundant and should be avoided  jsx-a11y/no-redundant-roles

src\components\layout\right-panel.tsx
  158:14  error  Error: Cannot call impure function during render
   ... snippet shows `}, 600 + Math.random() * 500);` at line 158 ...  react-hooks/purity

src\components\video\video-player.tsx
  21:5  error  Error: Calling setState synchronously within an effect can trigger cascading renders
   ... snippet shows setIsOffline(!navigator.onLine) at line 21 ...  react-hooks/set-state-in-effect

✖ 5 problems (5 errors, 0 warnings)
```

## 2. Lint findings and deferral (per Q6: record, fix no source in Phase 0)

| File:line | Rule | Deferred to | Why |
|---|---|---|---|
| `src/app/(app)/flashcards/page.tsx:121` | `jsx-a11y/click-events-have-key-events` | Phase 4 | Flashcards keyboard work also fixes the Space/Enter double-fire |
| `src/app/(app)/onboarding/page.tsx:208` | `jsx-a11y/no-redundant-roles` | Phase 4 | Listed as a Phase 4 change |
| `src/app/(app)/onboarding/page.tsx:22` | `react-hooks/set-state-in-effect` | Phase 5A | Hydration-flag effect, same class as the `useTTS` and home `Date` fixes |
| `src/components/layout/right-panel.tsx:158` | `react-hooks/purity` (`Math.random`) | Phase 7 | Tutor drawer is in the Phase 7 file lists |
| `src/components/video/video-player.tsx:21` | `react-hooks/set-state-in-effect` | Phase 7 | Video player is in the Phase 7A/7B file lists |

Lint is expected to stay red until those phases. Accepted.

## 3. Content counts (Q1 ground truth, from `src/data`)

- Subjects: 3 (mathematics, science, english)
- Chapters: 9 (3 per subject)
- Lessons: 32 (math 12, science 10, english 10)
- Quizzes: 32, one per lesson, none missing
- Flashcard decks: **30** (missing `data-analysis` and `probability`), not 31
- Video embeds: 32

Stale landing values for Phase 8: `Math 8, Science 6, English 4` at `src/app/page.tsx:59-61`;
`18 interactive lessons` at `src/app/page.tsx:153`.

## 4. Contrast baseline (OKLCH to sRGB, light theme)

| Pair | Ratio | Verdict |
|---|---|---|
| muted-foreground 0.556 on white | 4.73 | passes on white, fails on muted/tinted bg and at /50 opacity |
| premium-amber 0.769 on white | 2.16 | fail |
| success-green 0.627 on white | 3.29 | fail as text, pass as UI |
| cta-orange 0.675 on white | 3.18 | fail as text, pass as UI |
| skill-blue 0.546 on white | 5.24 | pass on light, fails on dark bg |
| white on success-green | 3.29 | fail |
| white on cta-orange | 3.18 | fail |
| white on premium-amber | 2.16 | fail |
| muted-foreground 0.556 on dark bg 0.12 | 4.35 | fail |
| ring 0.708 on white | 2.59 | fail, needs 3:1 |
| foreground 0.145 on white | 19.84 | pass |
| destructive 0.577 on white | 4.92 | pass |

No `/50` opacity text on white can reach 4.5:1, so those class usages change, not the tokens.
The `scripts/check-contrast.mjs` gate arrives with Phase 1A (it does not exist yet).

## 5. Structural baseline

- `:focus-visible` rules: **0**. `aria-live`: **0**. Skip links: **0**. `aria-hidden`: **4**.
- Bare `focus:outline-none`: **16** (onboarding 102, 110, 137, 167, 175, 183, 224, 232; login 84,
  98; signup 86, 98, 113, 128; right-panel 283; personalization 110).
- Six persisted stores, all `skipHydration: true`, rehydrated only by `HydrationGate` in
  `src/components/providers/providers.tsx`. Only `accessibility-effects.tsx` guards on `hasHydrated`.
- Render-time hydration risks: `src/hooks/use-tts.ts:10` (`isTTSSupported()` during render) and
  `src/app/(app)/home/page.tsx:38,45` (`new Date().getHours()` during render). Phase 5A.
- No `headers()`, `cookies()`, `searchParams`, or dynamic APIs anywhere; both dynamic routes have
  `generateStaticParams` with `dynamicParams = false`.
- No network code (`fetch`, `XMLHttpRequest`, analytics) and no LICENSE file. Remotes: `origin` =
  `https://github.com/claritycrew01/ClarityCrew3.git`. Both re-verified for the Phase 8 report.
- `suppressHydrationWarning` only on `<html>` in `src/app/layout.tsx`.

## 6. Tooling state after Phase 0B

- `eslint@9.39.5`, `eslint-config-next@16.2.10`, `eslint-plugin-jsx-a11y@6.10.2` were already
  installed. No dependencies added.
- New `eslint.config.mjs`: spreads `eslint-config-next/core-web-vitals` then applies
  `jsxA11y.configs.recommended.rules` as plain rules. Importing
  `jsxA11y.flatConfigs.recommended` fails with `Cannot redefine plugin "jsx-a11y"`, so only the
  `.rules` object is spread.
- `package.json` lint script changed `next lint` to `eslint src`.
- jsx-a11y rules land as `error` because they are spread after next's config (escalating the six
  jsx-a11y `warn` rules). The five current errors are jsx-a11y or react-hooks rules, all out of
  Phase 0 scope.

## 7. Phase 0 deliverables

- Branch `a11y-overhaul`
- `eslint.config.mjs` (new)
- `package.json` (lint script only)
- `docs/baseline-audit.md` (this file)
- `docs/a11y-overhaul-plan.md` (the full plan, saved so context survives compaction)
