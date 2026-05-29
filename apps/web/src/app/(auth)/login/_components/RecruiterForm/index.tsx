/**
 * @module RecruiterForm
 * @description Supabase recruiter login form shell.
 * @author auto
 * @since 1.0.0
 */
"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { Button } from "@onboarding/ui";
import styles from "@/app/(auth)/login/_styles/AuthForm.module.scss";
import { en } from "@/i18n/en";
import { loginRecruiter } from "@/lib/apiClient";
import { useSessionStore } from "@/stores/sessionStore";

/**
 * Renders recruiter authentication controls.
 * @returns Recruiter login form.
 */
export function RecruiterForm(): JSX.Element {
  const router = useRouter();
  const setSession = useSessionStore((state) => state.setSession);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles recruiter sign-in form submission.
   * @param event - Form submit event.
   */
  async function submit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const session = await loginRecruiter(email);
      setSession("recruiter", session.token);
      router.push(session.redirectTo);
    } catch {
      setMessage(en.loginEmailError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.header}>
        <h2 className={styles.title}>{en.loginRecruiterTitle}</h2>
        <p className={styles.copy}>{en.loginRecruiterCopy}</p>
      </div>
      <label className={styles.field}>
        <span className={styles.label}>{en.loginEmailLabel}</span>
        <input
          className={styles.input}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="recruiter@company.com"
          type="email"
          value={email}
        />
      </label>
      {message ? (
        <div className={`${styles.message} ${message === en.loginEmailError ? styles.error : ""}`}>
          {message}
        </div>
      ) : null}
      <Button className={styles.button} disabled={isSubmitting} type="submit">
        <LogIn size={16} />
        {isSubmitting ? en.redirecting : en.loginRecruiterCta}
      </Button>
    </form>
  );
}
