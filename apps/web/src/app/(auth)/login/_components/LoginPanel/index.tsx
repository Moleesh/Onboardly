/**
 * @module LoginPanel
 * @description Coordinates role selection and role-specific login forms.
 * @author auto
 * @since 1.0.0
 */
"use client";

import { useState } from "react";
import { JoineeForm } from "@/app/(auth)/login/_components/JoineeForm";
import { LoginToggle, type LoginRole } from "@/app/(auth)/login/_components/LoginToggle";
import { RecruiterForm } from "@/app/(auth)/login/_components/RecruiterForm";

/**
 * Renders the selected role's login form.
 * @returns Interactive login panel.
 */
export function LoginPanel({
  initialRole = "recruiter",
}: {
  initialRole?: LoginRole;
}): JSX.Element {
  const [role, setRole] = useState<LoginRole>(initialRole);

  return (
    <>
      <LoginToggle selectedRole={role} onRoleChange={setRole} />
      {role === "recruiter" ? <RecruiterForm /> : <JoineeForm />}
    </>
  );
}
