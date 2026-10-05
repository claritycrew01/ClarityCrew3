"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  Eye,
  Ear,
  X,
  Type,
  Contrast,
  BookOpen,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useUIStore } from "@/lib/store/ui-store";
import Link from "next/link";

export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dyslexiaFont = useUIStore((s) => s.dyslexiaFont);
  const setDyslexiaFont = useUIStore((s) => s.setDyslexiaFont);
  const calmReaderMode = useUIStore((s) => s.calmReaderMode);
  const setCalmReaderMode = useUIStore((s) => s.setCalmReaderMode);
  const highContrastMode = useUIStore((s) => s.highContrastMode);
  const setHighContrastMode = useUIStore((s) => s.setHighContrastMode);
  const readingRuler = useUIStore((s) => s.readingRuler);
  const setReadingRuler = useUIStore((s) => s.setReadingRuler);

  const toggles = [
    {
      label: "Dyslexia Font",
      icon: Type,
      active: dyslexiaFont,
      onClick: () => setDyslexiaFont(!dyslexiaFont),
    },
    {
      label: "High Contrast",
      icon: Contrast,
      active: highContrastMode,
      onClick: () => setHighContrastMode(!highContrastMode),
    },
    {
      label: "Calm Reader",
      icon: Eye,
      active: calmReaderMode,
      onClick: () => setCalmReaderMode(!calmReaderMode),
    },
    {
      label: "Reading Ruler",
      icon: BookOpen,
      active: readingRuler,
      onClick: () => setReadingRuler(!readingRuler),
    },
  ];

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    panel.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !panel.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-20 right-4 z-50 sm:bottom-6">
      {open && (
        <div
          ref={panelRef}
          id="quick-settings-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-settings-title"
          tabIndex={-1}
          className="mb-3 w-56 rounded-md border border-border bg-background p-3 shadow-xl animate-fade-in"
        >
          <div className="mb-2 flex items-center justify-between">
            <span id="quick-settings-title" className="text-xs font-semibold text-foreground">
              Quick Settings
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close quick settings"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-1">
            {toggles.map((toggle) => (
              <button
                key={toggle.label}
                onClick={toggle.onClick}
                aria-pressed={toggle.active}
                className={cn(
                  "flex min-h-11 w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors",
                  toggle.active
                    ? "bg-skill-blue/10 text-skill-blue-text font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <toggle.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {toggle.label}
              </button>
            ))}
          </div>
          <Link
            href="/settings/accessibility/"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-border px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            All Settings
          </Link>
        </div>
      )}

      <button
        ref={launcherRef}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-md border border-border shadow-lg transition-all",
          open
            ? "bg-skill-blue-solid text-skill-blue-on-solid border-skill-blue-solid"
            : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
        aria-label="Accessibility settings"
        aria-expanded={open}
        aria-controls="quick-settings-panel"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
