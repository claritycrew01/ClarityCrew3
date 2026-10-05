"use client";

import { useState, useCallback, useEffect } from "react";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { QUIZZES, getQuizById, getQuizByLessonId } from "@/data";
import type { QuizData, QuizQuestionData } from "@/data";
import { useTTS } from "@/hooks/use-tts";
import { usePreferencesApplied } from "@/hooks/use-preferences-applied";
import { formatTimerDisplay } from "@/lib/utils/time";

type AnswerState = "idle" | "correct" | "incorrect";

export default function QuizPage() {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const { toggle: toggleTTS, speaking, supported: ttsSupported } = useTTS();
  const { hydrated, prefs } = usePreferencesApplied();
  const [timerElapsed, setTimerElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  const quiz: QuizData | null = selectedQuizId ? getQuizById(selectedQuizId) ?? null : null;
  const question: QuizQuestionData | undefined = quiz?.questions[currentQuestionIndex];
  const totalQuestions = quiz?.questions.length ?? 0;
  const showTimer = hydrated && prefs.quizTimerEnabled;
  const inQuizView = quiz !== null && !showResults && question !== undefined;

  useEffect(() => {
    if (!showTimer || !inQuizView || !timerRunning) return;
    const id = window.setInterval(() => setTimerElapsed((e) => e + 1), 1000);
    return () => window.clearInterval(id);
  }, [showTimer, inQuizView, timerRunning]);

  function selectQuiz(quizId: string) {
    const q = getQuizById(quizId);
    if (!q) return;
    setSelectedQuizId(quizId);
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setAnswerState("idle");
    setScore(0);
    setAnswers(new Array(q.questions.length).fill(null));
    setShowResults(false);
    setTimerElapsed(0);
    setTimerRunning(true);
  }

  const handleAnswer = useCallback(() => {
    if (!question || !selectedOptionId || answerState !== "idle") return;
    const correct = question.options.find((o) => o.isCorrect);
    const isCorrect = selectedOptionId === correct?.id;
    setAnswerState(isCorrect ? "correct" : "incorrect");
    setAnnouncement(
      `Question ${currentQuestionIndex + 1}: ${isCorrect ? "Correct" : "Incorrect"}`
    );
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestionIndex] = selectedOptionId;
      return next;
    });
  }, [question, selectedOptionId, answerState, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (!quiz) return;
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedOptionId(null);
      setAnswerState("idle");
    } else {
      const percentage =
        totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
      setAnnouncement(
        `Quiz complete. ${score} of ${totalQuestions} correct, ${percentage} percent.`
      );
      setShowResults(true);
    }
  }, [quiz, currentQuestionIndex, score, totalQuestions]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!quiz || showResults) return;
      const target = e.target as HTMLElement | null;
      const tagName = target?.tagName;
      if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") return;
      const isButton = target?.tagName === "BUTTON";
      if (answerState === "idle" && ["1", "2", "3", "4"].includes(e.key)) {
        const option = question?.options[Number(e.key) - 1];
        if (option) {
          e.preventDefault();
          setSelectedOptionId(option.id);
        }
        return;
      }
      if (answerState === "idle" && selectedOptionId && !isButton) {
        if (e.key === "Enter") {
          e.preventDefault();
          handleAnswer();
        }
      } else if (answerState !== "idle" && !isButton) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNext();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quiz, showResults, answerState, selectedOptionId, question, handleAnswer, handleNext]);

  function resetQuiz() {
    if (!quiz) return;
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setAnswerState("idle");
    setScore(0);
    setAnswers(new Array(quiz.questions.length).fill(null));
    setShowResults(false);
    setTimerElapsed(0);
    setTimerRunning(true);
  }

  const liveRegion = (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {announcement}
    </div>
  );

  if (!quiz) {
    return (
      <>
        {liveRegion}
        <div className="animate-fade-in">
        <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Quizzes
        </h1>
        <p className="mb-6 text-muted-foreground">Select a quiz to test your knowledge.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUIZZES.map((q) => (
            <button
              key={q.id}
              onClick={() => selectQuiz(q.id)}
              className="flex flex-col items-start rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-skill-blue/30"
            >
              <span className="text-sm font-semibold text-foreground">{q.title}</span>
              <span className="mt-1 text-xs text-muted-foreground">{q.description}</span>
              <span className="mt-3 inline-flex items-center rounded-md bg-cta-orange/10 px-2.5 py-0.5 text-[10px] font-semibold text-cta-orange-text">
                {q.questions.length} questions
              </span>
            </button>
          ))}
        </div>
        </div>
      </>
    );
  }

  if (showResults) {
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    return (
      <>
        {liveRegion}
        <div className="flex min-h-[60vh] flex-col items-center justify-center animate-fade-in">
        <Trophy className="mb-4 h-12 w-12 text-premium-amber-text" aria-hidden="true" />
        <h1 className="mb-1 font-display text-3xl font-bold text-foreground">Quiz Complete</h1>
        <p className="mb-6 text-muted-foreground">{quiz.title}</p>

        <div className="mb-6 text-center">
          <p className="font-display text-6xl font-bold text-foreground">{percentage}%</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {score} of {totalQuestions} correct
          </p>
        </div>

        <div className="mb-8 flex gap-3">
          <button
            onClick={resetQuiz}
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Retry
          </button>
          <button
            onClick={() => {
              setSelectedQuizId(null);
              setShowResults(false);
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-skill-blue-solid px-5 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
          >
            All Quizzes
          </button>
        </div>

        <div className="w-full max-w-lg space-y-2">
          {quiz.questions.map((q, i) => {
            const selectedId = answers[i];
            const correctOption = q.options.find((o) => o.isCorrect);
            const wasCorrect = selectedId === correctOption?.id;
            return (
              <div key={q.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  {wasCorrect ? (
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success-green-text" aria-hidden="true" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{q.text}</p>
                    {!wasCorrect && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Correct: {correctOption?.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </>
    );
  }

  if (!question) return <>{liveRegion}</>;

  return (
    <>
      {liveRegion}
      <div className="flex min-h-[60vh] flex-col items-center justify-center animate-fade-in">
      <button
        onClick={() => {
          setSelectedQuizId(null);
          setShowResults(false);
        }}
        className="mb-2 inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← All Quizzes
      </button>
      <h1 className="mb-1 font-display text-2xl font-bold text-foreground">{quiz.title}</h1>
      <p className="mb-2 text-sm text-muted-foreground">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>

      {showTimer && (
        <div className="mb-3 flex items-center gap-3">
          <p className="text-sm tabular-nums text-muted-foreground">
            {formatTimerDisplay(timerElapsed)}
          </p>
          <button
            type="button"
            onClick={() => setTimerRunning((r) => !r)}
            aria-pressed={!timerRunning}
            className="inline-flex min-h-11 items-center rounded-lg border border-border px-2 py-0.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {timerRunning ? "Pause" : "Resume"}
          </button>
        </div>
      )}

      <div
        className="mb-4 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuenow={currentQuestionIndex + 1}
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
      >
        <div
          className="h-full rounded-full bg-skill-blue-solid transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="mb-6 flex items-center gap-3">
        <p className="max-w-md flex-1 text-center text-base font-medium text-foreground">
          {question.text}
        </p>
        {ttsSupported && (
          <button
            onClick={() => toggleTTS(question.text)}
            className={cn(
              "inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-border p-1.5 transition-colors",
              speaking
                ? "bg-skill-blue/10 text-skill-blue-text border-skill-blue/30"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
            aria-label={speaking ? "Stop reading" : "Read question aloud"}
          >
            {speaking ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
          </button>
        )}
      </div>

      <div className="mb-6 grid w-full max-w-md gap-2">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrectOption = option.isCorrect;
          const showCorrect = answerState !== "idle" && isCorrectOption;
          const showWrong = answerState === "incorrect" && isSelected && !isCorrectOption;

          return (
            <button
              key={option.id}
              onClick={() => {
                if (answerState === "idle") setSelectedOptionId(option.id);
              }}
              disabled={answerState !== "idle"}
              className={cn(
                "flex items-center rounded-xl border-[1.5px] px-4 py-3 text-left text-sm transition-all",
                answerState === "idle" && isSelected && "border-skill-blue-solid bg-skill-blue/5",
                answerState === "idle" && !isSelected && "border-border bg-card hover:border-muted-foreground/30",
                showCorrect && "border-success-green-solid bg-success-green/5",
                showWrong && "border-destructive bg-destructive/5",
                answerState !== "idle" && !showCorrect && !showWrong && "border-border bg-card opacity-50"
              )}
            >
              <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">
                {option.id.split("-").pop()?.toUpperCase()}
              </span>
              <span className="flex-1 text-foreground">{option.text}</span>
              {showCorrect && <CheckCircle className="ml-2 h-4 w-4 text-success-green-text" aria-hidden="true" />}
              {showWrong && <XCircle className="ml-2 h-4 w-4 text-destructive" aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      {answerState !== "idle" && question.explanation && (
        <div className="mb-6 w-full max-w-md rounded-xl border border-border bg-muted/50 p-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}

      <div className="flex items-center gap-3">
        {answerState === "idle" ? (
          <button
            onClick={handleAnswer}
            disabled={!selectedOptionId}
            className="inline-flex min-h-11 items-center rounded-md bg-skill-blue-solid px-6 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-skill-blue-solid px-6 py-2.5 text-sm font-semibold text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90"
          >
            {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "See Results"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="mt-4 text-[10px] text-muted-foreground">
        Keyboard: 1-4 select · Enter check/next
      </p>
      </div>
    </>
  );
}
