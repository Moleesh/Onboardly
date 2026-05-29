/**
 * @module JoineeManager
 * @description Recruiter joinee assignment and monitoring panel.
 * @author auto
 * @since 1.0.0
 */
"use client";

import { CreateJoineeForm } from "./CreateJoineeForm";
import { DocumentViewer } from "./DocumentViewer";
import { JoineeList } from "./JoineeList";

export function JoineeManager(): JSX.Element {
  return (
    <section className="grid gap-3 rounded-md border border-slate-200 bg-white p-4">
      <CreateJoineeForm />
      <JoineeList />
      <DocumentViewer />
    </section>
  );
}
