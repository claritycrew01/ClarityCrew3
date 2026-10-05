"use client";

import { useUIStore } from "@/lib/store/ui-store";
import { usePreferencesStore } from "@/lib/preferences";

export function usePreferencesApplied() {
  const prefsHydrated = usePreferencesStore((s) => s.hasHydrated);
  const uiHydrated = useUIStore((s) => s.hasHydrated);
  const prefs = usePreferencesStore();

  return { hydrated: prefsHydrated && uiHydrated, prefs };
}
