"use client";

import { type ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { CourseTree } from "@/components/layout/sidebar/course-tree";
import { RightPanel } from "@/components/layout/right-panel";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ReadingRuler } from "@/components/a11y/reading-ruler";
import { AccessibilityToolbar } from "@/components/a11y/accessibility-toolbar";
import { useUIStore } from "@/lib/store/ui-store";

export function AppShell({ children }: { children: ReactNode }) {
  const sidebarCollapsed = useUIStore((s) => s.sidebarCollapsed);
  const rightPanelOpen = useUIStore((s) => s.rightPanelOpen);

  return (
    <div className="relative min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />

      {/* Left Sidebar: Course Tree */}
      <CourseTree collapsed={sidebarCollapsed} />

      {/* Right Panel: AI Tutor Drawer */}
      <RightPanel open={rightPanelOpen} />

      {/* Reading Ruler follows the cursor for dyslexia aid */}
      <ReadingRuler />

      {/* Floating Accessibility Toolbar */}
      <AccessibilityToolbar />

      {/* Main Content Canvas */}
      <main
        id="main-content"
        tabIndex={-1}
        className="pt-[calc(var(--header-height)+0.5rem)] pb-2 px-2 transition-all duration-300 ease-in-out"
        style={{
          marginLeft: sidebarCollapsed ? "0.5rem" : "calc(var(--sidebar-width) + 0.5rem)",
          marginRight: "calc(var(--right-panel-width-collapsed) + 0.5rem)",
        }}
      >
        <div className="min-h-[calc(100vh-var(--header-height)-1rem)] rounded-md bg-card shadow-sm overflow-hidden py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
