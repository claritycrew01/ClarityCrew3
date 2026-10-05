"use client";

import { useState } from "react";
import { useUIStore } from "@/lib/store/ui-store";
import { useLearnerStore } from "@/lib/store/learner-store";
import { cn } from "@/lib/utils/cn";
import type { NeurodivergentTrait } from "@/lib/models";

const TRAITS: { value: NeurodivergentTrait; label: string; description: string }[] = [
  { value: "adhd", label: "ADHD", description: "Focus timers, micro-modules, reduced choices" },
  { value: "autism", label: "Autism", description: "Calm Reader mode, predictable navigation" },
  { value: "dyslexia", label: "Dyslexia", description: "OpenDyslexic font, spacing controls, TTS" },
  { value: "dyscalculia", label: "Dyscalculia", description: "Untimed quizzes, visual scaffolds" },
  { value: "dysgraphia", label: "Dysgraphia", description: "Voice input, tap-to-answer" },
  { value: "executive Dysfunction", label: "Executive Dysfunction", description: "Step-by-step breakdowns, session previews" },
  { value: "anxiety", label: "Anxiety", description: "Pause controls, calming overlays" },
];

function Toggle({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "toggle-switch relative h-6 w-11 rounded-full transition-colors",
        checked ? "bg-skill-blue-solid" : "bg-muted"
      )}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={cn(
          "toggle-knob absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
          checked ? "translate-x-5.5" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

function Slider({
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  displayValue: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-skill-blue-solid"
      />
      <span className="min-w-[3rem] text-right text-xs font-semibold text-foreground tabular-nums">
        {displayValue}
      </span>
    </div>
  );
}

export default function AccessibilitySettingsPage() {
  const profile = useLearnerStore((s) => s.profile);
  const updateTraits = useLearnerStore((s) => s.updateTraits);
  const [selected, setSelected] = useState<NeurodivergentTrait[]>(
    profile?.neurodivergentTraits ?? []
  );

  const toggle = (trait: NeurodivergentTrait) => {
    const next = selected.includes(trait)
      ? selected.filter((t) => t !== trait)
      : [...selected, trait];
    setSelected(next);
    updateTraits(next);
  };

  const dyslexiaFont = useUIStore((s) => s.dyslexiaFont);
  const setDyslexiaFont = useUIStore((s) => s.setDyslexiaFont);
  const calmReaderMode = useUIStore((s) => s.calmReaderMode);
  const setCalmReaderMode = useUIStore((s) => s.setCalmReaderMode);
  const highContrastMode = useUIStore((s) => s.highContrastMode);
  const setHighContrastMode = useUIStore((s) => s.setHighContrastMode);
  const readingRuler = useUIStore((s) => s.readingRuler);
  const setReadingRuler = useUIStore((s) => s.setReadingRuler);
  const letterSpacing = useUIStore((s) => s.letterSpacing);
  const setLetterSpacing = useUIStore((s) => s.setLetterSpacing);
  const lineHeight = useUIStore((s) => s.lineHeight);
  const setLineHeight = useUIStore((s) => s.setLineHeight);
  const ttsRate = useUIStore((s) => s.ttsRate);
  const setTtsRate = useUIStore((s) => s.setTtsRate);

  return (
    <div className="animate-fade-in max-w-2xl">
      <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Accessibility Settings
      </h1>
      <p className="mb-8 text-muted-foreground">
        Customize your learning experience to match your needs.
      </p>

      {/* Learning Profile Traits */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Learning Profile</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Select the areas where you benefit from adapted learning. This shapes how content, navigation, and the interface behave.
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {TRAITS.map((trait) => (
            <button
              key={trait.value}
              onClick={() => toggle(trait.value)}
              className={cn(
                "flex flex-col items-start rounded-xl border-[1.5px] p-4 text-left transition-all",
                selected.includes(trait.value)
                  ? "border-skill-blue-solid bg-skill-blue/5"
                  : "border-border bg-card hover:border-muted-foreground/30"
              )}
            >
              <span className="text-sm font-semibold text-foreground">{trait.label}</span>
              <span className="mt-0.5 text-xs text-muted-foreground">{trait.description}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Display Adjustments */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Display Adjustments</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Dyslexia-Friendly Font</p>
              <p className="text-xs text-muted-foreground">Switch to OpenDyslexic</p>
            </div>
            <Toggle checked={dyslexiaFont} onToggle={() => setDyslexiaFont(!dyslexiaFont)} />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">High Contrast Mode</p>
              <p className="text-xs text-muted-foreground">Enhanced visibility for low vision</p>
            </div>
            <Toggle checked={highContrastMode} onToggle={() => setHighContrastMode(!highContrastMode)} />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Calm Reader Mode</p>
              <p className="text-xs text-muted-foreground">Flat, muted colors with no animations</p>
            </div>
            <Toggle checked={calmReaderMode} onToggle={() => setCalmReaderMode(!calmReaderMode)} />
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Reading Ruler</p>
              <p className="text-xs text-muted-foreground">Horizontal bar follows your cursor</p>
            </div>
            <Toggle checked={readingRuler} onToggle={() => setReadingRuler(!readingRuler)} />
          </div>
        </div>
      </section>

      {/* Text Adjustments */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Text Adjustments</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card px-4 py-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Letter Spacing</p>
            </div>
            <Slider
              value={letterSpacing}
              onChange={setLetterSpacing}
              min={0}
              max={0.3}
              step={0.02}
              displayValue={`${letterSpacing.toFixed(2)}em`}
            />
          </div>

          <div className="rounded-xl border border-border bg-card px-4 py-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Line Height</p>
            </div>
            <Slider
              value={lineHeight}
              onChange={setLineHeight}
              min={1}
              max={3}
              step={0.1}
              displayValue={lineHeight.toFixed(1)}
            />
          </div>

          <div className="rounded-xl border border-border bg-card px-4 py-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Text-to-Speech Speed</p>
            </div>
            <Slider
              value={ttsRate}
              onChange={setTtsRate}
              min={0.5}
              max={2}
              step={0.1}
              displayValue={`${ttsRate.toFixed(1)}x`}
            />
          </div>
        </div>
      </section>

      {/* Preview */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-sm leading-relaxed text-foreground/90">
            This is how your lesson text will appear with current settings. The quick brown fox
            jumps over the lazy dog. Adjust spacing, contrast, and font above to find what works
            best for you.
          </p>
        </div>
      </section>
    </div>
  );
}
