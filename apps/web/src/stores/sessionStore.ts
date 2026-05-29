/**
 * @module SessionStore
 * @description Zustand store for user, role, and token session state.
 * @author auto
 * @since 1.0.0
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SessionState = {
  hasHydrated: boolean;
  role?: "recruiter" | "joinee";
  token?: string;
  clearSession: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
  setSession: (role: "recruiter" | "joinee", token: string) => void;
};

export const useSessionStore = create<SessionState>()(
  persist<SessionState>(
    (set) => ({
      hasHydrated: false,
      clearSession: (): void => {
        set({ role: undefined, token: undefined });
      },
      setHasHydrated: (hasHydrated: boolean): void => {
        set({ hasHydrated });
      },
      setSession: (role: "recruiter" | "joinee", token: string): void => {
        set({ role, token });
      },
    }),
    {
      name: "onboarding-session",
      onRehydrateStorage:
        () =>
        (state): void => {
          state?.setHasHydrated(true);
        },
    },
  ),
);
