/**
 * @module AppShell
 * @description Shared authenticated application shell.
 * @author auto
 * @since 1.0.0
 */
import type { ReactNode } from "react";
import { MobileNav } from "@/components/shared/MobileNav";
import { RoleBadge } from "@/components/shared/RoleBadge";

export function AppShell({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b bg-white px-6 py-3">
        <RoleBadge role="RECRUITER" />
        <MobileNav />
      </header>
      {children}
    </div>
  );
}
