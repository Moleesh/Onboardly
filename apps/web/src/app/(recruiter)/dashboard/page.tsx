/**
 * @module DashboardPage
 * @description Recruiter dashboard with template and joinee management.
 * @author auto
 * @since 1.0.0
 */
import { DocumentBuilder } from "@/app/(recruiter)/dashboard/_components/DocumentBuilder";
import { JoineeManager } from "@/app/(recruiter)/dashboard/_components/JoineeManager";
import { en } from "@/i18n/en";

/**
 * Renders recruiter dashboard.
 * @returns Dashboard page.
 */
export default function DashboardPage(): JSX.Element {
  return (
    <main className="grid gap-4 p-6">
      <h1 className="text-2xl font-semibold">{en.recruiterDashboard}</h1>
      <div className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <DocumentBuilder />
        <JoineeManager />
      </div>
    </main>
  );
}
