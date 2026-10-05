import type { Metadata } from "next";
import { Providers } from "@/components/providers/providers";
import { AccessibilityEffects } from "@/components/providers/accessibility-effects";
import { RouteFocus } from "@/components/a11y/route-focus";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClarityCrew",
  description: "An academic study app for neurodivergent learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <RouteFocus />
          <AccessibilityEffects>
            {children}
          </AccessibilityEffects>
        </Providers>
      </body>
    </html>
  );
}
