import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Brain,
  Timer,
  Accessibility,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";
import { SUBJECTS, QUIZZES, FLASHCARD_DECKS, VIDEOS } from "@/data";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Adaptive AI Tutor",
    description:
      "An intelligent tutor that adapts to your learning style, pace, and neurodivergent needs. Get instant explanations, hints, and encouragement.",
    color: "bg-skill-blue/10 text-skill-blue-text",
  },
  {
    icon: Brain,
    title: "Interactive Learning",
    description:
      "Engage with quizzes, flashcards, and practice sessions designed to reinforce understanding through active recall and spaced repetition.",
    color: "bg-success-green/10 text-success-green-text",
  },
  {
    icon: Timer,
    title: "Focus Mode",
    description:
      "Built-in Pomodoro timer with session tracking to help you maintain deep focus and build consistent study habits.",
    color: "bg-cta-orange/10 text-cta-orange-text",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "Designed for neurodivergent learners with dyslexia fonts, calm reader mode, adjustable spacing, and cognitive load controls.",
    color: "bg-premium-amber/10 text-premium-amber-text",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description:
      "Your learning data stays on your device. No cloud sync, no tracking. Complete privacy for your study sessions.",
    color: "bg-skill-blue/10 text-skill-blue-text",
  },
  {
    icon: Zap,
    title: "Instant & Offline",
    description:
      "Everything loads instantly as a static app. Study anywhere, even without an internet connection.",
    color: "bg-success-green/10 text-success-green-text",
  },
];

const SUBJECT_COUNTS = SUBJECTS.map((subject) => ({
  id: subject.id,
  name: subject.name,
  color: subject.color,
  lessons: subject.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0),
}));

const TOTAL_LESSONS = SUBJECT_COUNTS.reduce((total, subject) => total + subject.lessons, 0);
const TOTAL_CHAPTERS = SUBJECTS.reduce((total, subject) => total + subject.chapters.length, 0);
const TOTAL_QUIZZES = QUIZZES.length;
const TOTAL_DECKS = FLASHCARD_DECKS.length;
const TOTAL_VIDEOS = VIDEOS.length;

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-skill-blue/20 bg-skill-blue/5 px-4 py-1.5 text-xs font-semibold text-skill-blue-text">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Built for how you learn
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Lessons, quizzes, flashcards, and focus tools{" "}
            <span className="text-foreground">
              in one place
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            ClarityCrew is an academic study platform built with neurodivergent accessibility at its core.
            Adaptive AI tutoring, interactive modules, and tools that meet you where you are.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/signup/"
              className="inline-flex items-center gap-2 rounded-md bg-cta-orange px-8 py-3.5 text-sm font-bold text-cta-orange-on-solid shadow-lg transition-colors hover:bg-cta-orange-hover"
            >
              Get Started Free
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/home/"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools for studying, focus, and accessibility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tutoring, practice, a focus timer, accessibility controls, privacy, and offline use.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-md border border-border bg-card p-6"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectsSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive curriculum
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {TOTAL_LESSONS} interactive lessons across {SUBJECTS.length} core subjects, with{" "}
            {TOTAL_CHAPTERS} chapters, {TOTAL_QUIZZES} quizzes, {TOTAL_DECKS} flashcard decks,
            and {TOTAL_VIDEOS} videos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {SUBJECT_COUNTS.map((subject) => (
            <div
              key={subject.name}
              className="rounded-md border border-border bg-card p-6"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-${subject.color}/10 p-3`}>
                <BookOpen className={`h-6 w-6 text-${subject.color}-text`} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {subject.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {subject.lessons} lessons with quizzes and flashcards
              </p>
              <Link
                href={`/subjects/${subject.id}/`}
                className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold text-${subject.color}-text transition-colors hover:underline`}
              >
                Start Learning
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessibilitySection() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Accessibility at the core
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every feature is designed to support neurodivergent learners from the start, not
              added later.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: "Dyslexia Support", desc: "OpenDyslexic font, adjustable spacing, text-to-speech" },
                { label: "ADHD Support", desc: "Micro-modules, focus timer, reduced choices" },
                { label: "Autism Support", desc: "Calm Reader mode, muted colors, predictable navigation" },
                { label: "Dyscalculia Support", desc: "Untimed quizzes, visual scaffolds" },
                { label: "Dysgraphia Support", desc: "Voice input, tap-to-answer" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-skill-blue-solid" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-8">
            <div className="space-y-4">
              <div className="rounded-xl border border-skill-blue/20 bg-skill-blue/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Dyslexia-Friendly Font</span>
                  <div className="h-5 w-9 rounded-full bg-skill-blue-solid" />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Calm Reader Mode</span>
                  <div className="h-5 w-9 rounded-full bg-skill-blue-solid" />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Increased Letter Spacing</span>
                  <div className="h-5 w-9 rounded-full bg-muted" />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Reading Ruler</span>
                  <div className="h-5 w-9 rounded-full bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-md bg-cta-orange p-12 text-center sm:p-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-cta-orange-on-solid sm:text-4xl">
            Get started with ClarityCrew
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cta-orange-on-solid">
            Sign up to use quizzes, flashcards, a focus timer, and text to speech.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/signup/"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-bold text-skill-blue shadow-lg transition-colors hover:bg-white/90"
            >
              Start Learning Free
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/home/"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-3.5 text-sm font-semibold text-cta-orange-on-solid transition-colors hover:bg-cta-orange-hover"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-blue-solid text-skill-blue-on-solid font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-lg font-bold text-foreground">ClarityCrew</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for neurodivergent learners. Privacy-first.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-blue-solid text-skill-blue-on-solid font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-lg font-bold text-foreground">ClarityCrew</span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <Link href="/home/" className="text-muted-foreground transition-colors hover:text-foreground">
              Platform
            </Link>
            <Link href="/login/" className="text-muted-foreground transition-colors hover:text-foreground">
              Log In
            </Link>
            <Link
              href="/signup/"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-cta-orange px-5 py-2 text-sm font-bold text-cta-orange-on-solid transition-colors hover:bg-cta-orange-hover"
            >
              Get Started
            </Link>
          </nav>
          <Link
            href="/signup/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-cta-orange px-5 py-2 text-sm font-bold text-cta-orange-on-solid transition-colors hover:bg-cta-orange-hover sm:hidden"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturesSection />
        <SubjectsSection />
        <AccessibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
