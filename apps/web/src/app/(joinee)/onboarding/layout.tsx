/**
 * @module OnboardingLayout
 * @description Joinee onboarding section layout.
 * @author auto
 * @since 1.0.0
 */
import type { ReactNode } from "react";

export default function OnboardingLayout({ children }: { children: ReactNode }): JSX.Element {
  return <div className="min-h-screen bg-surface">{children}</div>;
}
