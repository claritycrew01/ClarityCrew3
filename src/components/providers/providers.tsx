"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUIStore } from "@/lib/store/ui-store";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HydrationGate>{children}</HydrationGate>
    </NextThemesProvider>
  );
}

function HydrationGate({ children }: { children: ReactNode }) {
  const hydrated = useRef(false);
  const setHasHydrated = useUIStore((s) => s.setHasHydrated);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    // Trigger rehydration on all persisted stores
    import("@/lib/store/learner-store").then(({ useLearnerStore }) =>
      useLearnerStore.persist.rehydrate()
    );
    import("@/lib/store/progress-store").then(({ useProgressStore }) =>
      useProgressStore.persist.rehydrate()
    );
    import("@/lib/store/tutor-store").then(({ useTutorStore }) =>
      useTutorStore.persist.rehydrate()
    );
    import("@/lib/store/ui-store").then(({ useUIStore }) =>
      useUIStore.persist.rehydrate()
    );
    import("@/lib/store/auth-store").then(({ useAuthStore }) =>
      useAuthStore.persist.rehydrate()
    );
  }, [setHasHydrated]);

  return <>{children}</>;
}
