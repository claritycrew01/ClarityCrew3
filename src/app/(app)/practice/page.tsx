import Link from "next/link";
import { BookOpen, Brain, Timer, Target } from "lucide-react";
import { SUBJECTS } from "@/data";

const ACTIVITIES = [
  {
    href: "/quiz/",
    label: "Take a Quiz",
    description: "Test your knowledge across all subjects with instant feedback.",
    icon: Target,
    color: "bg-cta-orange/10 text-cta-orange-text",
  },
  {
    href: "/flashcards/",
    label: "Study Flashcards",
    description: "Review key concepts with spaced repetition across all topics.",
    icon: Brain,
    color: "bg-success-green/10 text-success-green-text",
  },
  {
    href: "/focus/",
    label: "Focus Session",
    description: "Start a timed Pomodoro session with distraction-free studying.",
    icon: Timer,
    color: "bg-skill-blue/10 text-skill-blue-text",
  },
];

export default function PracticePage() {
  return (
    <div className="animate-fade-in max-w-4xl">
      <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Practice
      </h1>
      <p className="mb-8 text-muted-foreground">
        Choose how you want to practice today.
      </p>

      <div className="mb-10 grid gap-3 sm:grid-cols-3">
        {ACTIVITIES.map((activity) => (
          <Link
            key={activity.href}
            href={activity.href}
            className="group flex flex-col items-start rounded-xl border border-border bg-card p-5 transition-colors hover:border-skill-blue/30"
          >
            <div className={`mb-3 rounded-xl p-3 ${activity.color}`}>
              <activity.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold text-foreground">{activity.label}</span>
            <span className="mt-1 text-xs text-muted-foreground">{activity.description}</span>
          </Link>
        ))}
      </div>

      <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
        Browse by Subject
      </h2>
      <div className="space-y-2">
        {SUBJECTS.map((subject) => {
          const totalLessons = subject.chapters.reduce((a, c) => a + c.lessons.length, 0);
          return (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}/`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-skill-blue/30"
            >
              <div className={`rounded-lg bg-${subject.color}/10 p-2.5`}>
                <BookOpen className={`h-5 w-5 text-${subject.color}-text`} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{subject.name}</p>
                <p className="text-xs text-muted-foreground">{totalLessons} lessons</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
