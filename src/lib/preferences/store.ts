"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserPreferences } from "./types";
import { DEFAULT_PREFERENCES } from "./defaults";

interface PreferencesState extends UserPreferences {
  hasHydrated: boolean;
  setPreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void;
  setPreferences: (prefs: Partial<UserPreferences>) => void;
  resetToDefaults: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      ...DEFAULT_PREFERENCES,

      hasHydrated: false,

      setPreference: (key, value) => set({ [key]: value }),

      setPreferences: (prefs) => set(prefs),

      resetToDefaults: () => set(DEFAULT_PREFERENCES),

      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "claritycrew-preferences",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
