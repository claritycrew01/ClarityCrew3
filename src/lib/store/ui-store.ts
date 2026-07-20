"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark" | "system";

interface UIState {
  sidebarCollapsed: boolean;
  rightPanelOpen: boolean;
  theme: ThemeMode;
  hasHydrated: boolean;
  calmReaderMode: boolean;
  dyslexiaFont: boolean;
  highContrastMode: boolean;
  letterSpacing: number;
  lineHeight: number;
  readingRuler: boolean;
  ttsRate: number;
  setSidebarCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
  setRightPanelOpen: (value: boolean) => void;
  toggleRightPanel: () => void;
  setTheme: (theme: ThemeMode) => void;
  setCalmReaderMode: (value: boolean) => void;
  setDyslexiaFont: (value: boolean) => void;
  setHighContrastMode: (value: boolean) => void;
  setLetterSpacing: (value: number) => void;
  setLineHeight: (value: number) => void;
  setReadingRuler: (value: boolean) => void;
  setTtsRate: (value: number) => void;
  setHasHydrated: (value: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      rightPanelOpen: false,
      theme: "system",
      hasHydrated: false,
      calmReaderMode: false,
      dyslexiaFont: false,
      highContrastMode: false,
      letterSpacing: 0,
      lineHeight: 1.6,
      readingRuler: false,
      ttsRate: 1,

      setSidebarCollapsed: (value) => set({ sidebarCollapsed: value }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setRightPanelOpen: (value) => set({ rightPanelOpen: value }),
      toggleRightPanel: () => set((state) => ({ rightPanelOpen: !state.rightPanelOpen })),
      setTheme: (theme) => set({ theme }),
      setCalmReaderMode: (value) => set({ calmReaderMode: value }),
      setDyslexiaFont: (value) => set({ dyslexiaFont: value }),
      setHighContrastMode: (value) => set({ highContrastMode: value }),
      setLetterSpacing: (value) => set({ letterSpacing: value }),
      setLineHeight: (value) => set({ lineHeight: value }),
      setReadingRuler: (value) => set({ readingRuler: value }),
      setTtsRate: (value) => set({ ttsRate: value }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "claritycrew-ui",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
