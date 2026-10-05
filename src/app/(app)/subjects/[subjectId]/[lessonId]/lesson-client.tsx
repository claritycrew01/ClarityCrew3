"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Volume2, VolumeX, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { getLessonById, getVideoByLessonId } from "@/data";
import { reportLiteralCoverage } from "@/data/lesson-content-report";
import { useTTS } from "@/hooks/use-tts";
import { useReadAloud } from "@/hooks/use-read-aloud";
import { usePreferencesApplied } from "@/hooks/use-preferences-applied";
import { VideoPlayer } from "@/components/video/video-player";

if (process.env.NODE_ENV !== "production") {
  reportLiteralCoverage();
}

export function LessonClient({ subjectId, lessonId }: { subjectId: string; lessonId: string }) {
  const lesson = getLessonById(lessonId);
  const video = getVideoByLessonId(lessonId);
  const [showSimplified, setShowSimplified] = useState(false);
  const { toggle, speaking, supported } = useTTS();
  const { hydrated, prefs } = usePreferencesApplied();
  const aloud = useReadAloud(lesson?.body ?? "");

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

  let activeText = showSimplified ? lesson.simplifiedBody : lesson.body;
  if (!showSimplified && hydrated && prefs.literalLanguageMode && lesson.literalBody) {
    activeText = lesson.literalBody;
  }
  const paragraphs = activeText.split("\n\n");
  const showScaffold = hydrated && prefs.showVisualScaffolds && !!lesson.scaffold;
  const articleStyle = hydrated
    ? {
        letterSpacing: `${prefs.letterSpacing}em`,
        wordSpacing: `${prefs.wordSpacing}em`,
        lineHeight: prefs.lineSpacing,
      }
    : undefined;

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
            <span className="rounded-full bg-skill-blue/10 px-2.5 py-0.5 text-xs font-semibold text-skill-blue-text">
              {lesson.duration}
            </span>
            <span className="rounded-full bg-premium-amber/10 px-2.5 py-0.5 text-xs font-semibold text-premium-amber-text capitalize">
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
                  ? "bg-skill-blue/10 text-skill-blue-text border-skill-blue/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              aria-label={speaking ? "Stop reading" : "Read lesson aloud"}
            >
              {speaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {aloud.visible && (
        <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3">
          <div role="status" className="sr-only">
            {aloud.blocked
              ? "Lesson audio was blocked by the browser. Use the Play lesson audio button to start playback."
              : ""}
          </div>
          {aloud.blocked && (
            <button
              type="button"
              onClick={aloud.play}
              className="rounded-lg bg-skill-blue-solid px-3 py-1.5 text-xs font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
            >
              Play lesson audio
            </button>
          )}
          <button
            type="button"
            onClick={aloud.paused ? aloud.resume : aloud.pause}
            aria-pressed={aloud.paused}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {aloud.paused ? "Resume" : "Pause"}
          </button>
          <button
            type="button"
            onClick={aloud.stop}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Stop
          </button>
          <label htmlFor="lesson-read-rate" className="text-xs font-semibold text-foreground">
            Rate
          </label>
          <input
            id="lesson-read-rate"
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={aloud.rate}
            onChange={(e) => aloud.setRate(Number(e.target.value))}
            className="w-28"
          />
          <span className="text-xs tabular-nums text-muted-foreground">
            {aloud.rate.toFixed(1)}x
          </span>
        </div>
      )}

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

      <article
        className="prose prose-sm max-w-none text-foreground tab-content-enter"
        style={articleStyle}
      >
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="mb-4 text-sm leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </article>

      {showScaffold && lesson.scaffold && (
        <section aria-label="Visual scaffolds" className="mt-8 rounded-md border border-border bg-card p-5">
          {lesson.scaffold.steps && lesson.scaffold.steps.length > 0 && (
            <div className="mb-4">
              <h2 className="font-display text-sm font-semibold text-foreground">Steps</h2>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-foreground/90">
                {lesson.scaffold.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          {lesson.scaffold.keyTerms && lesson.scaffold.keyTerms.length > 0 && (
            <div>
              <h2 className="font-display text-sm font-semibold text-foreground">Key terms</h2>
              <dl className="mt-2 space-y-2 text-sm">
                {lesson.scaffold.keyTerms.map((keyTerm) => (
                  <div key={keyTerm.term}>
                    <dt className="font-semibold text-foreground">{keyTerm.term}</dt>
                    <dd className="text-foreground/90">{keyTerm.meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </section>
      )}

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
          className="inline-flex items-center gap-2 rounded-full bg-skill-blue-solid px-5 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
        >
          Take Quiz
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
