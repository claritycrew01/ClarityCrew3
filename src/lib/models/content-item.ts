export type LearningMode =
  | "lesson"
  | "quiz"
  | "video"
  | "flashcard"
  | "guidedPractice"
  | "microLesson"
  | "visualSummary"
  | "focusSprint";

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  contentType: LearningMode;
  difficulty: "easy" | "medium" | "hard";
  estimatedDurationSeconds: number;
  tags: string[];
  body: string;
  simplifiedBody: string;
  videoId?: string;
  quizOptions?: QuizOption[];
  flashcards?: Flashcard[];
  subject: string;
  chapter: string;
  chapterId: string;
  metadata: Record<string, unknown>;
}
