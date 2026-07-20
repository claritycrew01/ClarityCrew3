"use client";

import { BookOpen, Trophy, Clock, Flame, TrendingUp } from "lucide-react";
import { useProgressStore } from "@/lib/store/progress-store";
import { getAllLessons, SUBJECTS } from "@/data";

function formatSessionDate(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

export default function ProgressPage() {
  const sessions = useProgressStore((s) => s.sessions);
  const streak = useProgressStore((s) => s.streak);
  const totalLessonsCompleted = useProgressStore((s) => s.totalLessonsCompleted);

  const totalLessons = getAllLessons().length;
  const completionPct = totalLessons > 0 ? Math.round((totalLessonsCompleted / totalLessons) * 100) : 0;

  const totalSeconds = sessions.reduce((acc, s) => {
    if (s.endTime) return acc + Math.floor((s.endTime - s.startTime) / 1000);
    return acc;
  }, 0);
  const totalHours = (totalSeconds / 3600).toFixed(1);

  const focusSessions = sessions.filter((s) => s.subject === "Focus Session");
  const focusMinutes = focusSessions.reduce((acc, s) => {
    if (s.endTime) return acc + Math.floor((s.endTime - s.startTime) / 60000);
    return acc;
  }, 0);

  const subjectBreakdown = SUBJECTS.map((subject) => {
    const subjectSessions = sessions.filter((s) => s.subject === subject.name);
    const count = subjectSessions.length;
    const avgScore = count > 0
      ? Math.round(subjectSessions.reduce((a, s) => a + s.comprehensionScore, 0) / count * 100)
      : 0;
    return { name: subject.name, count, avgScore, color: subject.color };
  });

  const stats = [
    { label: "Lessons Completed", value: totalLessonsCompleted.toString(), icon: BookOpen, color: "text-skill-blue" },
    { label: "Completion", value: `${completionPct}%`, icon: Trophy, color: "text-success-green" },
    { label: "Focus Time", value: `${focusMinutes}m`, icon: Clock, color: "text-cta-orange" },
    { label: "Day Streak", value: streak.toString(), icon: Flame, color: "text-premium-amber" },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Progress
      </h1>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
            <stat.icon className={`mb-2 h-5 w-5 ${stat.color}`} />
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {subjectBreakdown.some((s) => s.count > 0) && (
        <>
          <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
            Subject Breakdown
          </h2>
          <div className="mb-8 space-y-2">
            {subjectBreakdown.map((subject) => (
              <div key={subject.name} className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{subject.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {subject.count} session{subject.count !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{subject.avgScore}%</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="mb-3 font-display text-lg font-semibold text-foreground">
        Recent Sessions
      </h2>
      {sessions.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No sessions yet. Complete a lesson, quiz, or focus session to see your activity here.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {[...sessions].reverse().slice(0, 10).map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{session.subject}</p>
                <p className="text-xs text-muted-foreground">{formatSessionDate(session.startTime)}</p>
              </div>
              <div className="flex items-center gap-3">
                {session.comprehensionScore > 0 && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      session.comprehensionScore >= 90
                        ? "bg-success-green/10 text-success-green"
                        : session.comprehensionScore >= 70
                          ? "bg-skill-blue/10 text-skill-blue"
                          : "bg-cta-orange/10 text-cta-orange"
                    }`}
                  >
                    {Math.round(session.comprehensionScore * 100)}%
                  </span>
                )}
                {session.completed && (
                  <span className="rounded-full bg-success-green/10 px-2.5 py-0.5 text-[10px] font-semibold text-success-green">
                    Done
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
