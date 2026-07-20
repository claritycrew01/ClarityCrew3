"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SUBJECTS, getSubjectById } from "@/data";

export default function SkillsReviewPage() {
  return (
    <div className="animate-fade-in max-w-4xl">
      <Link
        href="/progress/"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Progress
      </Link>

      <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-foreground">
        Skills Review
      </h1>
      <p className="mb-6 text-muted-foreground">
        Review all available skills across your subjects.
      </p>

      {SUBJECTS.map((subject) => (
        <div key={subject.id} className="mb-8">
          <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
            {subject.name}
          </h2>
          <div className="space-y-2">
            {subject.chapters.map((chapter) =>
              chapter.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/subjects/${subject.id}/${lesson.id}/`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-skill-blue/30 hover:shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {chapter.title} · {lesson.duration} · {lesson.cognitiveLoad} load
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">→</span>
                </Link>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
