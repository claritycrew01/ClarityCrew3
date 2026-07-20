"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, ChevronRight } from "lucide-react";
import { useUIStore } from "@/lib/store/ui-store";
import { cn } from "@/lib/utils/cn";

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href: string; isLast: boolean }[] = [];

  let path = "";
  for (let i = 0; i < segments.length; i++) {
    path += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const label = segments[i]
      .replace(/\[.*\]/, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label: label || "Home", href: path, isLast });
  }

  return crumbs;
}

export function Header() {
  const pathname = usePathname();
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background px-4">
      {/* Left side: hamburger + logo + breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/home/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-blue text-white font-display font-bold text-sm">
            C
          </div>
          <span className="hidden font-display text-lg font-bold text-foreground sm:inline">
            ClarityCrew
          </span>
        </Link>

        {/* Breadcrumbs */}
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
              {crumb.isLast ? (
                <span className="font-medium text-foreground">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Right side: AI tutor quick access + CTA */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleRightPanel}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Toggle AI tutor"
        >
          <Sparkles className="h-5 w-5" />
        </button>
        <Link
          href="/home/"
          className="rounded-full bg-cta-orange px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-cta-orange-hover"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
