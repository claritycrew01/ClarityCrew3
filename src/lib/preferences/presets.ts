import type { UserPreferences } from "./types";
import { DEFAULT_PREFERENCES } from "./defaults";

export type DisabilityPreset = "dyslexia" | "adhd" | "autism" | "dyscalculia" | "dysgraphia" | "executive-dysfunction" | "anxiety";

export const DISABILITY_OPTIONS: { value: DisabilityPreset; label: string; description: string }[] = [
  { value: "dyslexia", label: "Dyslexia", description: "Dyslexia-friendly font, wider letter/word spacing, off-white background, read-aloud" },
  { value: "adhd", label: "ADHD", description: "Reduced navigation density, focus mode on home, progress indicators emphasized" },
  { value: "autism", label: "Autism", description: "Reduce motion, muted colors, literal language mode, session previews" },
  { value: "dyscalculia", label: "Dyscalculia", description: "Untimed quizzes, visual scaffolds for math" },
  { value: "dysgraphia", label: "Dysgraphia", description: "Voice input preferred, multiple-choice question rendering" },
  { value: "executive-dysfunction", label: "Executive Dysfunction", description: "Step-by-step breakdowns, session previews, reduced choices" },
  { value: "anxiety", label: "Anxiety", description: "Pause controls, calming overlays, reduced pressure" },
];

const PRESET_OVERRIDES: Partial<Record<DisabilityPreset, Partial<UserPreferences>>> = {
  dyslexia: {
    fontFamily: "dyslexia-friendly",
    letterSpacing: 0.12,
    wordSpacing: 0.16,
    lineSpacing: 1.8,
    backgroundTone: "off-white",
    readAloudEnabled: true,
  },
  adhd: {
    navigationDensity: "reduced",
  },
  autism: {
    reduceMotion: true,
    literalLanguageMode: true,
  },
  dyscalculia: {
    quizTimerEnabled: false,
    showVisualScaffolds: true,
  },
  dysgraphia: {
    voiceInputPreferred: true,
  },
  "executive-dysfunction": {
    navigationDensity: "reduced",
  },
  anxiety: {
    reduceMotion: true,
  },
};

export function getDisabilityPreview(selections: string[]): string[] {
  const changes: string[] = [];
  const seen = new Set<string>();

  for (const key of selections) {
    const preset = PRESET_OVERRIDES[key as DisabilityPreset];
    if (!preset) continue;

    if (preset.fontFamily === "dyslexia-friendly" && !seen.has("fontFamily")) {
      changes.push("Dyslexia-friendly font");
      seen.add("fontFamily");
    }
    if (preset.letterSpacing && preset.letterSpacing > 0 && !seen.has("letterSpacing")) {
      changes.push("Wider letter spacing");
      seen.add("letterSpacing");
    }
    if (preset.wordSpacing && preset.wordSpacing > 0 && !seen.has("wordSpacing")) {
      changes.push("Wider word spacing");
      seen.add("wordSpacing");
    }
    if (preset.lineSpacing && preset.lineSpacing > 1.6 && !seen.has("lineSpacing")) {
      changes.push("Increased line spacing");
      seen.add("lineSpacing");
    }
    if (preset.backgroundTone === "off-white" && !seen.has("backgroundTone")) {
      changes.push("Off-white background");
      seen.add("backgroundTone");
    }
    if (preset.readAloudEnabled && !seen.has("readAloudEnabled")) {
      changes.push("Read-aloud enabled");
      seen.add("readAloudEnabled");
    }
    if (preset.navigationDensity === "reduced" && !seen.has("navigationDensity")) {
      changes.push("Simplified navigation");
      seen.add("navigationDensity");
    }
    if (preset.reduceMotion && !seen.has("reduceMotion")) {
      changes.push("Reduced animations");
      seen.add("reduceMotion");
    }
    if (preset.literalLanguageMode && !seen.has("literalLanguageMode")) {
      changes.push("Literal language mode");
      seen.add("literalLanguageMode");
    }
    if (preset.quizTimerEnabled === false && !seen.has("quizTimerEnabled")) {
      changes.push("Untimed quizzes");
      seen.add("quizTimerEnabled");
    }
    if (preset.showVisualScaffolds && !seen.has("showVisualScaffolds")) {
      changes.push("Visual scaffolds for math");
      seen.add("showVisualScaffolds");
    }
    if (preset.voiceInputPreferred && !seen.has("voiceInputPreferred")) {
      changes.push("Voice input preferred");
      seen.add("voiceInputPreferred");
    }
  }

  return changes;
}

export function applyDisabilityPresets(selections: string[]): Partial<UserPreferences> {
  const merged: Partial<UserPreferences> = {};

  for (const key of selections) {
    const preset = PRESET_OVERRIDES[key as DisabilityPreset];
    if (!preset) continue;
    Object.assign(merged, preset);
  }

  return merged;
}
