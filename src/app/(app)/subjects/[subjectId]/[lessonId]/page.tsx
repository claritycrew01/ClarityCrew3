import { getAllLessonIds } from "@/data";
import { LessonClient } from "./lesson-client";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLessonIds();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectId: string; lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const title = lessonId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { title: `${title} - ClarityCrew` };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ subjectId: string; lessonId: string }>;
}) {
  const { subjectId, lessonId } = await params;
  return <LessonClient subjectId={subjectId} lessonId={lessonId} />;
}
