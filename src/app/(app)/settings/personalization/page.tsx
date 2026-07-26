"use client";

import { usePreferencesStore } from "@/lib/preferences";
import { DISABILITY_OPTIONS, getDisabilityPreview, applyDisabilityPresets } from "@/lib/preferences";
import type { DisabilityPreset, ThemePreference, FontFamilyPreference, BackgroundTone } from "@/lib/preferences";
import { cn } from "@/lib/utils/cn";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";

function Toggle({
  checked,
  onToggle,
  label,
  description,
}: {
  checked: boolean;
  onToggle: () => void;
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={cn(
          "toggle-switch relative h-6 w-11 rounded-full transition-colors",
          checked ? "bg-skill-blue" : "bg-muted"
        )}
        role="switch"
        aria-checked={checked}
        aria-label={label}
      >
        <span
          className={cn(
            "toggle-knob absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
            checked ? "translate-x-5.5" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}

function Slider({
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
  label,
  description,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <span className="text-xs font-semibold text-skill-blue tabular-nums">{displayValue}</span>
      </div>
      <p className="mb-2 text-xs text-muted-foreground">{description}</p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted accent-skill-blue"
        aria-label={label}
      />
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  label,
  description,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  label: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label={label}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

export default function PersonalizationPage() {
  const prefs = usePreferencesStore();
  const setPreference = usePreferencesStore((s) => s.setPreference);
  const setPreferences = usePreferencesStore((s) => s.setPreferences);
  const resetToDefaults = usePreferencesStore((s) => s.resetToDefaults);
  const [showPresetPicker, setShowPresetPicker] = useState(false);
  const [presetSelections, setPresetSelections] = useState<string[]>(prefs.onboardingSelections);

  const previewChanges = getDisabilityPreview(presetSelections);

  function togglePreset(value: string) {
    setPresetSelections((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function applyPresets() {
    const presets = applyDisabilityPresets(presetSelections);
    setPreferences({ ...presets, onboardingSelections: presetSelections });
    setShowPresetPicker(false);
  }

  return (
    <div className="animate-fade-in max-w-2xl">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Personalization
          </h1>
          <p className="mt-1 text-muted-foreground">
            Every setting here can be adjusted at any time.
          </p>
        </div>
        <button
          onClick={() => setShowPresetPicker(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <Sparkles className="h-4 w-4" />
          Disability presets
        </button>
      </div>

      {/* Preset picker modal */}
      {showPresetPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="w-full max-w-lg rounded-2xl bg-background p-6 shadow-xl animate-fade-in">
            <h2 className="font-display text-xl font-bold text-foreground">
              Choose disability presets
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Select any that apply. Your individual settings below will be updated.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2">
              {DISABILITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => togglePreset(opt.value)}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border-[1.5px] p-3 text-left transition-all",
                    presetSelections.includes(opt.value)
                      ? "border-skill-blue bg-skill-blue/5"
                      : "border-border bg-card hover:border-muted-foreground/30"
                  )}
                  aria-pressed={presetSelections.includes(opt.value)}
                >
                  <div
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      presetSelections.includes(opt.value)
                        ? "border-skill-blue bg-skill-blue text-white"
                        : "border-muted-foreground/30 bg-background"
                    )}
                  >
                    {presetSelections.includes(opt.value) && <Check className="h-3 w-3" />}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">{opt.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{opt.description}</span>
                  </div>
                </button>
              ))}
            </div>

            {previewChanges.length > 0 && (
              <div className="mt-4 rounded-xl border border-border bg-muted/50 p-3">
                <p className="text-xs font-semibold text-foreground mb-1">Changes that will be applied:</p>
                <ul className="space-y-1">
                  {previewChanges.map((c) => (
                    <li key={c} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-success-green" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setShowPresetPicker(false)}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button
                onClick={applyPresets}
                className="rounded-full bg-skill-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-skill-blue/90"
              >
                Apply presets
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appearance */}
      <Section title="Appearance">
        <Select
          value={prefs.theme}
          onChange={(v) => setPreference("theme", v as ThemePreference)}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "System" },
          ]}
          label="Theme"
          description="Choose light, dark, or follow your device setting."
        />
        <Select
          value={prefs.fontFamily}
          onChange={(v) => setPreference("fontFamily", v as FontFamilyPreference)}
          options={[
            { value: "default", label: "Inter (Default)" },
            { value: "dyslexia-friendly", label: "OpenDyslexic" },
            { value: "high-legibility", label: "Atkinson Hyperlegible" },
          ]}
          label="Font Family"
          description="OpenDyslexic is designed for readers with dyslexia. Atkinson Hyperlegible maximizes letter distinction."
        />
        <Slider
          value={prefs.textSize}
          onChange={(v) => setPreference("textSize", v)}
          min={12}
          max={24}
          step={1}
          displayValue={`${prefs.textSize}px`}
          label="Text Size"
          description="Adjust the base font size for all lesson content."
        />
        <Slider
          value={prefs.lineSpacing}
          onChange={(v) => setPreference("lineSpacing", v)}
          min={1}
          max={3}
          step={0.1}
          displayValue={prefs.lineSpacing.toFixed(1)}
          label="Line Spacing"
          description="Space between lines of text. Wider spacing can improve readability."
        />
        <Slider
          value={prefs.letterSpacing}
          onChange={(v) => setPreference("letterSpacing", v)}
          min={0}
          max={0.3}
          step={0.02}
          displayValue={`${prefs.letterSpacing.toFixed(2)}em`}
          label="Letter Spacing"
          description="Extra space between letters. Helpful for dyslexia."
        />
        <Slider
          value={prefs.wordSpacing}
          onChange={(v) => setPreference("wordSpacing", v)}
          min={0}
          max={0.3}
          step={0.02}
          displayValue={`${prefs.wordSpacing.toFixed(2)}em`}
          label="Word Spacing"
          description="Extra space between words. Can improve readability for some readers."
        />
        <Select
          value={prefs.backgroundTone}
          onChange={(v) => setPreference("backgroundTone", v as BackgroundTone)}
          options={[
            { value: "white", label: "White" },
            { value: "off-white", label: "Off-white (cream)" },
          ]}
          label="Background Tone"
          description="Off-white reduces glare and can be easier on the eyes during long reading sessions."
        />
      </Section>

      {/* Reading & Content */}
      <Section title="Reading & Content">
        <Toggle
          checked={prefs.readAloudEnabled}
          onToggle={() => setPreference("readAloudEnabled", !prefs.readAloudEnabled)}
          label="Read Aloud by Default"
          description="Automatically offer text-to-speech on lessons and quizzes."
        />
        <Toggle
          checked={prefs.literalLanguageMode}
          onToggle={() => setPreference("literalLanguageMode", !prefs.literalLanguageMode)}
          label="Literal Language Mode"
          description="Uses straightforward, literal phrasing. Avoids idioms and metaphors in lesson text."
        />
        <Toggle
          checked={prefs.showVisualScaffolds}
          onToggle={() => setPreference("showVisualScaffolds", !prefs.showVisualScaffolds)}
          label="Visual Scaffolds"
          description="Shows diagrams, number lines, and visual aids in math lessons."
        />
      </Section>

      {/* Navigation & Focus */}
      <Section title="Navigation & Focus">
        <Select
          value={prefs.navigationDensity}
          onChange={(v) => setPreference("navigationDensity", v as "reduced" | "full")}
          options={[
            { value: "full", label: "Full" },
            { value: "reduced", label: "Reduced" },
          ]}
          label="Navigation Density"
          description="Reduced shows fewer choices at once, making it easier to focus on one thing."
        />
        <Toggle
          checked={prefs.reduceMotion}
          onToggle={() => setPreference("reduceMotion", !prefs.reduceMotion)}
          label="Reduce Motion"
          description="Reduces animations and transitions throughout the app."
        />
      </Section>

      {/* Input */}
      <Section title="Input">
        <Toggle
          checked={prefs.voiceInputPreferred}
          onToggle={() => setPreference("voiceInputPreferred", !prefs.voiceInputPreferred)}
          label="Voice Input Preferred"
          description="Show voice input options where available instead of text input."
        />
        <Toggle
          checked={prefs.quizTimerEnabled}
          onToggle={() => setPreference("quizTimerEnabled", !prefs.quizTimerEnabled)}
          label="Quiz Timer"
          description="Show a countdown timer during quizzes. Disable for untimed practice."
        />
      </Section>

      {/* Reset */}
      <div className="mt-8 border-t border-border pt-6">
        <button
          onClick={() => {
            resetToDefaults();
            setPresetSelections([]);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-destructive/30 px-5 py-2.5 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/5"
        >
          <RotateCcw className="h-4 w-4" />
          Reset all to defaults
        </button>
      </div>

      {/* Preview */}
      <section className="mt-8 mb-8">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-5">
          <p
            className="text-foreground/90"
            style={{
              fontSize: `${prefs.textSize}px`,
              lineHeight: prefs.lineSpacing,
              letterSpacing: `${prefs.letterSpacing}em`,
              wordSpacing: `${prefs.wordSpacing}em`,
            }}
          >
            This is how your lesson text will appear with current settings. The quick brown fox
            jumps over the lazy dog. Adjust spacing, font, and size above to find what works
            best for you.
          </p>
        </div>
      </section>
    </div>
  );
}
