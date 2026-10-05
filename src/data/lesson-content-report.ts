import { SUBJECTS } from "./subjects";

let reported = false;

export function reportLiteralCoverage(): void {
  if (process.env.NODE_ENV === "production") return;
  if (reported) return;
  reported = true;

  const missing = SUBJECTS.flatMap((subject) =>
    subject.chapters.flatMap((chapter) =>
      chapter.lessons.filter((lesson) => !lesson.literalBody).map((lesson) => lesson.id)
    )
  );

  if (missing.length > 0) {
    console.warn(
      `[lesson-content] ${missing.length} lesson(s) missing literalBody: ${missing.join(", ")}`
    );
  } else {
    console.log("[lesson-content] all lessons have literalBody");
  }
}
