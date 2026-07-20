"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: AuthUser | null;
  hasHydrated: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (firstName: string, lastName: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  setHasHydrated: (value: boolean) => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      hasHydrated: false,

      login: (email, password) => {
        if (!email || !password) {
          return { success: false, error: "Please fill in all fields." };
        }
        if (password.length < 6) {
          return { success: false, error: "Password must be at least 6 characters." };
        }

        const user: AuthUser = {
          id: `user-${Date.now()}`,
          email,
          firstName: email.split("@")[0],
          lastName: "",
        };
        set({ user });
        return { success: true };
      },

      signup: (firstName, lastName, email, password) => {
        if (!firstName || !email || !password) {
          return { success: false, error: "Please fill in all required fields." };
        }
        if (password.length < 6) {
          return { success: false, error: "Password must be at least 6 characters." };
        }

        const user: AuthUser = {
          id: `user-${Date.now()}`,
          email,
          firstName,
          lastName,
        };
        set({ user });
        return { success: true };
      },

      logout: () => set({ user: null }),

      setHasHydrated: (value) => set({ hasHydrated: value }),

      isAuthenticated: () => get().user !== null,
    }),
    {
      name: "claritycrew-auth",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
