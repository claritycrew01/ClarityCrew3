"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Volume2, VolumeX, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { getLessonById, getVideoByLessonId } from "@/data";
import { useTTS } from "@/hooks/use-tts";
import { VideoPlayer } from "@/components/video/video-player";

export function LessonClient({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const lesson = getLessonById(lessonId);
  const video = getVideoByLessonId(lessonId);
  const [showSimplified, setShowSimplified] = useState(false);
  const { toggle, speaking, supported } = useTTS();

  if (!lesson) {
    return (
      <div className="animate-fade-in max-w-3xl mx-auto">
        <Link href={`/subjects/${subjectId}/`} className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <h1 className="font-display text-2xl font-bold text-foreground">Lesson Not Found</h1>
        <p className="mt-2 text-muted-foreground">This lesson content is not yet available.</p>
      </div>
    );
  }

  const activeText = showSimplified ? lesson.simplifiedBody : lesson.body;
  const paragraphs = activeText.split("\n\n");

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <Link
        href={`/subjects/${subjectId}/`}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {lesson.title}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="rounded-full bg-skill-blue/10 px-2.5 py-0.5 text-xs font-semibold text-skill-blue">
              {lesson.duration}
            </span>
            <span className="rounded-full bg-premium-amber/10 px-2.5 py-0.5 text-xs font-semibold text-premium-amber capitalize">
              {lesson.cognitiveLoad} Load
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {supported && (
            <button
              onClick={() => toggle(activeText)}
              className={cn(
                "rounded-lg border border-border p-2 transition-colors",
                speaking
                  ? "bg-skill-blue/10 text-skill-blue border-skill-blue/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              aria-label={speaking ? "Stop reading" : "Read lesson aloud"}
            >
              {speaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Video — only if a video is linked to this lesson */}
      {video && (
        <div className="mb-8">
          <VideoPlayer
            youtubeId={video.youtubeId}
            title={video.title}
            channel={video.channel}
          />
        </div>
      )}

      {/* View Toggle */}
      <div className="mb-6 flex items-center gap-2 rounded-xl border border-border bg-muted/50 p-1">
        <button
          onClick={() => setShowSimplified(false)}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors",
            !showSimplified
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <BookOpen className="h-3.5 w-3.5" />
          Full Lesson
        </button>
        <button
          onClick={() => setShowSimplified(true)}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-colors",
            showSimplified
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <FileText className="h-3.5 w-3.5" />
          Simplified
        </button>
      </div>

      <article className="prose prose-sm max-w-none text-foreground tab-content-enter">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-4 text-sm leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </article>

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <Link
          href={`/subjects/${subjectId}/`}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <Link
          href={`/quiz/`}
          className="inline-flex items-center gap-2 rounded-full bg-skill-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-skill-blue/90"
        >
          Take Quiz
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
