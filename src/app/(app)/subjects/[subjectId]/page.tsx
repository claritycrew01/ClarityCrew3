import { getAllSubjectIds } from "@/data";
import { SubjectClient } from "./subject-client";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSubjectIds();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}): Promise<Metadata> {
  const { subjectId } = await params;
  return { title: `${subjectId.charAt(0).toUpperCase() + subjectId.slice(1)} - ClarityCrew` };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = await params;
  return <SubjectClient subjectId={subjectId} />;
}
