export type NeurodivergentTrait =
  | "adhd"
  | "autism"
  | "dyslexia"
  | "dyscalculia"
  | "dysgraphia"
  | "dyspraxia"
  | "executive Dysfunction"
  | "anxiety";

export type FeedbackStyle = "encouraging" | "direct" | "calm" | "playful" | "detailed";
export type PacingPreference = "slow" | "moderate" | "fast";

export interface LearnerProfile {
  id: string;
  name: string;
  age: number;
  neurodivergentTraits: NeurodivergentTrait[];
  accessibilityNeeds: string[];
  preferredFeedback: FeedbackStyle;
  pacing: PacingPreference;
  depthPreference: number;
  modeWeights: Partial<Record<string, number>>;
  engagementHistory: number[];
  focusThreshold: number;
}
