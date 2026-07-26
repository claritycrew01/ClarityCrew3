"use client";

import Link from "next/link";
import { Settings as SettingsIcon, Accessibility, Palette, Sparkles, ChevronRight } from "lucide-react";

const SETTINGS_ITEMS = [
  {
    href: "/settings/personalization/",
    label: "Personalization",
    description: "Theme, font, spacing, navigation, input preferences",
    icon: Sparkles,
  },
  {
    href: "/settings/accessibility/",
    label: "Accessibility",
    description: "Dyslexia fonts, spacing, calm reader, cognitive load",
    icon: Accessibility,
  },
  {
    href: "#",
    label: "Notifications",
    description: "Focus reminders, streak alerts",
    icon: SettingsIcon,
  },
];

export default function SettingsPage() {
  return (
    <div className="animate-fade-in max-w-2xl">
      <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Settings
      </h1>

      <div className="space-y-2">
        {SETTINGS_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-4 transition-all hover:border-skill-blue/30 hover:shadow-sm"
          >
            <div className="rounded-lg bg-muted p-2.5">
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
}
