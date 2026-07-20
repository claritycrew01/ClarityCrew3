"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/lib/store/ui-store";

export function ReadingRuler() {
  const readingRuler = useUIStore((s) => s.readingRuler);
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!readingRuler) return;

    function handleMouseMove(e: MouseEvent) {
      if (rulerRef.current) {
        rulerRef.current.style.top = `${e.clientY - 20}px`;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [readingRuler]);

  if (!readingRuler) return null;

  return <div ref={rulerRef} className="reading-ruler" aria-hidden="true" />;
}
