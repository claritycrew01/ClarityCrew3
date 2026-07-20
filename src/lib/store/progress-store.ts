"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SessionRecord } from "@/lib/models";

interface ProgressState {
  sessions: SessionRecord[];
  streak: number;
  totalLessonsCompleted: number;
  overallEngagement: number;
  hasHydrated: boolean;

  addSession: (session: SessionRecord) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  incrementLessonsCompleted: () => void;
  setOverallEngagement: (score: number) => void;
  setHasHydrated: (value: boolean) => void;
  getRecentSessions: (count: number) => SessionRecord[];
  getSubjectSessions: (subject: string) => SessionRecord[];
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      sessions: [],
      streak: 0,
      totalLessonsCompleted: 0,
      overallEngagement: 0,
      hasHydrated: false,

      addSession: (session) =>
        set((state) => ({ sessions: [...state.sessions, session] })),

      incrementStreak: () =>
        set((state) => ({ streak: state.streak + 1 })),

      resetStreak: () => set({ streak: 0 }),

      incrementLessonsCompleted: () =>
        set((state) => ({
          totalLessonsCompleted: state.totalLessonsCompleted + 1,
        })),

      setOverallEngagement: (score) => set({ overallEngagement: score }),
      setHasHydrated: (value) => set({ hasHydrated: value }),

      getRecentSessions: (count) =>
        get().sessions.slice(-count).reverse(),

      getSubjectSessions: (subject) =>
        get().sessions.filter((s) => s.subject === subject),
    }),
    {
      name: "claritycrew-progress",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
