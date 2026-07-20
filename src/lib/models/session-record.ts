export interface InteractionEvent {
  id: string;
  sessionId: string;
  contentType: string;
  interactionType:
    | "completed"
    | "struggled"
    | "skipped"
    | "tappedHint"
    | "timedOut"
    | "replayed"
    | "lingered"
    | "requestedSimpler"
    | "requestedDeeper";
  score: number;
  durationSeconds: number;
  wasSuccessful: boolean;
  timestamp: number;
  metadata: Record<string, unknown>;
}

export interface SessionRecord {
  id: string;
  learnerId: string;
  subject: string;
  startTime: number;
  endTime?: number;
  interactions: InteractionEvent[];
  engagementScore: number;
  comprehensionScore: number;
  completed: boolean;
}

export function getSessionDuration(session: SessionRecord): number {
  if (!session.endTime) return 0;
  return Math.floor((session.endTime - session.startTime) / 1000);
}
