export interface SubjectData {
  id: string;
  name: string;
  icon: string;
  color: string;
  chapters: ChapterData[];
  lessonCount: number;
  videoCount: number;
}

export interface ChapterData {
  id: string;
  subjectId: string;
  title: string;
  order: number;
  lessonCount: number;
}
