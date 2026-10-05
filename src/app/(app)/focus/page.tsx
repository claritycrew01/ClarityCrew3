"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { formatTimerDisplay } from "@/lib/utils/time";
import { useProgressStore } from "@/lib/store/progress-store";

const DURATIONS = [
  { label: "15m", seconds: 900 },
  { label: "25m", seconds: 1500 },
  { label: "45m", seconds: 2700 },
  { label: "60m", seconds: 3600 },
];

export default function FocusPage() {
  const [duration, setDuration] = useState(1500);
  const [remaining, setRemaining] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [totalFocusSeconds, setTotalFocusSeconds] = useState(0);
  const [timerAnnouncement, setTimerAnnouncement] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startRef = useRef<number | null>(null);
  const prevMinutesRef = useRef(Math.ceil(1500 / 60));
  const prevSessionsRef = useRef(0);
  const addSession = useProgressStore((s) => s.addSession);
  const incrementStreak = useProgressStore((s) => s.incrementStreak);

  const progress = 1 - remaining / duration;

  const stopTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  }, []);

  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      if (remaining === duration) {
        startRef.current = Date.now();
      }
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setRemaining(duration);
    startRef.current = null;
  };

  const completeSession = useCallback(() => {
    stopTimer();
    setSessionsCompleted((s) => s + 1);
    setTotalFocusSeconds((s) => s + duration);
    incrementStreak();
    addSession({
      id: `focus-${Date.now()}`,
      learnerId: "current",
      subject: "Focus Session",
      startTime: startRef.current ?? Date.now() - duration * 1000,
      endTime: Date.now(),
      interactions: [],
      engagementScore: 1,
      comprehensionScore: 0,
      completed: true,
    });
    startRef.current = null;
    setRemaining(duration);
  }, [stopTimer, duration, addSession, incrementStreak]);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            completeSession();
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remaining, completeSession]);

  useEffect(() => {
    const minutes = Math.ceil(remaining / 60);
    if (minutes !== prevMinutesRef.current) {
      prevMinutesRef.current = minutes;
      setTimerAnnouncement(
        `${minutes} minute${minutes === 1 ? "" : "s"} remaining`
      );
    }
  }, [remaining]);

  useEffect(() => {
    if (sessionsCompleted !== prevSessionsRef.current) {
      prevSessionsRef.current = sessionsCompleted;
      setTimerAnnouncement("Focus session complete");
    }
  }, [sessionsCompleted]);

  const circumference = 2 * Math.PI * 120;
  const offset = circumference * (1 - progress);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center animate-fade-in">
      <h1 className="mb-2 font-display text-2xl font-bold text-foreground">Focus Mode</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {sessionsCompleted} session{sessionsCompleted !== 1 ? "s" : ""} completed today ·{" "}
        {Math.floor(totalFocusSeconds / 60)}m total focus
      </p>

      <div role="status" aria-live="polite" className="sr-only">
        {timerAnnouncement}
      </div>

      <div className="relative mb-8">
        <svg width="260" height="260" aria-hidden="true">
          <circle
            cx="130"
            cy="130"
            r="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-border"
          />
          <circle
            cx="130"
            cy="130"
            r="120"
            fill="none"
            stroke="oklch(0.546 0.245 262)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 130 130)"
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span role="timer" className="font-display text-5xl font-bold tabular-nums text-foreground">
            {formatTimerDisplay(remaining)}
          </span>
          <span className="text-sm text-muted-foreground">
            {isRunning ? "In Progress" : remaining === 0 ? "Complete!" : "Ready"}
          </span>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {DURATIONS.map((d) => (
          <button
            key={d.seconds}
            onClick={() => {
              setDuration(d.seconds);
              setRemaining(d.seconds);
              stopTimer();
              startRef.current = null;
            }}
            aria-pressed={duration === d.seconds}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-4 py-1.5 text-xs font-semibold transition-colors ${
              duration === d.seconds
                ? "bg-skill-blue-solid text-skill-blue-on-solid"
                : "border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={resetTimer}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Reset timer"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          onClick={toggleTimer}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-skill-blue-solid p-4 text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
          aria-label={isRunning ? "Pause timer" : "Start timer"}
        >
          {isRunning ? <Pause className="h-6 w-6" aria-hidden="true" /> : <Play className="h-6 w-6 ml-0.5" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
