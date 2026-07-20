"use client";

import { create } from "zustand";
import type { ContentItem, InteractionEvent, SessionRecord } from "@/lib/models";

interface SessionState {
  activeSession: SessionRecord | null;
  currentContent: ContentItem | null;
  events: InteractionEvent[];
  isPaused: boolean;

  startSession: (session: SessionRecord) => void;
  setCurrentContent: (content: ContentItem | null) => void;
  addEvent: (event: InteractionEvent) => void;
  pauseSession: () => void;
  resumeSession: () => void;
  completeSession: () => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>()((set) => ({
  activeSession: null,
  currentContent: null,
  events: [],
  isPaused: false,

  startSession: (session) =>
    set({ activeSession: session, events: [], currentContent: null, isPaused: false }),

  setCurrentContent: (content) => set({ currentContent: content }),

  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
      activeSession: state.activeSession
        ? { ...state.activeSession, interactions: [...state.activeSession.interactions, event] }
        : state.activeSession,
    })),

  pauseSession: () => set({ isPaused: true }),
  resumeSession: () => set({ isPaused: false }),

  completeSession: () =>
    set((state) => ({
      activeSession: state.activeSession
        ? { ...state.activeSession, completed: true, endTime: Date.now() }
        : null,
    })),

  resetSession: () => set({ activeSession: null, currentContent: null, events: [], isPaused: false }),
}));
