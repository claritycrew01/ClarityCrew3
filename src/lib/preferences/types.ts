export type ThemePreference = "light" | "dark" | "system";
export type FontFamilyPreference = "default" | "dyslexia-friendly" | "high-legibility";
export type BackgroundTone = "white" | "off-white";

export interface UserPreferences {
  // Appearance
  theme: ThemePreference;
  fontFamily: FontFamilyPreference;
  textSize: number;
  lineSpacing: number;
  letterSpacing: number;
  wordSpacing: number;
  backgroundTone: BackgroundTone;

  // Reading & Content
  readAloudEnabled: boolean;
  literalLanguageMode: boolean;
  showVisualScaffolds: boolean;

  // Navigation & Focus
  navigationDensity: "reduced" | "full";
  reduceMotion: boolean;

  // Input
  voiceInputPreferred: boolean;
  quizTimerEnabled: boolean;

  // Meta
  hasCompletedOnboarding: boolean;
  onboardingSelections: string[];
}

export const PREFERENCE_KEYS: (keyof UserPreferences)[] = [
  "theme",
  "fontFamily",
  "textSize",
  "lineSpacing",
  "letterSpacing",
  "wordSpacing",
  "backgroundTone",
  "readAloudEnabled",
  "literalLanguageMode",
  "showVisualScaffolds",
  "navigationDensity",
  "reduceMotion",
  "voiceInputPreferred",
  "quizTimerEnabled",
  "hasCompletedOnboarding",
  "onboardingSelections",
];
