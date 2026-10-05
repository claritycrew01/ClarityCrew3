"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, BookOpen, Beaker, Trophy, Lock } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { SUBJECTS } from "@/data";

interface TreeNode {
  id: string;
  label: string;
  icon?: ReactNode;
  progress?: number;
  locked?: boolean;
  children?: TreeNode[];
  href?: string;
}

function buildTreeFromData(): TreeNode[] {
  return SUBJECTS.map((subject) => {
    const iconMap: Record<string, ReactNode> = {
      math: <BookOpen className="h-4 w-4" aria-hidden="true" />,
      science: <Beaker className="h-4 w-4" aria-hidden="true" />,
      english: <Trophy className="h-4 w-4" aria-hidden="true" />,
    };

    return {
      id: subject.id,
      label: subject.name,
      icon: iconMap[subject.id] ?? <BookOpen className="h-4 w-4" aria-hidden="true" />,
      children: subject.chapters.map((chapter) => ({
        id: chapter.id,
        label: chapter.title,
        progress: 0,
        children: chapter.lessons.map((lesson) => ({
          id: lesson.id,
          label: lesson.title,
          href: `/subjects/${subject.id}/${lesson.id}/`,
          progress: 0,
        })),
      })),
    };
  });
}

function ProgressRing({ progress, size = 28 }: { progress: number; size?: number }) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  const color =
    progress >= 1
      ? "oklch(0.627 0.194 142)"
      : progress > 0
        ? "oklch(0.546 0.245 262)"
        : "oklch(0.556 0.024 260 / 0.3)";

  return (
    <svg width={size} height={size} className="shrink-0" aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-sidebar-border"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 1);
  const pathname = usePathname();
  const hasChildren = node.children && node.children.length > 0;
  const currentPath = pathname.replace(/\/$/, "");

  return (
    <div>
      {node.href && !hasChildren ? (
        <a
          href={node.href}
          aria-current={currentPath === node.href.replace(/\/$/, "") ? "page" : undefined}
          aria-disabled={node.locked || undefined}
          className={cn(
            "flex min-h-11 w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            node.locked
              ? "text-sidebar-foreground pointer-events-none"
              : "text-sidebar-foreground",
            depth === 0 && "font-medium"
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          <span className="w-3.5" />
          {node.icon && <span className="shrink-0 text-sidebar-foreground">{node.icon}</span>}
          <span className="flex-1 truncate">{node.label}</span>
          {node.locked ? (
            <Lock className="h-3.5 w-3.5 shrink-0 text-sidebar-foreground" aria-hidden="true" />
          ) : (
            node.progress !== undefined && (
              <ProgressRing progress={node.progress} size={22} />
            )
          )}
        </a>
      ) : (
        <button
          onClick={() => hasChildren && setExpanded(!expanded)}
          aria-expanded={hasChildren ? expanded : undefined}
          aria-controls={hasChildren ? `tree-group-${node.id}` : undefined}
          className={cn(
            "flex min-h-11 w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors",
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            node.locked
              ? "text-sidebar-foreground"
              : "text-sidebar-foreground",
            depth === 0 && "font-medium"
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          disabled={node.locked}
        >
          {hasChildren ? (
            <ChevronRight
              aria-hidden="true"
              className={cn(
                "h-3.5 w-3.5 shrink-0 text-sidebar-foreground transition-transform duration-200",
                expanded && "rotate-90"
              )}
            />
          ) : (
            <span className="w-3.5" />
          )}

          {node.icon && <span className="shrink-0 text-sidebar-foreground">{node.icon}</span>}

          <span className="flex-1 truncate">{node.label}</span>

          {node.locked ? (
            <Lock className="h-3.5 w-3.5 shrink-0 text-sidebar-foreground" aria-hidden="true" />
          ) : (
            node.progress !== undefined && (
              <ProgressRing progress={node.progress} size={22} />
            )
          )}
        </button>
      )}

      {hasChildren && expanded && (
        <div className="animate-fade-in" id={`tree-group-${node.id}`}>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CourseTree({ collapsed }: { collapsed: boolean }) {
  const tree = buildTreeFromData();

  return (
    <aside
      id="course-tree"
      aria-label="Course tree"
      className={cn(
        "fixed top-[calc(var(--header-height)+0.5rem)] bottom-2 left-2 z-40",
        "flex flex-col rounded-md bg-sidebar-bg text-sidebar-foreground",
        "overflow-hidden transition-all duration-300 ease-in-out",
        collapsed ? "w-0 opacity-0 pointer-events-none" : "w-[var(--sidebar-width)] opacity-100"
      )}
    >
      <div className="px-3 pt-4 pb-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-sidebar-foreground">
          Course Tree
        </h2>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-thin" aria-label="Course navigation">
        {tree.map((node) => (
          <TreeItem key={node.id} node={node} />
        ))}
      </nav>
    </aside>
  );
}
