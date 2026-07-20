import type { LearningMode } from "./content-item";

export interface LearningRecommendation {
  id: string;
  learnerId: string;
  recommendedMode: LearningMode;
  title: string;
  description: string;
  confidence: number;
  reason: string;
  estimatedDuration: number;
  difficulty: "easy" | "medium" | "hard";
  isUrgent: boolean;
  contentId: string;
}
