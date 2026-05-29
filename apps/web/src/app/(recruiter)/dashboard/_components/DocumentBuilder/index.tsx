/**
 * @module DocumentBuilder
 * @description Recruiter workflow for document template creation.
 * @author auto
 * @since 1.0.0
 */
"use client";

import { StepChecklist } from "./StepChecklist";
import { StepFormBuilder } from "./StepFormBuilder";
import { StepPDFConsolidate } from "./StepPDFConsolidate";
import { en } from "@/i18n/en";

/**
 * Renders the template builder.
 * @returns Document builder component.
 */
export function DocumentBuilder(): JSX.Element {
  return (
    <section className="grid gap-3 rounded-md border border-slate-200 bg-white p-4">
      <h2 className="text-lg font-semibold">{en.documentBuilder}</h2>
      <StepChecklist />
      <StepFormBuilder />
      <StepPDFConsolidate />
    </section>
  );
}
