"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { getSubjectById, getSubjectSkillStatus, getVideosBySubjectId } from "@/data";
import { VideoPlayer } from "@/components/video/video-player";

const STATUS_STYLES: Record<string, string> = {
  mastered: "border-success-green/40 bg-success-green/5 text-success-green-text",
  "in-progress": "border-skill-blue/40 bg-skill-blue/5 text-skill-blue-text",
  "not-started": "border-border bg-muted/50 text-muted-foreground",
};

const STATUS_LABELS: Record<string, string> = {
  mastered: "Mastered",
  "in-progress": "In Progress",
  "not-started": "Not Started",
};

type Tab = "skills" | "videos";

export function SubjectClient({ subjectId }: { subjectId: string }) {
  const [tab, setTab] = useState<Tab>("skills");
  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div className="animate-fade-in">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">Subject Not Found</h1>
        <Link href="/home/" className="mt-4 inline-flex text-sm text-skill-blue-text hover:underline">Back to Dashboard</Link>
      </div>
    );
  }

  const skills = getSubjectSkillStatus(subjectId, []);
  const videos = getVideosBySubjectId(subjectId);

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {subject.name}
      </h1>
      <p className="mt-1 text-muted-foreground">
        {subject.description}
      </p>

      {/* Tabs */}
      <div className="mt-6 flex gap-4 border-b border-border">
        <button
          onClick={() => setTab("skills")}
          aria-pressed={tab === "skills"}
          className={cn(
            "border-b-2 pb-2 text-sm font-semibold transition-colors",
            tab === "skills"
              ? "border-skill-blue-solid text-skill-blue-text"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Skills
        </button>
        <button
          onClick={() => setTab("videos")}
          aria-pressed={tab === "videos"}
          className={cn(
            "border-b-2 pb-2 text-sm font-semibold transition-colors",
            tab === "videos"
              ? "border-skill-blue-solid text-skill-blue-text"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Videos
        </button>
      </div>

      {/* Tab content */}
      {tab === "skills" ? (
        <section
          aria-label="Skills"
          className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3.5"
        >
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={`/subjects/${subjectId}/${skill.id}/`}
              className={cn(
                "group relative flex min-h-[88px] flex-col items-center justify-between rounded-xl border-[1.5px] px-3 py-4 text-center transition-all",
                "hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
                STATUS_STYLES[skill.status]
              )}
            >
              <span className="text-[13px] font-semibold text-foreground">
                {skill.name}
              </span>
              <span className="mt-2 text-[10px] font-semibold uppercase tracking-wide">
                {STATUS_LABELS[skill.status]}
              </span>
            </Link>
          ))}
        </section>
      ) : (
        <section aria-label="Videos" className="mt-6 space-y-4">
          {videos.length === 0 ? (
            <p className="text-sm text-muted-foreground">No videos available for this subject yet.</p>
          ) : (
            videos.map((video) => (
              <VideoPlayer
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
                channel={video.channel}
              />
            ))
          )}
        </section>
      )}
    </div>
  );
}
