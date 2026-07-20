"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TutorMessage } from "@/lib/models";

const MAX_MESSAGES = 50;

interface TutorState {
  messages: TutorMessage[];
  lastContentId: string | null;
  isTyping: boolean;
  hasHydrated: boolean;

  addUserMessage: (text: string, contentId?: string) => void;
  addTutorMessage: (text: string, contentId?: string) => void;
  setTyping: (value: boolean) => void;
  setLastContentId: (id: string | null) => void;
  clearConversation: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useTutorStore = create<TutorState>()(
  persist(
    (set, get) => ({
      messages: [],
      lastContentId: null,
      isTyping: false,
      hasHydrated: false,

      addUserMessage: (text, contentId) => {
        const msg: TutorMessage = {
          id: `user-${Date.now()}`,
          role: "user",
          text,
          contentId,
          timestamp: Date.now(),
        };
        set((state) => ({
          messages: [...state.messages.slice(-MAX_MESSAGES + 1), msg],
          lastContentId: contentId ?? state.lastContentId,
        }));
      },

      addTutorMessage: (text, contentId) => {
        const msg: TutorMessage = {
          id: `tutor-${Date.now()}`,
          role: "tutor",
          text,
          contentId,
          timestamp: Date.now(),
        };
        set((state) => ({
          messages: [...state.messages.slice(-MAX_MESSAGES + 1), msg],
        }));
      },

      setTyping: (value) => set({ isTyping: value }),

      setLastContentId: (id) => set({ lastContentId: id }),

      clearConversation: () => set({ messages: [], lastContentId: null }),

      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "claritycrew-tutor",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
