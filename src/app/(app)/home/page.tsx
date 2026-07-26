"use client";

import { BookOpen, Brain, Timer, BarChart3, Target, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { SUBJECTS, getAllLessons } from "@/data";
import { useProgressStore } from "@/lib/store/progress-store";
import { usePreferencesStore } from "@/lib/preferences";

const QUICK_ACTIONS = [
  {
    href: "/subjects/math/",
    label: "Mathematics",
    icon: BookOpen,
    color: "bg-skill-blue/10 text-skill-blue",
  },
  {
    href: "/focus/",
    label: "Focus Mode",
    icon: Timer,
    color: "bg-cta-orange/10 text-cta-orange",
  },
  {
    href: "/flashcards/",
    label: "Flashcards",
    icon: Brain,
    color: "bg-success-green/10 text-success-green",
  },
  {
    href: "/progress/",
    label: "Progress",
    icon: BarChart3,
    color: "bg-premium-amber/10 text-premium-amber",
  },
];

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function getDailyGoalHint(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Start your day with a quick review session";
  if (hour < 17) return "Afternoon is great for tackling challenging topics";
  return "Wind down with some flashcard review";
}

export default function DashboardPage() {
  const sessions = useProgressStore((s) => s.sessions);
  const totalLessonsCompleted = useProgressStore((s) => s.totalLessonsCompleted);
  const streak = useProgressStore((s) => s.streak);
  const navigationDensity = usePreferencesStore((s) => s.navigationDensity);

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const completionPct = totalLessons > 0 ? Math.round((totalLessonsCompleted / totalLessons) * 100) : 0;

  const recentSessionSubjects = new Set(
    sessions.slice(-10).map((s) => s.subject)
  );

  const incompleteLessons = allLessons.filter((lesson) => {
    return !sessions.some(
      (s) => s.subject === lesson.title && s.completed
    );
  });

  const suggestedLessons = incompleteLessons.slice(0, 3);

  const subjectProgress = SUBJECTS.map((subject) => {
    const subjectLessons = subject.chapters.flatMap((c) => c.lessons);
    const completedInSubject = subjectLessons.filter((lesson) =>
      sessions.some((s) => s.subject === lesson.title && s.completed)
    ).length;
    return {
      ...subject,
      completed: completedInSubject,
      total: subjectLessons.length,
      pct: subjectLessons.length > 0
        ? Math.round((completedInSubject / subjectLessons.length) * 100)
        : 0,
    };
  });

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {getGreeting()}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Pick up where you left off, or try something new.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-skill-blue/10 px-3 py-1 text-xs font-semibold text-skill-blue">
          Adaptive Learning
        </span>
        <span className="inline-flex items-center rounded-full bg-success-green/10 px-3 py-1 text-xs font-semibold text-success-green">
          Micro-modules
        </span>
        <span className="inline-flex items-center rounded-full bg-cta-orange/10 px-3 py-1 text-xs font-semibold text-cta-orange">
          Focus Timer
        </span>
      </div>

      {/* Daily Goals / Study Planner */}
      <div className="mb-8 rounded-xl border border-skill-blue/20 bg-skill-blue/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-skill-blue" />
          <h2 className="font-display text-sm font-semibold text-foreground">Today&apos;s Study Plan</h2>
        </div>
        <p className="mb-4 text-xs text-muted-foreground">{getDailyGoalHint()}</p>

        {suggestedLessons.length > 0 ? (
          <div className="space-y-2">
            {suggestedLessons.map((lesson, i) => (
              <Link
                key={lesson.id}
                href={`/subjects/${lesson.subjectId}/${lesson.id}/`}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5 transition-all hover:border-skill-blue/30 hover:shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-skill-blue/10 text-[10px] font-bold text-skill-blue">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-xs font-semibold text-foreground">{lesson.title}</p>
                  <p className="truncate text-[10px] text-muted-foreground">
                    {lesson.duration} · {lesson.cognitiveLoad} load
                  </p>
                </div>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground">
            All caught up! Try a quiz or flashcards to reinforce your knowledge.
          </p>
        )}

        {completionPct > 0 && (
          <div className="mt-4">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Overall Progress</span>
              <span className="text-[10px] font-semibold text-foreground">{completionPct}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-skill-blue transition-all duration-500"
                style={{ width: `${completionPct}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className={cn("grid gap-3", navigationDensity === "reduced" ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4")}>
        {QUICK_ACTIONS.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-0.5 hover:border-skill-blue/30 hover:shadow-md"
          >
            <div className={`rounded-xl p-3 ${action.color}`}>
              <action.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-semibold text-foreground">{action.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
          Continue Learning
        </h2>
        <div className="space-y-2">
          {subjectProgress.map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}/`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-skill-blue/30 hover:shadow-sm"
            >
              <div className={`rounded-xl p-3 ${
                subject.color === "skill-blue"
                  ? "bg-skill-blue/10"
                  : subject.color === "success-green"
                    ? "bg-success-green/10"
                    : "bg-premium-amber/10"
              }`}>
                <BookOpen className={`h-6 w-6 ${
                  subject.color === "skill-blue"
                    ? "text-skill-blue"
                    : subject.color === "success-green"
                      ? "text-success-green"
                      : "text-premium-amber"
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{subject.name}</p>
                <p className="text-xs text-muted-foreground">
                  {subject.completed}/{subject.total} lessons completed
                </p>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      subject.color === "skill-blue"
                        ? "bg-skill-blue"
                        : subject.color === "success-green"
                          ? "bg-success-green"
                          : "bg-premium-amber"
                    }`}
                    style={{ width: `${subject.pct}%` }}
                  />
                </div>
              </div>
              <span className={`rounded-full px-4 py-2 text-xs font-semibold text-white transition-colors ${
                subject.color === "skill-blue"
                  ? "bg-skill-blue hover:bg-skill-blue/90"
                  : subject.color === "success-green"
                    ? "bg-success-green hover:bg-success-green/90"
                    : "bg-premium-amber hover:bg-premium-amber/90"
              }`}>
                {subject.pct === 0 ? "Start" : "Continue"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
