"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, ArrowRight, ArrowLeft, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { usePreferencesStore } from "@/lib/preferences";
import { DISABILITY_OPTIONS, getDisabilityPreview, applyDisabilityPresets } from "@/lib/preferences";
import type { DisabilityPreset } from "@/lib/preferences";

type Step = "welcome" | "select" | "preview";

export default function OnboardingPage() {
  const router = useRouter();
  const setPreferences = usePreferencesStore((s) => s.setPreferences);
  const hasCompletedOnboarding = usePreferencesStore((s) => s.hasCompletedOnboarding);
  const hydrated = usePreferencesStore((s) => s.hasHydrated);
  const [step, setStep] = useState<Step>("welcome");
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (hydrated && hasCompletedOnboarding) {
      router.replace("/home/");
    }
  }, [hydrated, hasCompletedOnboarding, router]);

  if (!hydrated || hasCompletedOnboarding) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-skill-blue/30 border-t-skill-blue-solid"
          role="status"
        >
          <span className="sr-only">Loading</span>
        </div>
      </div>
    );
  }

  const toggle = (value: DisabilityPreset) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const previewChanges = getDisabilityPreview(selected);
  const presets = applyDisabilityPresets(selected);

  function handleConfirm() {
    setPreferences({
      ...presets,
      hasCompletedOnboarding: true,
      onboardingSelections: selected,
    });
    router.push("/home/");
  }

  function handleSkip() {
    setPreferences({
      hasCompletedOnboarding: true,
      onboardingSelections: [],
    });
    router.push("/home/");
  }

  return (
        <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-lg">
        {/* Step indicator */}
        <div className="mb-8 flex items-center justify-center gap-2" role="progressbar" aria-valuenow={["welcome", "select", "preview"].indexOf(step) + 1} aria-valuemin={1} aria-valuemax={3} aria-label="Onboarding progress">
          {(["welcome", "select", "preview"] as Step[]).map((s, i) => (
            <div
              key={s}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i <= (["welcome", "select", "preview"].indexOf(step))
                  ? "w-8 bg-skill-blue-solid"
                  : "w-4 bg-muted"
              )}
            />
          ))}
        </div>

        {/* Welcome step */}
        {step === "welcome" && (
          <div className="animate-fade-in text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-skill-blue/10" aria-hidden="true">
              <Sparkles className="h-8 w-8 text-skill-blue-text" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Welcome to ClarityCrew
            </h1>
            <p className="mt-3 text-muted-foreground">
              Would you like us to personalize the app for you? We can adjust fonts, spacing, navigation,
              and more based on how you learn best.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              This is completely optional. You can always change everything later in Settings.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => setStep("select")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-skill-blue-solid px-6 py-3 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
                aria-label="Start personalization"
              >
                Let&apos;s personalize
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={handleSkip}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg px-3 py-1"
                aria-label="Skip personalization and use default settings"
              >
                Skip for now
              </button>
            </div>
          </div>
        )}

        {/* Selection step */}
        {step === "select" && (
          <div className="animate-fade-in">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What works best for you?
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Select any that apply, or skip to use default settings.
            </p>

            <fieldset className="mt-6 grid grid-cols-1 gap-2">
              <legend className="sr-only">Select any learning preferences that apply to you</legend>
              {DISABILITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => toggle(opt.value)}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border-[1.5px] p-4 text-left transition-all",
                    selected.includes(opt.value)
                      ? "border-skill-blue-solid bg-skill-blue/5"
                      : "border-border bg-card hover:border-muted-foreground/30"
                  )}
                  aria-pressed={selected.includes(opt.value)}
                  aria-label={`${opt.label}: ${opt.description}`}
                >
                  <div
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      selected.includes(opt.value)
                        ? "border-skill-blue-solid bg-skill-blue-solid text-skill-blue-on-solid"
                        : "border-muted-foreground/30 bg-background"
                    )}
                    aria-hidden="true"
                  >
                    {selected.includes(opt.value) && <Check className="h-3 w-3" />}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">{opt.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{opt.description}</span>
                  </div>
                </button>
              ))}
            </fieldset>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setStep("welcome")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                aria-label="Go back to welcome step"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                onClick={() => setStep("preview")}
                className="inline-flex items-center gap-2 rounded-full bg-skill-blue-solid px-6 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
                aria-label={selected.length > 0 ? "Preview changes before applying" : "Continue with default settings"}
              >
                {selected.length > 0 ? "Preview changes" : "Use defaults"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={handleSkip}
                className="ml-auto text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg px-3 py-1"
                aria-label="Skip and use default settings"
              >
                Skip
              </button>
            </div>
          </div>
        )}

        {/* Preview step */}
        {step === "preview" && (
          <div className="animate-fade-in">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Here&apos;s what we&apos;ll set up
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {selected.length > 0
                ? "Based on your selections, we'll adjust the following:"
                : "We'll use the default settings. You can change any of this anytime in Settings."}
            </p>

            {selected.length > 0 && (
              <div className="mt-6 rounded-xl border border-border bg-card p-4" role="list" aria-label="Settings that will be applied">
                <ul className="space-y-2">
                  {previewChanges.map((change) => (
                    <li key={change} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-success-green-text" aria-hidden="true" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-4 text-sm text-muted-foreground">
              You can change any of these individually in Settings at any time.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => setStep("select")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                aria-label="Go back to selection step"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="inline-flex items-center gap-2 rounded-full bg-skill-blue-solid px-6 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
                aria-label={selected.length > 0 ? "Apply selected settings and continue to dashboard" : "Continue to dashboard with default settings"}
              >
                <Settings className="h-4 w-4" />
                {selected.length > 0 ? "Apply & continue" : "Continue"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
