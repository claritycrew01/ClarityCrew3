"use client";

import { useEffect, type ReactNode } from "react";
import { useUIStore } from "@/lib/store/ui-store";
import { usePreferencesApplied } from "@/hooks/use-preferences-applied";

export function AccessibilityEffects({ children }: { children: ReactNode }) {
  const dyslexiaFont = useUIStore((s) => s.dyslexiaFont);
  const calmReaderMode = useUIStore((s) => s.calmReaderMode);
  const highContrastMode = useUIStore((s) => s.highContrastMode);
  const letterSpacing = useUIStore((s) => s.letterSpacing);
  const lineHeight = useUIStore((s) => s.lineHeight);

  const { hydrated, prefs } = usePreferencesApplied();

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;

    // Legacy ui-store effects (kept for backward compat)
    if (dyslexiaFont) {
      root.classList.add("font-dyslexic");
    } else {
      root.classList.remove("font-dyslexic");
    }

    if (calmReaderMode) {
      root.classList.add("calm-reader");
    } else {
      root.classList.remove("calm-reader");
    }

    if (highContrastMode) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    root.style.setProperty("--a11y-letter-spacing", `${letterSpacing}em`);
    root.style.setProperty("--a11y-line-height", lineHeight.toString());

    // ── New preferences system ──

    // Theme
    if (prefs.theme === "dark") {
      root.classList.add("dark");
    } else if (prefs.theme === "light") {
      root.classList.remove("dark");
    }
    // "system" is handled by next-themes

    // Font family
    root.classList.remove("font-dyslexic", "font-high-legibility");
    if (prefs.fontFamily === "dyslexia-friendly") {
      root.classList.add("font-dyslexic");
    } else if (prefs.fontFamily === "high-legibility") {
      root.classList.add("font-high-legibility");
    }

    // Text size
    root.style.setProperty("--a11y-text-size", `${prefs.textSize}px`);
    root.style.fontSize = `${prefs.textSize}px`;

    // Line spacing
    root.style.setProperty("--a11y-line-height", prefs.lineSpacing.toString());

    // Letter spacing
    root.style.setProperty("--a11y-letter-spacing", `${prefs.letterSpacing}em`);

    // Word spacing
    root.style.setProperty("--a11y-word-spacing", `${prefs.wordSpacing}em`);

    // Background tone
    if (prefs.backgroundTone === "off-white") {
      root.classList.add("off-white-bg");
    } else {
      root.classList.remove("off-white-bg");
    }

    // Reduce motion
    if (prefs.reduceMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }

    // Literal language mode
    if (prefs.literalLanguageMode) {
      root.setAttribute("data-literal", "true");
    } else {
      root.removeAttribute("data-literal");
    }

    return () => {
      root.style.fontSize = "";
    };
  }, [
    hydrated,
    dyslexiaFont,
    calmReaderMode,
    highContrastMode,
    letterSpacing,
    lineHeight,
    prefs.theme,
    prefs.fontFamily,
    prefs.textSize,
    prefs.lineSpacing,
    prefs.letterSpacing,
    prefs.wordSpacing,
    prefs.backgroundTone,
    prefs.reduceMotion,
    prefs.literalLanguageMode,
  ]);

  return <>{children}</>;
}
