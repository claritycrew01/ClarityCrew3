"use client";

import { useEffect, type ReactNode } from "react";
import { useUIStore } from "@/lib/store/ui-store";

export function AccessibilityEffects({ children }: { children: ReactNode }) {
  const hasHydrated = useUIStore((s) => s.hasHydrated);
  const dyslexiaFont = useUIStore((s) => s.dyslexiaFont);
  const calmReaderMode = useUIStore((s) => s.calmReaderMode);
  const highContrastMode = useUIStore((s) => s.highContrastMode);
  const letterSpacing = useUIStore((s) => s.letterSpacing);
  const lineHeight = useUIStore((s) => s.lineHeight);

  useEffect(() => {
    if (!hasHydrated) return;
    const root = document.documentElement;

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
  }, [hasHydrated, dyslexiaFont, calmReaderMode, highContrastMode, letterSpacing, lineHeight]);

  return <>{children}</>;
}
