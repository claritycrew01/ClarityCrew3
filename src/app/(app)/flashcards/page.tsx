"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { RotateCcw, ChevronLeft, ChevronRight, Check, X, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { FLASHCARD_DECKS, getFlashcardDeckById } from "@/data";
import type { FlashcardDeckData } from "@/data";
import { useTTS } from "@/hooks/use-tts";

export default function FlashcardsPage() {
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [unknown, setUnknown] = useState<Set<number>>(new Set());
  const cardRef = useRef<HTMLDivElement>(null);
  const { toggle: toggleTTS, speaking, supported: ttsSupported } = useTTS();

  const deck: FlashcardDeckData | null = selectedDeckId ? getFlashcardDeckById(selectedDeckId) ?? null : null;
  const cards = deck?.cards ?? [];
  const card = cards[currentIndex];

  const goNext = useCallback(() => {
    if (!cards.length) return;
    setFlipped(false);
    setCurrentIndex((i) => (i + 1) % cards.length);
  }, [cards.length]);

  const goPrev = useCallback(() => {
    if (!cards.length) return;
    setFlipped(false);
    setCurrentIndex((i) => (i - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handleKnown = useCallback(() => {
    if (!card) return;
    setKnown((prev) => new Set(prev).add(currentIndex));
    setUnknown((prev) => {
      const next = new Set(prev);
      next.delete(currentIndex);
      return next;
    });
    goNext();
  }, [card, currentIndex, goNext]);

  const handleUnknown = useCallback(() => {
    if (!card) return;
    setUnknown((prev) => new Set(prev).add(currentIndex));
    setKnown((prev) => {
      const next = new Set(prev);
      next.delete(currentIndex);
      return next;
    });
    goNext();
  }, [card, currentIndex, goNext]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!deck) return;
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      else if (e.key === "1") handleUnknown();
      else if (e.key === "2") handleKnown();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [deck, goNext, goPrev, handleKnown, handleUnknown]);

  function selectDeck(deckId: string) {
    setSelectedDeckId(deckId);
    setCurrentIndex(0);
    setFlipped(false);
    setKnown(new Set());
    setUnknown(new Set());
  }

  if (!deck) {
    return (
      <div className="animate-fade-in">
        <h1 className="mb-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Flashcards
        </h1>
        <p className="mb-6 text-muted-foreground">Select a deck to begin studying.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FLASHCARD_DECKS.map((d) => (
            <button
              key={d.id}
              onClick={() => selectDeck(d.id)}
              className="flex flex-col items-start rounded-xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-skill-blue/30 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-foreground">{d.title}</span>
              <span className="mt-1 text-xs text-muted-foreground">{d.description}</span>
              <span className="mt-3 inline-flex items-center rounded-full bg-skill-blue/10 px-2.5 py-0.5 text-[10px] font-semibold text-skill-blue-text">
                {d.cards.length} cards
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center animate-fade-in">
      <button
        onClick={() => setSelectedDeckId(null)}
        className="mb-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← All Decks
      </button>
      <h1 className="mb-1 font-display text-2xl font-bold text-foreground">{deck.title}</h1>
      <p className="mb-4 text-sm text-muted-foreground">
        {currentIndex + 1} of {cards.length} · {known.size} known · {unknown.size} learning
      </p>

      <div className="card-flip mb-6 h-64 w-full max-w-md">
        <div
          ref={cardRef}
          onClick={() => setFlipped(!flipped)}
          className={cn(
            "card-flip-inner cursor-pointer",
            flipped && "flipped"
          )}
          role="button"
          tabIndex={0}
          aria-label={flipped ? "Show front" : "Show back"}
        >
          <div className="card-flip-face flex items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
            <p className="text-lg font-semibold text-foreground">
              {card.front}
            </p>
          </div>
          <div className="card-flip-face card-flip-back flex items-center justify-center rounded-2xl border border-skill-blue/30 bg-skill-blue/5 p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-foreground">
              {card.back}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {ttsSupported && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleTTS(flipped ? card.back : card.front);
            }}
            className={cn(
              "rounded-full border p-2 transition-colors",
              speaking
                ? "border-skill-blue-solid bg-skill-blue/10 text-skill-blue-text"
                : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
            aria-label="Read card aloud"
            aria-pressed={speaking}
          >
            {speaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}
        <button
          onClick={goPrev}
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleUnknown}
          className={cn(
            "rounded-full border p-3 transition-colors",
            unknown.has(currentIndex)
              ? "border-destructive bg-destructive/15 text-destructive"
              : "border-destructive/30 bg-destructive/5 text-destructive hover:bg-destructive/10"
          )}
          aria-label="Don't know"
          aria-pressed={unknown.has(currentIndex)}
        >
          <X className="h-5 w-5" />
        </button>
        <button
          onClick={handleKnown}
          className={cn(
            "rounded-full border p-3 transition-colors",
            known.has(currentIndex)
              ? "border-success-green-solid bg-success-green/15 text-success-green-text"
              : "border-success-green/30 bg-success-green/5 text-success-green-text hover:bg-success-green/10"
          )}
          aria-label="Know it"
          aria-pressed={known.has(currentIndex)}
        >
          <Check className="h-5 w-5" />
        </button>
        <button
          onClick={goNext}
          className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-4 text-[10px] text-muted-foreground">
        Keyboard: ← → navigate · Space flip · 1 unknown · 2 known
      </p>
    </div>
  );
}
