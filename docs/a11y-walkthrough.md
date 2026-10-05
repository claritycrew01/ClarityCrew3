# ClarityCrew keyboard walkthrough

Manual keyboard verification for Phase 9. Run it against `npm run dev`, or build the static
export (`npm run build`) and serve the `out` folder. Pair this walkthrough with the manual axe
extension pass (Q5: no axe runner is bundled and no new dependencies are allowed).

## 1. Tab order in the app shell

The DOM order in `app-shell.tsx` is skip link, header, course tree, tutor drawer, floating
accessibility toolbar, main content, mobile nav. Expected sequence:

1. First Tab on any app page reveals the "Skip to main content" link. Enter on it moves focus
   to `#main-content`.
2. Header: "Toggle sidebar" button, logo link, breadcrumb links, "Toggle AI tutor" button,
   "Log out" button (plus "Get Started" when it is shown).
3. Course tree: chapter controls and lesson rows are reachable in visual order.
4. Tutor drawer: the "Open AI tutor" launcher when collapsed, or the open panel.
5. Accessibility toolbar launcher ("Accessibility settings").
6. Main content: page controls in source order.
7. Mobile navigation bar on small screens.

Every stop paints the global focus ring.

## 2. Escape behavior

- Tutor drawer: Escape closes the drawer. Focus returns to the control that opened it, or to
  the "Open AI tutor" launcher when that control is no longer in the document. Opening the
  drawer moves focus to the message input.
- Accessibility toolbar: Escape closes the popover and returns focus to the
  "Accessibility settings" launcher. The panel is a `role="dialog"` and Tab cycles within it.
- Personalization presets modal: Escape closes the modal and returns focus to the button that
  opened it. Tab is trapped inside the modal (`role="dialog"`, `aria-modal="true"`).

## 3. Quiz keys

- Digits 1 to 4 select the matching option while the question is unanswered.
- Enter with a selection checks the answer.
- Enter or Space after answering advances to the next question or to the results screen.
- Keys are ignored while focus sits in an input, textarea, or select, and a focused button
  keeps its native Enter and Space behavior with no hijack.
- The timer Pause button exposes `aria-pressed`.

## 4. Flashcard keys

- Space or Enter flips the card, including when the card element itself has focus.
- ArrowLeft and ArrowRight move to the previous or next card.
- 1 marks the card unknown, 2 marks it known.
- Space and Enter are not hijacked while a card control button has focus.
- The on-screen hint lists the same keys.

## 5. Focus after route changes

- `RouteFocus` (mounted in the root layout) runs on every pathname change after the first
  render: focus moves to the `h1` inside `#main-content` (given a dynamic `tabIndex="-1"`),
  or to `#main-content` itself when the page has no `h1`.
- The skip link targets `#main-content` on the landing, auth, not-found, and app pages.

## 6. Automated checks (Phase 9 verification)

| Command | Result |
| --- | --- |
| `npm run build` | exit 0 |
| `npx tsc --noEmit` | exit 0 |
| `node scripts/check-contrast.mjs` | 609/609 pairs pass, exit 0 |
| `npm run lint` | exit 0 |

Static export checks:

- `out/index.html` and `out/404.html` exist.
- Lesson folders: 12 mathematics, 10 science, 10 english (each subject directory also holds
  one build artifact directory that is not a lesson page).
- No exported HTML contains `data-literal` or the development only `literalBody` report text.
- The whole `out` HTML tree contains zero em dashes and en dashes.
