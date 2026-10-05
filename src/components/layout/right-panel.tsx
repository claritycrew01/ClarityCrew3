"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import { PanelRightOpen, PanelRightClose, Sparkles, Send, Trash2, Mic } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useUIStore } from "@/lib/store/ui-store";
import { useTutorStore } from "@/lib/store/tutor-store";
import { usePreferencesApplied } from "@/hooks/use-preferences-applied";
import { useVoiceInput } from "@/hooks/use-voice-input";
import { getLessonById, getSubjectById } from "@/data";

function generateTutorResponse(userMessage: string, pathname: string): string {
  const lower = userMessage.toLowerCase();

  // Context-aware: detect current lesson from route
  const lessonMatch = pathname.match(/\/subjects\/([^/]+)\/([^/]+)/);
  const contextSubject = lessonMatch ? lessonMatch[1] : null;
  const contextLesson = lessonMatch ? lessonMatch[2] : null;

  if (contextSubject && contextLesson) {
    const subject = getSubjectById(contextSubject);
    const lesson = getLessonById(contextLesson);
    if (lesson && subject) {
      const topicLower = lesson.title.toLowerCase();
      const subjectLower = subject.name.toLowerCase();

      if (lower.includes("help") || lower.includes("explain") || lower.includes("what") || lower.includes("how")) {
        if (topicLower.includes("linear")) {
          return `You're studying Linear Equations in ${subject.name}. A linear equation follows y = mx + b. The slope m tells you steepness, and b is where the line crosses the y-axis. Try calculating the slope between two points: m = (y₂ - y₁) / (x₂ - x₁). Want me to walk through a specific example?`;
        }
        if (topicLower.includes("quadratic")) {
          return `You're on Quadratic Equations. The quadratic formula x = (-b ± √(b²-4ac)) / 2a solves any quadratic. The discriminant b²-4ac tells you the number of solutions. Try identifying a, b, and c from your equation first.`;
        }
        if (topicLower.includes("system")) {
          return `For Systems of Equations, you have two methods: substitution (solve one equation, plug into the other) and elimination (add/subtract equations to cancel a variable). Try elimination when both equations are in standard form.`;
        }
        if (topicLower.includes("function")) {
          return `Functions are input-output machines. f(x) = 2x + 3 means "multiply input by 2, add 3." Composition means chaining functions: (f ∘ g)(x) = f(g(x)). What specifically about functions would you like help with?`;
        }
        if (topicLower.includes("triangle")) {
          return `Triangle basics: angles sum to 180°, area = ½ × base × height. For right triangles, use Pythagorean theorem a² + b² = c². What type of triangle problem are you working on?`;
        }
        if (topicLower.includes("circle")) {
          return `Circles: circumference = 2πr, area = πr². A radian relates the radius to the arc length. Need help with a specific circle calculation?`;
        }
        if (topicLower.includes("data") || topicLower.includes("analysis")) {
          return `Data analysis: mean = sum/count, median = middle value, mode = most frequent. Standard deviation measures spread. Which measure would you like to practice?`;
        }
        if (topicLower.includes("probability")) {
          return `Probability ranges from 0 to 1. "Or" events: add probabilities (subtract overlap). "And" events: multiply (if independent). Want to try a probability problem?`;
        }
        if (topicLower.includes("cell")) {
          return `Cell Biology: cells have a nucleus (DNA control center), mitochondria (energy factory), and cell membrane (selective barrier). Plant cells add a cell wall and chloroplasts. What about cells interests you?`;
        }
        if (topicLower.includes("genetic")) {
          return `Genetics: DNA has bases A-T and G-C. You inherit two copies of each gene. Dominant traits show with one copy; recessive need both. Want to practice Punnett squares?`;
        }
        if (topicLower.includes("ecology")) {
          return `Ecology covers how organisms interact with their environment. Producers → primary consumers → secondary consumers → decomposers. Only ~10% of energy transfers between trophic levels. What ecosystem concept needs clarification?`;
        }
        if (topicLower.includes("atom")) {
          return `Atomic structure: protons + neutrons in the nucleus, electrons in energy shells. Valence electrons determine chemical behavior. The periodic table groups elements by these properties. What would you like to explore?`;
        }
        if (topicLower.includes("bond")) {
          return `Chemical bonds: ionic (electron transfer, charged ions), covalent (electron sharing), and metallic. Bond type determines properties like melting point. Need help distinguishing them?`;
        }
        if (topicLower.includes("force") || topicLower.includes("motion")) {
          return `Newton's laws: 1) Inertia (objects resist change), 2) F=ma, 3) Equal opposite reactions. Friction opposes motion. Gravity accelerates at 9.8 m/s². Which law or concept would you like to practice?`;
        }
        if (topicLower.includes("grammar") || topicLower.includes("speech")) {
          return `Parts of speech: nouns (things), pronouns (replace nouns), verbs (actions/states), adjectives (describe nouns), adverbs (modify verbs), conjunctions (connect), prepositions (relationships), interjections (emotion). Want to practice identifying them?`;
        }
        if (topicLower.includes("reading") || topicLower.includes("comprehension")) {
          return `SQ3R method: Survey, Question, Read, Recite, Review. Main ideas are central points; supporting details are evidence. Make inferences by combining text + prior knowledge. Which reading skill would you like to improve?`;
        }
        if (topicLower.includes("writing") || topicLower.includes("essay")) {
          return `Essay structure: Introduction (hook + thesis), Body (PEEL: Point, Evidence, Explanation, Link), Conclusion (restate + insight). Write a rough draft first, then revise. Need help with a specific essay part?`;
        }
        if (topicLower.includes("vocab")) {
          return `Vocabulary strategies: context clues (synonyms, antonyms, definitions), word roots/prefixes/suffixes (spect=look, un=not, -tion=noun). Learn word families together. Use spaced repetition. What word would you like to explore?`;
        }

        return `You're currently in ${subject.name} → ${lesson.title}. I can help explain specific concepts from this lesson. Try asking about a particular topic, formula, or definition.`;
      }
    }
  }

  // General topic matching (fallback)
  if (lower.includes("slope") || lower.includes("linear")) {
    return "The slope of a line measures its steepness. In y = mx + b, the slope is m. Calculate it from two points: m = (y₂ - y₁) / (x₂ - x₁). Positive slopes rise left-to-right; negative slopes fall.";
  }
  if (lower.includes("quadratic") || lower.includes("parabola")) {
    return "A quadratic equation ax² + bx + c = 0 is solved by the quadratic formula. The discriminant b²-4ac tells you the number of real solutions: positive = two, zero = one, negative = none (real).";
  }
  if (lower.includes("cell") || lower.includes("organelle")) {
    return "Cells are the building blocks of life. Eukaryotic cells have a nucleus and organelles like mitochondria (energy), ribosomes (protein), and Golgi apparatus (processing).";
  }
  if (lower.includes("dna") || lower.includes("gene") || lower.includes("genetic")) {
    return "DNA uses four bases: A, T, G, C. Genes code for proteins. You inherit two copies per gene, and dominant traits mask recessive ones.";
  }
  if (lower.includes("force") || lower.includes("newton") || lower.includes("motion")) {
    return "Newton's laws: 1) Inertia: objects resist change, 2) F = ma, 3) Every action has equal opposite reaction. Gravity ≈ 9.8 m/s² near Earth.";
  }
  if (lower.includes("grammar") || lower.includes("noun") || lower.includes("verb")) {
    return "Eight parts of speech: nouns name things, pronouns replace nouns, verbs show actions, adjectives describe nouns, adverbs modify verbs, conjunctions connect, prepositions show relationships, interjections express emotion.";
  }
  if (lower.includes("probability") || lower.includes("chance")) {
    return "Probability: 0 (impossible) to 1 (certain). For 'OR': add probabilities (subtract overlap). For 'AND': multiply (if independent events).";
  }
  if (lower.includes("quiz") || lower.includes("test") || lower.includes("exam")) {
    return "I can help you prepare! Try the Quiz section for your current topic, or use flashcards for active recall. Focus on understanding explanations, not just memorizing.";
  }
  if (lower.includes("flashcard") || lower.includes("study") || lower.includes("review")) {
    return "Flashcards work best for active recall. Keyboard shortcuts: Space to flip, 1 for unknown, 2 for known. Focus on cards you get wrong, because that's where learning happens.";
  }
  if (lower.includes("focus") || lower.includes("concentrate") || lower.includes("timer")) {
    return "The Focus Mode uses Pomodoro technique: study for a set period, then break. Start with shorter sessions and build up. Consistency beats duration.";
  }
  if (lower.includes("help") || lower.includes("stuck") || lower.includes("don't understand")) {
    return "No worries! Try breaking the concept into smaller pieces. Would you like me to explain a specific topic, or would you prefer to review the lesson material first?";
  }

  return "I can help with math, science, and English topics. Try asking about a specific concept, or navigate to a lesson and ask me to explain something from it.";
}

function tutorTypingDelay(): number {
  return 600 + Math.random() * 500;
}

export function RightPanel({ open }: { open: boolean }) {
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);
  const messages = useTutorStore((s) => s.messages);
  const isTyping = useTutorStore((s) => s.isTyping);
  const addUserMessage = useTutorStore((s) => s.addUserMessage);
  const addTutorMessage = useTutorStore((s) => s.addTutorMessage);
  const setTyping = useTutorStore((s) => s.setTyping);
  const clearConversation = useTutorStore((s) => s.clearConversation);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const hadOpenRef = useRef(false);
  const { hydrated, prefs } = usePreferencesApplied();

  const handleTranscript = useCallback((text: string) => {
    setInput((prev) => (prev ? `${prev} ${text}` : text));
  }, []);
  const {
    supported: voiceSupported,
    listening: voiceListening,
    startListening,
    stopListening,
  } = useVoiceInput(handleTranscript);
  const showVoiceMic = hydrated && prefs.voiceInputPreferred && voiceSupported;
  const showVoiceNote = hydrated && prefs.voiceInputPreferred && !voiceSupported;

  useEffect(() => {
    const recordOpener = (event: Event) => {
      const target = event.target as Element | null;
      const opener = target?.closest<HTMLElement>(
        '[aria-label="Toggle AI tutor"], [aria-label="Open AI tutor"], [aria-label="Chat with tutor"]'
      );
      if (opener) openerRef.current = opener;
    };
    document.addEventListener("click", recordOpener, true);
    return () => document.removeEventListener("click", recordOpener, true);
  }, []);

  useEffect(() => {
    if (open) {
      hadOpenRef.current = true;
      return;
    }
    if (!hadOpenRef.current) return;
    hadOpenRef.current = false;
    const opener = openerRef.current;
    if (opener && opener.isConnected) {
      opener.focus();
      return;
    }
    document
      .querySelector<HTMLElement>('#tutor-panel [aria-label="Open AI tutor"]')
      ?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") toggleRightPanel();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, toggleRightPanel]);

  useEffect(() => {
    if (!open && voiceListening) stopListening();
  }, [open, voiceListening, stopListening]);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");
    messagesEndRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const handleSend = (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;
    addUserMessage(trimmed);
    setInput("");

    const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addTutorMessage(generateTutorResponse(trimmed, pathname));
    }, tutorTypingDelay());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <aside
      id="tutor-panel"
      aria-label="AI tutor"
      className={cn(
        "fixed top-[calc(var(--header-height)+0.5rem)] bottom-2 right-2 z-40",
        "flex flex-col rounded-md bg-background border border-border",
        "overflow-hidden transition-all duration-300 ease-in-out",
        open
          ? "w-[var(--right-panel-width-expanded)]"
          : "w-[var(--right-panel-width-collapsed)]"
      )}
    >
      {!open && (
        <div className="flex flex-col items-center py-4 gap-2">
          <button
            onClick={toggleRightPanel}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Open AI tutor"
            aria-expanded={false}
          >
            <PanelRightOpen className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={toggleRightPanel}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Chat with tutor"
            aria-expanded={false}
          >
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {open && (
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-skill-blue-text" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">AI Tutor</span>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={clearConversation}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Clear conversation"
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
              <button
                onClick={toggleRightPanel}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close panel"
              >
                <PanelRightClose className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
            {messages.length === 0 && !isTyping && (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <Sparkles className="h-8 w-8 text-muted-foreground mb-3" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground mb-1">Ask me anything</p>
                <p className="text-xs text-muted-foreground">
                  I can help with math, science, English, study tips, and more. Navigate to a lesson for contextual help.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Explain slope to me", "How do cells work?", "Help with quizzes"].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-muted/50 px-3 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div aria-live="polite">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "max-w-[90%] rounded-xl px-3 py-2 text-sm animate-fade-in",
                    msg.role === "user"
                      ? "ml-auto bg-skill-blue-solid text-skill-blue-on-solid rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  )}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div role="status" className="sr-only">
              {isTyping ? "Tutor is typing" : ""}
            </div>

            {isTyping && (
              <div
                aria-hidden="true"
                className="max-w-[90%] rounded-xl bg-muted px-3 py-2 text-sm rounded-bl-sm"
              >
                <div className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/40" style={{ animation: "typing-dot 1s infinite 0s" }} />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/40" style={{ animation: "typing-dot 1s infinite 0.2s" }} />
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/40" style={{ animation: "typing-dot 1s infinite 0.4s" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                aria-label="Ask the AI tutor a question"
                className="flex-1 min-h-11 rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
              />
              {showVoiceMic && (
                <button
                  type="button"
                  onClick={() => (voiceListening ? stopListening() : startListening())}
                  aria-pressed={voiceListening}
                  aria-label={voiceListening ? "Stop dictation" : "Start dictation"}
                  className={cn(
                    "shrink-0 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border p-2 transition-colors",
                    voiceListening
                      ? "bg-skill-blue/10 text-skill-blue-text border-skill-blue/30"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Mic className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md bg-skill-blue-solid p-2 text-skill-blue-on-solid transition-colors hover:bg-skill-blue/90 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {showVoiceNote && (
              <p className="mt-2 text-xs text-muted-foreground">
                Voice input is not available in this browser.
              </p>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
