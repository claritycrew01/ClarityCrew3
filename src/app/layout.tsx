import type { Metadata } from "next";
import { Providers } from "@/components/providers/providers";
import { AccessibilityEffects } from "@/components/providers/accessibility-effects";
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
          <AccessibilityEffects>
            {children}
          </AccessibilityEffects>
        </Providers>
      </body>
    </html>
  );
}
