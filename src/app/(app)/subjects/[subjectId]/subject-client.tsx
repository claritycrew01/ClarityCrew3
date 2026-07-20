"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { getSubjectById, getSubjectSkillStatus } from "@/data";

const STATUS_STYLES: Record<string, string> = {
  mastered: "border-success-green/40 bg-success-green/5 text-success-green",
  "in-progress": "border-skill-blue/40 bg-skill-blue/5 text-skill-blue",
  "not-started": "border-border bg-muted/50 text-muted-foreground",
};

const STATUS_LABELS: Record<string, string> = {
  mastered: "Mastered",
  "in-progress": "In Progress",
  "not-started": "Not Started",
};

export function SubjectClient({ subjectId }: { subjectId: string }) {
  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div className="animate-fade-in">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">Subject Not Found</h1>
        <Link href="/home/" className="mt-4 inline-flex text-sm text-skill-blue hover:underline">Back to Dashboard</Link>
      </div>
    );
  }

  const skills = getSubjectSkillStatus(subjectId, []);

  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {subject.name}
      </h1>
      <p className="mt-1 text-muted-foreground">
        {subject.description}
      </p>

      <div className="mt-6 flex gap-4 border-b border-border">
        <button className="border-b-2 border-skill-blue pb-2 text-sm font-semibold text-skill-blue">
          Skills
        </button>
        <button className="border-b-2 border-transparent pb-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Videos
        </button>
      </div>

      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3.5">
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
      </div>
    </div>
  );
}
