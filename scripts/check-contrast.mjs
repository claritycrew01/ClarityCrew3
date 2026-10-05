#!/usr/bin/env node
// Contrast gate for the ClarityCrew color tokens. Zero dependencies.
//
// Reads src/app/globals.css, extracts OKLCH custom properties from @theme and
// from each color-mode block, converts them to sRGB, and checks an explicit
// list of foreground/background pairs that the source actually renders.
//
// Thresholds: 4.5:1 for text, 3:1 for UI and focus indicators (WCAG 2.1 AA).
// Exits 1 when any pair fails. Pairs marked "1B" are class usages that the
// Phase 1B checkpoints swap; they must be green by the end of Phase 1.

import { readFileSync } from "node:fs";

const CSS_URL = new URL("../src/app/globals.css", import.meta.url);

const TEXT = 4.5;
const UI = 3.0;

// ---------------------------------------------------------------------------
// Color math: OKLCH -> linear sRGB -> relative luminance, plus alpha compositing
// ---------------------------------------------------------------------------

function oklchToLinearRgb({ l, c, h }) {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  return [
    4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3,
    -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3,
    -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3,
  ];
}

function inGamut([r, g, b]) {
  const e = 1e-6;
  return r >= -e && r <= 1 + e && g >= -e && g <= 1 + e && b >= -e && b <= 1 + e;
}

function clipToGamut(oklch) {
  const linear = oklchToLinearRgb(oklch);
  if (inGamut(linear)) return linear;
  // Reduce chroma until the color fits sRGB (matches what browsers do).
  let lo = 0;
  let hi = oklch.c;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinearRgb({ ...oklch, c: mid }))) lo = mid;
    else hi = mid;
  }
  return oklchToLinearRgb({ ...oklch, c: lo });
}

function toSrgb([r, g, b]) {
  const enc = (v) =>
    v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
  return [enc(clamp01(r)), enc(clamp01(g)), enc(clamp01(b))];
}

function fromSrgb([r, g, b]) {
  const dec = (v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return [dec(clamp01(r)), dec(clamp01(g)), dec(clamp01(b))];
}

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

// A parsed color: { oklch, linear, srgb, y }
function makeColor(oklch) {
  const linear = clipToGamut(oklch);
  const srgb = toSrgb(linear);
  const y = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  return { oklch, linear, srgb, y };
}

const WHITE = makeColor({ l: 1, c: 0, h: 0 });

// CSS alpha compositing happens on gamma-encoded sRGB values.
function composite(fg, alpha, bg) {
  const srgb = fg.srgb.map((v, i) => alpha * v + (1 - alpha) * bg.srgb[i]);
  const linear = fromSrgb(srgb);
  const y = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  return { srgb, linear, y };
}

function contrast(a, b) {
  const hi = Math.max(a.y, b.y);
  const lo = Math.min(a.y, b.y);
  return (hi + 0.05) / (lo + 0.05);
}

// ---------------------------------------------------------------------------
// CSS parsing
// ---------------------------------------------------------------------------

function parseOklch(value) {
  const m = value.match(
    /oklch\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:\s*\/\s*([\d.]+)(%?))?\s*\)/
  );
  if (!m) return null;
  const alpha = m[4] === undefined ? 1 : parseFloat(m[4]) / (m[5] ? 100 : 1);
  return { l: +m[1], c: +m[2], h: +m[3], alpha };
}

function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

function extractBlock(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(?:^|[}\\s])${escaped}\\s*\\{([^{}]*)\\}`, "m");
  const m = css.match(re);
  return m ? m[1] : null;
}

function parseDeclarations(block) {
  const out = new Map();
  if (!block) return out;
  const re = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) {
    out.set(m[1], m[2].replace(/!important/g, "").trim());
  }
  return out;
}

function buildModes(css) {
  const theme = parseDeclarations(extractBlock(css, "@theme"));
  const blocks = {
    ".dark": parseDeclarations(extractBlock(css, ".dark")),
    ".calm-reader": parseDeclarations(extractBlock(css, ".calm-reader")),
    ".high-contrast": parseDeclarations(extractBlock(css, ".high-contrast")),
    ".dark .high-contrast": parseDeclarations(
      extractBlock(css, ".dark .high-contrast")
    ),
    ".off-white-bg": parseDeclarations(extractBlock(css, ".off-white-bg")),
    ".dark .off-white-bg": parseDeclarations(
      extractBlock(css, ".dark .off-white-bg")
    ),
  };
  for (const [name, block] of Object.entries(blocks)) {
    if (!block.size && name !== ".off-white-bg") {
      throw new Error(`mode block not found in globals.css: ${name}`);
    }
  }
  const mode = (label, chain) => ({ label, chain });
  return [
    mode("light", []),
    mode("dark", [".dark"]),
    mode("calm-reader", [".calm-reader"]),
    mode("high-contrast", [".high-contrast"]),
    mode("off-white-bg", [".off-white-bg"]),
    mode("dark-high-contrast", [".dark", ".high-contrast", ".dark .high-contrast"]),
    mode("dark-off-white-bg", [".dark", ".off-white-bg", ".dark .off-white-bg"]),
  ].map((m) => ({ ...m, theme, blocks }));
}

function resolveTokens(mode) {
  const tokens = new Map();
  const put = (name, raw) => {
    const parsed = parseOklch(raw);
    if (parsed) tokens.set(name.replace(/^--color-/, ""), makeColor(parsed));
  };
  for (const [k, v] of mode.theme) if (k.startsWith("--color-")) put(k, v);
  for (const sel of mode.chain) {
    for (const [k, v] of mode.blocks[sel]) if (k.startsWith("--color-")) put(k, v);
  }
  return tokens;
}

// ---------------------------------------------------------------------------
// Pair list: foreground and background descriptors the source renders
// ---------------------------------------------------------------------------
//
// Descriptor forms:
//   "white"                                  literal #fff
//   "muted-foreground"                       theme token
//   { tint: "skill-blue", alpha: 10, over: "background" }   bg composite
//   { token: "muted-foreground", alpha: 70 } fg alpha over its bg
//   { white: 80 }                            white at alpha over its bg

const SURFACES = ["background", "card", "muted"];

const BRANDS = {
  "cta-orange": { tints: [10], solid: true, hover: true },
  "skill-blue": { tints: [5, 10], solid: true, hover: true },
  "success-green": { tints: [5, 10, 15], solid: true, hover: true },
  "premium-amber": { tints: [10], solid: true, hover: false },
};

// Only cta-orange has a -hover token in use (hover:bg-cta-orange-hover).
const HOVER_TOKENS = ["cta-orange"];

const PAIRS = [];

const add = (fg, bg, need, note = "") => PAIRS.push({ fg, bg, need, note });

// Body text on surfaces
for (const s of SURFACES) add("foreground", s, TEXT);
for (const s of SURFACES) add("muted-foreground", s, TEXT);

// Opacity text (fails until the 1B class swap to full-opacity tokens)
for (const [alpha, surfaces] of [
  [70, ["background", "card"]],
  [50, ["background"]],
  [30, ["background", "card"]],
]) {
  for (const s of surfaces) {
    add(
      { token: "muted-foreground", alpha },
      s,
      TEXT,
      "remove this pair in 1B-2 after the swap to a full-opacity token"
    );
  }
}

// Brand text: dedicated -text token on every surface and on its own tint
for (const [b, cfg] of Object.entries(BRANDS)) {
  for (const s of SURFACES) add(`${b}-text`, s, TEXT);
  for (const a of cfg.tints) {
    for (const s of SURFACES) add(`${b}-text`, { tint: b, alpha: a, over: s }, TEXT);
  }
  // Base token still renders as text until 1B-2 swaps text-* to -text.
  // Both pairs are removed from this list in 1B-2 once the swap is done.
  add(b, "background", TEXT, "remove this pair in 1B-2 after text-* swaps to -text");
  add(b, { tint: b, alpha: Math.max(...cfg.tints), over: "card" }, TEXT,
    "remove this pair in 1B-2 after text-* swaps to -text");
}

// White (or -on-solid) on brand solids, including hover alphas
for (const [b, cfg] of Object.entries(BRANDS)) {
  add("white", b, TEXT);
  add("white", `${b}-solid`, TEXT);
  if (HOVER_TOKENS.includes(b)) add("white", `${b}-hover`, TEXT);
  if (cfg.hover) {
    add(
      "white",
      { tint: b, alpha: 90, over: "background" },
      TEXT,
      "if this fails, swap hover:bg-*/90 to a -hover token in 1B-2"
    );
  }
}

// White at 80% on the landing CTA solid (Q15 solid block)
add({ white: 80 }, "cta-orange-solid", TEXT,
  "remove this pair in 1B-2 after text-white/80 swaps to text-white");
// White CTA button keeps the base token as its text in every mode.
add("skill-blue", "white", TEXT);
add("skill-blue", { white: 90, over: "cta-orange-solid" }, TEXT);

// Destructive text on its tints (quiz feedback chips and alert boxes)
for (const a of [15, 10, 5]) {
  for (const s of SURFACES) add("destructive", { tint: "destructive", alpha: a, over: s }, TEXT);
}
add("destructive", "background", TEXT);
add("destructive", "card", TEXT);

// Progress fills (UI 3:1 against their track)
for (const b of Object.keys(BRANDS)) {
  add(`${b}-solid`, "muted", UI);
  // Base token renders as the fill until 1B-2 swaps progress fills to -solid.
  add(b, "muted", UI, "remove this pair in 1B-2 after progress fills swap to -solid");
}

// Sidebar
add("sidebar-foreground", "sidebar-bg", TEXT);
add("sidebar-foreground", "sidebar-accent", TEXT);
add("sidebar-accent-foreground", "sidebar-accent", TEXT);
for (const alpha of [70, 30]) {
  add({ token: "sidebar-foreground", alpha }, "sidebar-bg", UI,
    "remove this pair in 1B-2 after the opacity class swap");
}
for (const alpha of [50, 40]) {
  add({ token: "sidebar-foreground", alpha }, "sidebar-bg", TEXT,
    "remove this pair in 1B-2 after the opacity class swap");
}

// Focus indicators (3:1 against everything they can land on)
for (const ring of ["focus-ring", "ring"]) {
  for (const s of ["background", "card", "muted", "sidebar-bg"]) add(ring, s, UI);
}
// focus:ring-skill-blue sites swap to ring-focus-ring in 1B-2 where they fail
add("skill-blue", "background", UI, "remove this pair in 1B-2 after ring-skill-blue swaps to ring-focus-ring");
add("skill-blue", "card", UI, "remove this pair in 1B-2 after ring-skill-blue swaps to ring-focus-ring");

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

function resolveFg(spec, tokens, bg) {
  if (spec === "white") return WHITE;
  if (typeof spec === "string") {
    const t = tokens.get(spec);
    if (!t) throw new Error(`unknown token: ${spec}`);
    return t;
  }
  if (spec.white !== undefined) return composite(WHITE, spec.white / 100, bg);
  const t = tokens.get(spec.token);
  if (!t) throw new Error(`unknown token: ${spec.token}`);
  return composite(t, spec.alpha / 100, bg);
}

function resolveBg(spec, tokens) {
  if (spec === "white") return WHITE;
  if (typeof spec === "string") {
    const t = tokens.get(spec);
    if (!t) throw new Error(`unknown token: ${spec}`);
    return t;
  }
  if (spec.tint) {
    const over = tokens.get(spec.over);
    if (!over) throw new Error(`unknown surface token: ${spec.over}`);
    const tint = tokens.get(spec.tint);
    if (!tint) throw new Error(`unknown tint token: ${spec.tint}`);
    return composite(tint, spec.alpha / 100, over);
  }
  if (spec.white !== undefined) {
    const over = tokens.get(spec.over);
    if (!over) throw new Error(`unknown surface token: ${spec.over}`);
    return composite(WHITE, spec.white / 100, over);
  }
  throw new Error(`unsupported bg descriptor: ${JSON.stringify(spec)}`);
}

function describe(spec) {
  if (spec === "white") return "white";
  if (typeof spec === "string") return spec;
  if (spec.white !== undefined) return `white/${spec.white}`;
  if (spec.tint) return `${spec.tint}/${spec.alpha} over ${spec.over}`;
  return `${spec.token}/${spec.alpha}`;
}

function main() {
  const css = stripComments(readFileSync(CSS_URL, "utf8"));
  const modes = buildModes(css);

  const rows = [];
  let failures = 0;

  for (const mode of modes) {
    const tokens = resolveTokens(mode);
    for (const pair of PAIRS) {
      const bg = resolveBg(pair.bg, tokens);
      const fg = resolveFg(pair.fg, tokens, bg);
      const ratio = contrast(fg, bg);
      const pass = ratio >= pair.need;
      if (!pass) failures++;
      rows.push({
        mode: mode.label,
        fg: describe(pair.fg),
        bg: describe(pair.bg),
        ratio,
        need: pair.need,
        pass,
        note: pair.note,
      });
    }
  }

  const w = (s, n) => String(s).padEnd(n);
  console.log(
    w("mode", 20) + w("foreground", 34) + w("background", 30) +
      w("ratio", 8) + w("need", 6) + "result"
  );
  console.log("-".repeat(90));
  for (const r of rows) {
    const line =
      w(r.mode, 20) + w(r.fg, 34) + w(r.bg, 30) +
      w(r.ratio.toFixed(2), 8) + w(r.need.toFixed(1), 6) +
      (r.pass ? "pass" : "FAIL");
    console.log(r.pass ? line : line + (r.note ? "  <- " + r.note : ""));
  }

  console.log("-".repeat(90));
  const total = rows.length;
  const passed = total - failures;
  console.log(`${passed}/${total} pairs pass`);
  if (failures > 0) {
    console.log(`${failures} FAILING pairs`);
    process.exit(1);
  }
}

main();
