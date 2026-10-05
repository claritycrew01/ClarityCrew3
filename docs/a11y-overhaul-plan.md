# ClarityCrew accessibility and visual overhaul: authoritative plan

This file is the durable copy of the full brief, the audit findings, the phase plans, and all
decisions. It exists so the work survives session compaction. Update the Progress log at the
bottom after every phase.

Repo: `C:\Users\archa\Documents\ClarityCrew03`
Branch: `a11y-overhaul` (created from `master` at `64db803`)
Baseline detail lives in `docs/baseline-audit.md`.

## 1. Standing rules (apply to every phase)

1. Local-first. No network calls, analytics, remote fonts, or new runtime dependencies. No new
   dependencies of any kind, including dev dependencies.
2. No store shape, persist key, or `skipHydration` changes. Only read preference values and use the
   existing `hasHydrated` signal (present in all six persisted stores).
3. Nothing that depends on a stored preference may render before rehydration finishes. This
   prevents static export hydration mismatches.
4. Small steps. Each phase touches a short, explicitly listed set of files and ends with a passing
   `next build`. Name the exact verification commands and paste real output.
5. No unrelated refactors. No file renames, no reformatting of untouched files, no content data
   changes except where a task says so.
6. If something is unclear, record it as an open question instead of guessing.
7. Use the Edit tool for targeted changes. Do not rewrite whole files unless the file is new.
8. No em dashes in any copy or comments written for this project. No emoji as UI icons. Use Lucide
   SVG icons with `aria-hidden` unless they convey meaning.

### Style constraints (absolute)

- No purple gradients, glows, or decorative blobs. Both existing gradients (blue to orange) are
  removed per decision Q15. Solid colors only.
- No pill-shaped buttons and no floating badges. Max radius is `rounded-md`.
- No fake reviews, testimonials, user counts, or fabricated metrics.
- No vague or hyperbolic hero text. Copy is plain and factual.
- No "Made with AI" tags or AI-generated imagery.

### Accessibility requirements

A. Contrast. Light and dark themes pass WCAG 2.1 AA (4.5:1 text, 3:1 UI and focus rings). Split each
   brand color into a `-text` token, a `-solid` token, and a paired `-on-solid` token. Add
   `scripts/check-contrast.mjs` that converts OKLCH tokens to sRGB and verifies every
   foreground/background pair used in the app. Target starting lightness values: light
   `muted-foreground` L about 0.48, amber-text L about 0.47, green-text L about 0.45, orange-solid
   L about 0.50, blue-text L about 0.48; dark `muted-foreground` L about 0.74, brand text colors
   L about 0.78 to 0.80. The script result is the source of truth. The script must also check
   focus-ring against background, card, muted, and the dark sidebar background, in all five modes
   (light, dark, `.calm-reader`, `.high-contrast`, `.off-white-bg`).
B. Focus. One global `:focus-visible` ring in `@layer base` using a dedicated focus-ring token,
   forced-colors fallback, and removal or replacement of every bare `outline-none`.
C. Skip link as the first focusable element, targeting `main#main-content` with `tabindex="-1"`.
   Landmarks: nav (labelled), main, aside (labelled). Move focus to the first `h1` inside main on
   route change, falling back to main itself when no `h1` exists.
D. ARIA. Accessibility page toggles become `role="switch"` with `aria-checked` and a label; sliders
   get labels and `aria-valuetext`. Other toggle buttons get `aria-pressed`. Sidebar collapse and
   chapter disclosure get `aria-expanded` and `aria-controls`. Current lesson gets
   `aria-current="page"`. Quiz feedback goes in an always-mounted `aria-live="polite"` region and
   states Correct or Incorrect in words. Focus timer uses `role="timer"` and announces only at
   minute marks and on completion, never every second. Tutor drawer manages focus (move in, return
   on close, Escape closes). Status toasts use `role="status"`.
E. Respect `prefers-reduced-motion` and the app's `reduceMotion` preference. Primary controls are
   at least 44px.

### Preference wiring

One client provider plus a `usePreferencesApplied` hook, mounted once, that waits for manual
rehydration before applying anything.

- `showVisualScaffolds`: lesson renderer shows existing scaffold content only when true. Do not
  invent scaffold content.
- `voiceInputPreferred`: `useVoiceInput` hook around `SpeechRecognition`/`webkitSpeechRecognition`
  with feature detection. Mic button in the tutor input when the preference is true and the API is
  supported, otherwise a short text note.
- `quizTimerEnabled`: optional timer in the quiz header. Never auto-submits or fails the learner,
  needs a pause control, shows time as text.
- `readAloudEnabled`: on lesson load try `speechSynthesis`. If the browser blocks it without a user
  gesture, show a visible "Play lesson audio" button and announce its presence through a
  `role="status"` message. The fallback must NOT move focus. Always provide pause, stop, and rate
  control. Cancel speech on route change.
- `literalLanguageMode`: set `data-literal="true"` on the html element. Support an optional
  `literalBody` field on lessons, rendered when the mode is on and the field exists. Do not rewrite
  text at runtime. Produce a dev-only list of lessons missing `literalBody`.

### Stale content

Landing page stats say Math 8, Science 6, English 4. Replace with counts derived from the content
modules at build time, no hard-coded numbers.

## 2. Workflow for every phase

1. Work on branch `a11y-overhaul`.
2. Implement only the files listed for that phase. If a file outside the list must be touched, stop
   and ask.
3. Run the verification commands, paste the real output, fix failures within the phase scope only.
4. Commit with message `phase N: <title>` after verification passes.
5. Report files changed, commands run with results, anything deferred. Stop and wait for
   `approve phase N+1`.

## 3. Project facts

Stack: Next.js 16.2.10, React 19, TypeScript, static export (`output: "export"`, `trailingSlash`),
Tailwind CSS v4 with CSS-first OKLCH tokens in `src/app/globals.css` (no `tailwind.config.js`),
Zustand 5 with six persisted stores using `skipHydration: true`.

Layout: collapsible course-tree sidebar, central content canvas, right-hand AI tutor drawer,
study planner home page, 3-step onboarding.

### Key file list

- Color tokens: `src/app/globals.css` (only stylesheet in the repo)
- Layout: `src/app/layout.tsx`, `src/app/(app)/layout.tsx`, `src/components/layout/app-shell.tsx`,
  `src/components/layout/header.tsx`, `src/components/layout/mobile-nav.tsx`,
  `src/components/layout/right-panel.tsx`
- Stores: `src/lib/store/ui-store.ts`, `learner-store.ts`, `progress-store.ts`, `tutor-store.ts`,
  `auth-store.ts`, `session-store.ts` (not persisted), `index.ts`;
  `src/lib/preferences/store.ts`, `types.ts`, `defaults.ts`, `presets.ts`, `index.ts`
- Hydration logic: `src/components/providers/providers.tsx` (HydrationGate rehydrates 6 stores),
  `src/components/providers/accessibility-effects.tsx` (only place `hasHydrated` is guarded)
- Sidebar: `src/components/layout/sidebar/course-tree.tsx`
- Quiz: `src/app/(app)/quiz/page.tsx`, content in `src/data/quizzes.ts`
- Timer: `src/app/(app)/focus/page.tsx`, `src/lib/utils/time.ts`
- Accessibility page: `src/app/(app)/settings/accessibility/page.tsx`,
  `src/app/(app)/settings/personalization/page.tsx`,
  `src/components/a11y/accessibility-toolbar.tsx`, `src/components/a11y/reading-ruler.tsx`
- Landing page: `src/app/page.tsx`
- Lesson renderer: `src/app/(app)/subjects/[subjectId]/[lessonId]/lesson-client.tsx`, its
  `page.tsx`, `src/hooks/use-tts.ts`, `src/lib/utils/tts.ts`,
  `src/components/video/video-player.tsx`, `src/data/subjects.ts`

### Content counts measured from the data modules (ground truth)

- 3 subjects, **9 chapters** (math 3, science 3, english 3), **32 lessons** (math 12, science 10,
  english 10)
- **32 quizzes**, one per lesson, none missing
- **30 flashcard decks**, not 31. Missing decks: `data-analysis`, `probability`
- **32 video embeds**
- Landing hard-codes `Math 8, Science 6, English 4` at `src/app/page.tsx:59-61` and
  `18 interactive lessons` at `src/app/page.tsx:153`

### Baseline contrast measured (OKLCH to sRGB)

| Pair (light) | Ratio | Verdict |
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

Note: `/50` opacity text on white can never reach 4.5:1, so those class usages must change, not the
tokens.

### Hydration facts

- Six persisted stores, all `skipHydration: true`, rehydrated only by `HydrationGate`
  (`src/components/providers/providers.tsx`) inside `useEffect`, via dynamic import plus
  `.persist.rehydrate()`. `session-store.ts` is not persisted and not rehydrated.
- Persist keys: `claritycrew-ui`, `claritycrew-preferences`, `claritycrew-learner`,
  `claritycrew-progress`, `claritycrew-tutor`, `claritycrew-auth`.
- Each store sets `hasHydrated` in `onRehydrateStorage`. Only `accessibility-effects.tsx` guards on
  it today. No component gates its JSX on `hasHydrated`.
- Two non-store hydration mismatches exist: `src/hooks/use-tts.ts:10` calls `isTTSSupported()`
  during render (window check), and `src/app/(app)/home/page.tsx:38,45` calls `new Date().getHours()`
  during render. Both are fixed in Phase 5A.
- `suppressHydrationWarning` is only on `<html>` in `src/app/layout.tsx`.
- Static export risks: no `headers()`, `cookies()`, `searchParams`, or dynamic APIs anywhere. Both
  dynamic routes have `generateStaticParams` and `dynamicParams = false`.

## 4. Decisions on open questions

- Q1 Use data-derived counts exactly as found: 3 subjects, 9 chapters, 32 lessons, 32 quizzes,
  30 flashcard decks, 32 videos. Do not change content to match earlier numbers.
- Q2 `showVisualScaffolds`: add optional field
  `scaffold?: { steps?: string[]; keyTerms?: { term: string; meaning: string }[] }` to `LessonData`
  (type only). Renderer shows it only when the preference is true AND the field exists. Do not
  treat `simplifiedBody` or video as scaffold. Write no scaffold content.
- Q3 `literalLanguageMode`: add optional `literalBody?: string` to `LessonData` with the same
  paragraph structure as `body`. Renderer uses it when literal mode is on and the field exists,
  otherwise renders `body` unchanged. Dev-only report guarded by
  `process.env.NODE_ENV !== "production"` lists lessons missing `literalBody`.
- Q4 Option B. Keep `accessibility-effects.tsx` as the single applier. Add `usePreferencesApplied`
  hook and the `data-literal` attribute there. Do not delete files.
- Q5 No axe runner and no new dependencies. Phase 9 uses the contrast script, eslint with
  jsx-a11y, and the keyboard walkthrough. The user runs a manual axe extension pass themselves.
- Q6 Fix lint in Phase 0B by adding `eslint.config.mjs` only, using already installed `eslint`,
  `eslint-config-next`, and `eslint-plugin-jsx-a11y`. Update the lint script in `package.json`.
  Record findings in the report. Fix no source code for lint findings in Phase 0.
- Q7 Rewrite em dashes in app source strings (right-panel tutor responses, landing page) in
  Phase 8. For `src/data`, do a separate Phase 8B limited to punctuation replacement. Before 8B,
  count occurrences and show the proposed diff for approval.
- Q8 Implement quiz digit keys 1 to 4. Ignore the key when the event target is an input, textarea,
  or select.
- Q9 Fix the `useTTS` render-time window check and the home greeting `Date` mismatch as Phase 5A,
  a separate commit before preference wiring.
- Q10 Add `src/components/a11y/status-message.tsx`, always-mounted `role="status"`
  `aria-live="polite"`.
- Q11 Remove the dead `href="#"` Notifications entry on the settings page.
- Q12 Check for LICENSE and git remotes, and grep for `fetch`, `XMLHttpRequest`, and analytics
  usage. Report findings in Phase 8 planning. If the repo is not public, remove "Open source".
  Keep "privacy-first" only if no network calls exist, otherwise use
  "Your progress is saved in this browser."
- Q13 Write the keyboard walkthrough to `docs/a11y-walkthrough.md`.
- Q14 The contrast script covers light, dark, `.calm-reader`, `.high-contrast`, `.off-white-bg`.
- Q15 Remove both gradients and use solid colors.
- Q16 Flashcards: counter gets `aria-live="polite"`. The flip button gets `aria-pressed`. The
  inactive card face gets `aria-hidden`. Do not announce full card content on flip. Add to Phase 4.

## 5. Phases

### Phase 0: baseline and lint config (DONE)

Create branch `a11y-overhaul`; run baseline build, tsc, lint; add `eslint.config.mjs` (0B); record
all results in `docs/baseline-audit.md`. Commit `phase 0: baseline and lint config`.

Verification:
```
git checkout -b a11y-overhaul
npm run build
npx tsc --noEmit
npm run lint
```

### Phase 1: color tokens and contrast script

Checkpoints:

- **1A** touches only `src/app/globals.css` and new `scripts/check-contrast.mjs`.
- **1B-1** touches `src/app/page.tsx`, `src/app/(auth)/login/page.tsx`,
  `src/app/(auth)/signup/page.tsx`, `src/app/(app)/onboarding/page.tsx`, `src/app/not-found.tsx`.
- **1B-2** touches the remaining listed files: `src/app/(app)/home/page.tsx`,
  `src/app/(app)/quiz/page.tsx`, `src/app/(app)/flashcards/page.tsx`,
  `src/app/(app)/progress/page.tsx`,
  `src/app/(app)/subjects/[subjectId]/[lessonId]/lesson-client.tsx`,
  `src/app/(app)/subjects/[subjectId]/subject-client.tsx`,
  `src/components/layout/header.tsx`, `src/components/layout/right-panel.tsx`,
  `src/components/layout/sidebar/course-tree.tsx`, `src/components/video/video-player.tsx`.

Changes:

1. In `globals.css`, for each brand color add `--color-<brand>-text`, `--color-<brand>-solid`, and
   `--color-<brand>-on-solid` for `cta-orange`, `skill-blue`, `success-green`, `premium-amber`.
   Add `--color-focus-ring` in light and dark, clearing 3:1 on background and card. Retune
   `--color-muted-foreground`, `--color-cta-orange`, `--color-success-green`,
   `--color-premium-amber`, `--color-skill-blue`, `--color-ring`, `--color-sidebar-foreground` in
   place so existing class usages pass. Apply matching overrides in `.dark`, `.calm-reader`,
   `.high-contrast`, `.off-white-bg`.
2. New `scripts/check-contrast.mjs`: plain Node, zero dependencies. Reads `src/app/globals.css`,
   extracts OKLCH from `@theme`, `.dark`, `.calm-reader`, `.high-contrast`, `.off-white-bg`
   blocks, converts OKLCH to sRGB with the standard OKLab matrices, evaluates an explicit pair
   list covering every foreground/background combination the source uses: token pairs, 10 percent
   tint composites over card, opacity composites such as `muted-foreground/50` over background and
   `white/80` over brand solids, and focus-ring against background, card, muted, and the dark
   sidebar background, in all five modes. Prints one line per pair with ratio and pass or fail,
   exits 1 on any failure.
3. Class swaps only in 1B, no structural edits: `text-white` on brand solids to the paired
   `on-solid` token, tinted brand text on `/10` backgrounds to the `-text` tokens, failing opacity
   text to a full-opacity token, progress-fill `bg-skill-blue`/`bg-success-green`/
   `bg-premium-amber` divs (quiz and home progress bars, the only fills that use the token as a
   lone state indicator) to the matching `-solid` tokens, and `ring-skill-blue` focus classes to
   `ring-focus-ring` where the script shows them failing (dark modes). Landing hero gradient text
   at `src/app/page.tsx:77` becomes solid `text-foreground`. Landing CTA gradient block at line
   256 becomes a solid `bg-cta-orange` background with `text-white` (the white/80 line becomes
   full `text-white`), since the script shows white text failing on both gradient stops.
   As swaps land, delete the corresponding "remove this pair in 1B-2" entries from
   `scripts/check-contrast.mjs` so the gate ends Phase 1 at 721/721.
4. Do not rename existing tokens.

Risks: tokens and class strings only, no store reads, no window access, no hydration impact.

Verification: `node scripts/check-contrast.mjs`, `npm run build`, `npx tsc --noEmit`.

### Phase 2: global focus ring, skip link, landmarks, reduced motion

Files: `src/app/globals.css`, `src/components/layout/app-shell.tsx`, `src/app/page.tsx`,
`src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`, `src/app/not-found.tsx`,
`src/app/(app)/onboarding/page.tsx`, `src/app/(app)/settings/personalization/page.tsx`,
`src/components/layout/right-panel.tsx`, new `src/components/a11y/route-focus.tsx`.

Changes:

1. `globals.css` `@layer base`: one `:focus-visible` rule using `var(--color-focus-ring)`, 2px
   outline, 2px offset, on all elements; `@media (forced-colors: active)` keeps the outline and
   adds offset. Add a `.skip-link` class, visually hidden until focused. Add a
   `prefers-reduced-motion` guard for any smooth scroll. Existing reduce-motion CSS is verified,
   not rewritten.
2. `app-shell.tsx`: skip link as first child targeting `#main-content`; `main` gets
   `id="main-content"` and `tabIndex={-1}`; give the course-tree and tutor asides ids so
   `aria-controls` can reference them in Phase 3.
3. New `route-focus.tsx`: client component, `usePathname`, effect only (never render), focuses the
   first `h1` inside `main` after a pathname change, falls back to `main` itself when no `h1`
   exists, skips the first mount. Mounted once in `src/app/layout.tsx` inside `Providers`. Reads no
   store.
4. Landing, login, signup, not-found: add `main` landmark with `id="main-content"`
   `tabIndex={-1}` plus skip link. Landing gets `header`, labelled `nav`, `footer` semantics.
5. Onboarding: remove the duplicate `role="main"` at `src/app/(app)/onboarding/page.tsx:66`.
6. Remove or replace all 16 bare `focus:outline-none` occurrences: onboarding 102, 110, 137, 167,
   175, 183, 224, 232; login 84, 98; signup 86, 98, 113, 128; right-panel 283;
   personalization 110.

Risks: focus-on-route-change must live entirely in `useEffect`. Skip link and `tabIndex` are static.

Verification: `npm run build`, `node scripts/check-contrast.mjs`, `npx tsc --noEmit`. Manual: Tab
once on `out/index.html` and `/home/`, confirm skip link is the first stop.

### Phase 3: ARIA pass: accessibility page, sidebar, toggles

Files: `src/app/(app)/settings/accessibility/page.tsx`,
`src/components/layout/sidebar/course-tree.tsx`, `src/components/layout/header.tsx`,
`src/components/a11y/accessibility-toolbar.tsx`, `src/components/layout/right-panel.tsx`,
`src/components/layout/mobile-nav.tsx`,
`src/app/(app)/subjects/[subjectId]/subject-client.tsx`, `src/app/(app)/flashcards/page.tsx`,
`src/app/(app)/focus/page.tsx`, `src/app/(app)/settings/personalization/page.tsx`.

Changes:

1. Accessibility page: `Toggle` gets an accessible name (`aria-labelledby` to the label paragraph
   or an `aria-label` prop); `Slider` gets a real `<label>` by id and `aria-valuetext` carrying
   `displayValue`; trait buttons get `aria-pressed`.
2. Course tree: every disclosure button gets `aria-expanded` and `aria-controls` referencing a
   child group container id built from the node id; `aside` gets `aria-label`; current lesson link
   gets `aria-current="page"` by comparing `usePathname()` to `node.href`; icons and the
   `ProgressRing` svg get `aria-hidden="true"`; the locked link gets `aria-disabled="true"`.
3. Header: sidebar toggle gets `aria-expanded` plus `aria-controls` for the course-tree id; tutor
   toggle gets `aria-expanded` plus `aria-controls` for the tutor panel id; last breadcrumb gets
   `aria-current="page"`; icons get `aria-hidden`.
4. Accessibility toolbar: four toggle rows get `aria-pressed`; close button gets
   `aria-label="Close quick settings"`; launcher gets `aria-expanded` and `aria-controls`; panel
   gets an id, `role="dialog"`, `aria-modal="true"`, Escape close, and focus trap.
5. Right panel: `aside` gets `aria-label="AI tutor"`; chat input gets
   `aria-label="Ask the AI tutor a question"`; collapsed open buttons get `aria-expanded`.
6. Mobile nav: active link gets `aria-current="page"`.
7. Subject client: skills and videos buttons become `aria-pressed` toggle buttons with labelled
   panels (not `role="tab"` per amendment).
8. Personalization modal: `role="dialog"`, `aria-modal="true"`, focus trap, Escape to close.
9. Home and progress bars get `role="progressbar"` with value attributes.
10. Flashcards: known and unknown buttons get `aria-pressed`; TTS button gets `aria-pressed`.
11. Focus page: duration buttons get `aria-pressed`.

Risks: `aria-current` from `usePathname` matches during prerender for each exported route.
`aria-expanded` derives from the same store booleans the markup already uses. No new window access.

Verification: `npm run build`, `node scripts/check-contrast.mjs`, `npx tsc --noEmit`.

### Phase 4: live regions: quiz feedback, timer, status

Files: `src/app/(app)/quiz/page.tsx`, `src/app/(app)/focus/page.tsx`,
`src/components/layout/right-panel.tsx`, new `src/components/a11y/status-message.tsx`,
`src/app/(app)/settings/personalization/page.tsx`, `src/app/(app)/flashcards/page.tsx`,
`src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`,
`src/app/(app)/onboarding/page.tsx`.

Changes:

1. Quiz: always-mounted `aria-live="polite"` region present in every state including idle, text
   `Correct` or `Incorrect` in words after each check. Progress bar gets `role="progressbar"` with
   `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a label. Implement digit keys 1 to 4 as
   the help text at line 290 promises (decision Q8), ignoring the key when the event target is an
   input, textarea, or select. Results screen announces the final score through the same region.
2. Focus page: time display gets `role="timer"`; a visually hidden polite live region announces
   only when a whole minute changes and once on completion, never per second; progress svg gets
   `aria-hidden="true"`.
3. Tutor drawer: on open move focus into the input (already happens, keep it); on close return
   focus to the opener (header button or collapsed rail button, tracked by ref); Escape closes;
   new tutor messages and typing indicator in an `aria-live="polite"` region with `role="status"`
   on the typing indicator.
4. New `src/components/a11y/status-message.tsx`: always-mounted `role="status"`
   `aria-live="polite"` component, used by the personalization page after `Apply presets`.
5. Flashcards per Q16: counter gets `aria-live="polite"`; flip button gets `aria-pressed`;
   inactive card face gets `aria-hidden`; do not announce full card content on flip. Fix the
   window keydown double-fire on Space and Enter (guard when the target is a button or the flip
   element itself).
6. Login and signup: `role="alert"` on error messages, `role="status"` on loading text, `h1`
   before `h2`.
7. Onboarding: spinner gets `role="status"`; remove the redundant `role="listitem"` on the `li`
   (fixes the `jsx-a11y/no-redundant-roles` finding).

Risks: live regions must exist in static HTML from first render, never conditionally mounted. Guard
digit-key handler against input targets.

Verification: `npm run build`, `npx tsc --noEmit`, `npm run lint` (flashcards and onboarding
jsx-a11y findings clear here).

### Phase 5A: hydration bugfixes (separate commit before preference wiring)

Files: `src/hooks/use-tts.ts`, `src/app/(app)/home/page.tsx`.

Changes: move `isTTSSupported()` out of render into `useState` plus `useEffect` so server and first
client render agree; move the home greeting and daily hint `new Date().getHours()` behind a mount
gate so the prerendered text cannot mismatch.

Verification: `npm run build`, `npx tsc --noEmit`, `npm run lint`.

### Phase 5B: preferences hook, data-literal, scaffold and literalBody

Files: new `src/hooks/use-preferences-applied.ts`, `src/components/providers/accessibility-effects.tsx`,
`src/app/(app)/subjects/[subjectId]/[lessonId]/lesson-client.tsx`,
`src/data/subjects.ts` (type only, no content edits), new dev-only report module.

Changes:

1. `usePreferencesApplied` returns `{ hydrated, prefs }`, true only after both
   `usePreferencesStore.hasHydrated` and `useUIStore.hasHydrated` flip. Consumers read preference
   values through it and render neutral UI until `hydrated`.
2. `accessibility-effects.tsx` stays the single applier and additionally sets
   `data-literal="true"` on `document.documentElement` when `literalLanguageMode` is true, removing
   the attribute when false, gated on `hasHydrated`, applied only in `useEffect`. The unused
   `.literal-language` class has no CSS rules and is replaced by the attribute.
3. `LessonData` gains optional `scaffold?: { steps?: string[]; keyTerms?: { term: string;
   meaning: string }[] }` and optional `literalBody?: string`. Type only, no content written.
4. Lesson renderer: scaffold section renders only when `showVisualScaffolds` is true AND the field
   exists. Literal rendering uses `literalBody` when literal mode is on and the field exists,
   otherwise `body` unchanged. No runtime rewriting.
5. Dev-only report guarded by `process.env.NODE_ENV !== "production"` lists lessons missing
   `literalBody`. Never shipped in the export.

Risks: highest-risk phase. No preference-dependent markup before `hydrated`; all `document`
mutation in effects; `data-literal` set post-mount.

Verification: `npm run build`, `npx tsc --noEmit`, `node scripts/check-contrast.mjs`. Manual:
`npm run dev` confirms the dev report and that `html[data-literal]` never flashes; exported HTML
contains no `data-literal` and no report text.

### Phase 6: quiz timer, read aloud, voice input

Files: `src/app/(app)/quiz/page.tsx`, `src/lib/utils/tts.ts`, `src/hooks/use-tts.ts`,
new `src/hooks/use-read-aloud.ts`, new `src/hooks/use-voice-input.ts`,
`src/app/(app)/subjects/[subjectId]/[lessonId]/lesson-client.tsx`,
`src/components/layout/right-panel.tsx`.

Changes:

1. Quiz timer in the quiz header only when `quizTimerEnabled` is true read through
   `usePreferencesApplied`. Counts up as plain `mm:ss` text, has Pause and Resume with
   `aria-pressed`, never auto-submits, never scores, never fails. Initial render identical before
   and after hydration, so the timer does not jump.
2. `tts.ts` gains `pause` and `resume` beside `speak` and `stop`. `use-read-aloud.ts` attempts
   `speechSynthesis.speak` on lesson mount when `readAloudEnabled` is true; if the browser blocks
   it without a user gesture, show a visible button labelled `Play lesson audio` and announce its
   presence through a `role="status"` message. The fallback must NOT move focus. Always render
   pause, stop, and rate control (rate from existing `ui-store.ttsRate`, read after hydration).
   Cancel speech on route change and on unmount.
3. `use-voice-input.ts` feature-detects `window.SpeechRecognition || window.webkitSpeechRecognition`
   in an effect, never during render. When `voiceInputPreferred` is true and the API exists, the
   tutor input row shows a mic button that dictates into the input. Otherwise a short factual text
   note, for example `Voice input is not available in this browser.`

Risks: browser APIs only in effects or handlers. `supported` flags start false on server and first
client render, then flip in an effect. Timer initialized from a constant, not `Date.now()`.

Verification: `npm run build`, `npx tsc --noEmit`, manual dev checks for timer, blocked autoplay
fallback, and speech cancel on navigation.

### Phase 7: visual restyle

Split into two checkpoints.

**7A (shell):** `src/app/globals.css`, `src/components/layout/header.tsx`,
`src/components/layout/mobile-nav.tsx`, `src/components/layout/right-panel.tsx`,
`src/components/layout/sidebar/course-tree.tsx`,
`src/components/a11y/accessibility-toolbar.tsx`, `src/components/video/video-player.tsx`.

**7B-1 (landing, not-found, auth, onboarding):** `src/app/page.tsx`, `src/app/not-found.tsx`,
`src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx`,
`src/app/(app)/onboarding/page.tsx`.

**7B-2 (all remaining pages):** `src/app/(app)/home/page.tsx`, `src/app/(app)/quiz/page.tsx`,
`src/app/(app)/flashcards/page.tsx`, `src/app/(app)/focus/page.tsx`,
`src/app/(app)/practice/page.tsx`, `src/app/(app)/practice/review/skills/page.tsx`,
`src/app/(app)/progress/page.tsx`, `src/app/(app)/settings/page.tsx`,
`src/app/(app)/settings/accessibility/page.tsx`,
`src/app/(app)/settings/personalization/page.tsx`,
`src/app/(app)/subjects/[subjectId]/subject-client.tsx`,
`src/app/(app)/subjects/[subjectId]/[lessonId]/lesson-client.tsx`.

Changes:

1. `globals.css`: cap `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-3xl` at `0.5rem` so
   every existing `rounded-xl` and `rounded-2xl` collapses to the `rounded-md` maximum in one
   place. Keep `--radius-full` only for genuine circles (toggle knobs, progress rings, logo dots),
   never for buttons or badges.
2. Replace `rounded-full` on every button, link, chip, badge, and pill with `rounded-md`
   (about 45 call sites).
3. Primary controls to at least 44px. About 30 controls are under: worst are 20px (toolbar close,
   flashcards back, quiz back) and 24px (both settings switches).
4. Add `aria-hidden="true"` to every decorative Lucide icon (about 60 sites, only 4 exist today).
5. Remove decorative effects: the radial gradient blob at `src/app/page.tsx:67`, hover translate
   and shadow flourishes that read as glows.
6. Remove both gradients per Q15, solid colors only.

Risks: class strings and tokens, server and client output change identically.

Verification: `node scripts/check-contrast.mjs`, `npm run build`, `npx tsc --noEmit`, `npm run lint`.
Grep gates: no `rounded-full` on `button` or `a` except toggle knobs and progress rings; no
`rounded-2xl` or `rounded-3xl` remaining.

### Phase 8: landing copy and derived stats

Files: `src/app/page.tsx` (only), plus `src/components/layout/right-panel.tsx` and other app
source strings for em dash rewrites per Q7.

Changes:

1. Import `SUBJECTS`, `QUIZZES`, `FLASHCARD_DECKS`, `VIDEOS` from `@/data` and compute counts at
   module scope: per-subject lesson counts, total lessons, chapter count, quiz count, deck count,
   video count. Static constants in a server component, computed at build time, baked into the
   export. No hard-coded numbers remain.
2. Replace the `SUBJECTS` array at lines 58 to 62 with derived data and fix the
   `18 interactive lessons` sentence at line 153.
3. Fix the card link at line 173: `subject.name.toLowerCase()` produces `/subjects/mathematics/`,
   which does not exist. Use the subject id.
4. Rewrite hero and section copy plain and factual: replace `Learning designed for every mind`,
   `Everything you need to learn with clarity`, `Ready to learn differently?`, and
   `A complete toolkit designed around how your brain actually works`. Remove the em dash at
   line 197.
5. Q11: remove the dead `href="#"` Notifications entry at `src/app/(app)/settings/page.tsx:20`.
6. Q12 findings reported here: LICENSE presence (none as of Phase 0), git remotes
   (`origin` = `https://github.com/claritycrew01/ClarityCrew3.git`), and greps for `fetch`,
   `XMLHttpRequest`, analytics. Remove "Open source" if the repo is not public. Keep
   "privacy-first" only if no network calls exist, otherwise use
   "Your progress is saved in this browser."
7. Em dash rewrites in app source strings (right-panel tutor responses at lines 97, 100, 112 and
   landing copy).

Expected real numbers: Mathematics 12, Science 10, English 10; 32 lessons; 9 chapters; 32 quizzes;
30 flashcard decks; 32 videos.

Verification: `npm run build`, then
`Select-String -Path out\index.html -Pattern "18 interactive|12 interactive"` returns no stale
values.

### Phase 8B: data punctuation pass (needs approval first)

Before doing it, count em dash occurrences in `src/data/*.ts` and show the proposed diff for
approval. Scope is punctuation replacement only.

### Phase 9: final verification

Files: none in `src`. Write `docs/a11y-walkthrough.md` per Q13.

Verification:
```
npm run build
npx tsc --noEmit
node scripts/check-contrast.mjs
npm run lint
```

Static export check: confirm `out/index.html`, `out/404.html`, 12 math lesson folders, 10 science,
10 english, and that no `data-literal` and no dev-only report text appear in any exported HTML.

Keyboard walkthrough in `docs/a11y-walkthrough.md`: Tab order through skip link, header, course
tree, main, tutor drawer; Escape behavior on tutor drawer, toolbar popover, personalization modal;
quiz digit keys and Enter flow; flashcard arrow, space, 1, 2 keys; focus return after route change.

No axe runner (Q5). The user runs a manual axe extension pass.

## 6. Deferred from the audit (fix in the named phase)

- 0 `aria-live` regions, 0 skip links, 0 `:focus-visible` rules, only 4 `aria-hidden` uses.
- 16 bare `focus:outline-none`: onboarding 102, 110, 137, 167, 175, 183, 224, 232; login 84, 98;
  signup 86, 98, 113, 128; right-panel 283; personalization 110. Phase 2.
- Accessibility page switch 27 has no accessible name, range 63 has no label or `aria-valuetext`.
  Phase 3.
- Course-tree disclosure 117 lacks `aria-expanded`/`aria-controls`, aside 170 unlabelled, locked
  link 99 focusable but inert, rows 32px. Phase 3 and 7.
- Header toggles 46 and 85 lack `aria-expanded`, breadcrumb 69 lacks `aria-current`. Phase 3.
- Toolbar close button 62 has no name, toggles 71 to 84 lack `aria-pressed`, popover lacks dialog
  semantics. Phase 3.
- Right panel aside 169 unlabelled, input 276 unlabelled, no live regions, no Escape, no focus
  return. Phase 3 and 4.
- Subject client tabs 50 to 73 lack state semantics. Phase 3.
- Quiz feedback 42 and results 117 not live, progress bar 199 lacks `role="progressbar"`, digit
  keys promised but unimplemented, window keydown 62. Phase 4.
- Focus timer 124 has no `role="timer"` and no announcements, duration pills 135 lack
  `aria-pressed`, svg 99 lacks aria treatment. Phase 3 and 4.
- Login and signup lack landmarks, h2 precedes h1, errors not alerted, loading not announced.
  Phase 4.
- Onboarding duplicate `role="main"` 66, spinner 34 not a status. Phase 2 and 4.
- Flashcards flip 121 lacks key handling for the click rule, known and unknown 170 and 182 lack
  `aria-pressed`, counter 116 not live, both faces read by screen readers. Phase 4.
- Personalization modal 175 lacks dialog semantics and focus trap. Phase 3.
- Contrast failures listed in the baseline table, plus opacity text usages. Phase 1.
- About 30 controls under 44px, about 60 icons without `aria-hidden`, about 45 pill buttons.
  Phase 7.

## 7. Progress log

- Phase 0: DONE. Branch `a11y-overhaul`. Build exit 0 (51 static pages), tsc exit 0, lint config
  added with `eslint src`, lint reports 5 errors (recorded in `docs/baseline-audit.md`, deferred to
  Phases 4, 5A, and 7). Plan saved to `docs/a11y-overhaul-plan.md`.
- Phase 1A: DONE. `src/app/globals.css` retuned (muted-foreground 0.556 to 0.47; ring 0.708 to
  0.55 0.17 260; new `--color-focus-ring`; brands cta-orange 0.675 to 0.46, skill-blue 0.546 to
  0.48, success-green 0.627 to 0.4, premium-amber 0.769 to 0.43, destructive 0.577 to 0.48, each
  with `-text`, `-solid`, `-on-solid` companions; dark gets brighter `-solid` fills plus bright
  `-text` values, dark muted-foreground 0.74, dark destructive 0.83, dark ring/focus-ring 0.62;
  calm, high-contrast, and dark-high-contrast blocks updated with matching companions). New
  `scripts/check-contrast.mjs` (zero deps): parses globals.css, OKLCH to sRGB with chroma
  reduction for gamut, 7 modes (light, dark, calm-reader, high-contrast, off-white-bg,
  dark-high-contrast, dark-off-white-bg), 721 explicit pairs, 4.5 text / 3.0 UI thresholds.
  Result: 633/721 pass, 88 fails, all 88 deferred class-usage pairs (each marked
  "remove this pair in 1B-2 ..." in the script), zero non-deferred failures. Build exit 0, tsc
  exit 0, lint unchanged at the 5 known errors. 1B-2 must also delete those marked pairs from the
  script list as it performs the swaps.

