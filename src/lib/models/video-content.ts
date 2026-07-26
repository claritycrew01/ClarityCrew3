export interface VideoChapter {
  startTime: number;
  endTime: number;
  title: string;
}

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  durationSeconds: number;
  subject: string;
  chapter: string;
  keyPoints: string[];
  chapters: VideoChapter[];
  difficulty: "easy" | "medium" | "hard";
  assetPath: string;
  thumbnailPath: string;
  linkedLessonId?: string;
  youtubeId?: string;
  source?: string;
}
