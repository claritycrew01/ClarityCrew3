import type { UserPreferences } from "./types";

export const DEFAULT_PREFERENCES: UserPreferences = {
  // Appearance
  theme: "system",
  fontFamily: "default",
  textSize: 16,
  lineSpacing: 1.6,
  letterSpacing: 0,
  wordSpacing: 0,
  backgroundTone: "white",

  // Reading & Content
  readAloudEnabled: false,
  literalLanguageMode: false,
  showVisualScaffolds: false,

  // Navigation & Focus
  navigationDensity: "full",
  reduceMotion: false,

  // Input
  voiceInputPreferred: false,
  quizTimerEnabled: true,

  // Meta
  hasCompletedOnboarding: false,
  onboardingSelections: [],
};
