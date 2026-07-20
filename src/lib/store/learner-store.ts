"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LearnerProfile, NeurodivergentTrait, FeedbackStyle, PacingPreference } from "@/lib/models";

interface LearnerState {
  profile: LearnerProfile | null;
  hasHydrated: boolean;
  setProfile: (profile: LearnerProfile | null) => void;
  updateTraits: (traits: NeurodivergentTrait[]) => void;
  updateFeedbackStyle: (style: FeedbackStyle) => void;
  updatePacing: (pacing: PacingPreference) => void;
  setHasHydrated: (value: boolean) => void;
  hasTrait: (trait: NeurodivergentTrait) => boolean;
}

const defaultProfile: LearnerProfile = {
  id: "",
  name: "",
  age: 0,
  neurodivergentTraits: [],
  accessibilityNeeds: [],
  preferredFeedback: "encouraging",
  pacing: "moderate",
  depthPreference: 0.5,
  modeWeights: {},
  engagementHistory: [],
  focusThreshold: 0.7,
};

export const useLearnerStore = create<LearnerState>()(
  persist(
    (set, get) => ({
      profile: null,
      hasHydrated: false,
      setProfile: (profile) => set({ profile }),
      updateTraits: (traits) =>
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, neurodivergentTraits: traits }
            : { ...defaultProfile, neurodivergentTraits: traits },
        })),
      updateFeedbackStyle: (style) =>
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, preferredFeedback: style }
            : { ...defaultProfile, preferredFeedback: style },
        })),
      updatePacing: (pacing) =>
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, pacing }
            : { ...defaultProfile, pacing },
        })),
      setHasHydrated: (value) => set({ hasHydrated: value }),
      hasTrait: (trait) => get().profile?.neurodivergentTraits.includes(trait) ?? false,
    }),
    {
      name: "claritycrew-learner",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
