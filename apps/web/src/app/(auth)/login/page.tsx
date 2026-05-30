/**
 * @module LoginPage
 * @description Role-aware login page for recruiters and joinees.
 * @author auto
 * @since 1.0.0
 */
import { LoginPanel } from "@/app/(auth)/login/_components/LoginPanel";
import { LoginRedirect } from "@/components/shared/LoginRedirect";
import styles from "@/app/(auth)/login/_styles/LoginPage.module.scss";
import { CheckCircle2 } from "lucide-react";
import { en } from "@/i18n/en";

/**
 * Renders the login page.
 * @returns Login page element.
 */
export default function LoginPage({
  searchParams,
}: {
  searchParams?: { role?: string };
}): JSX.Element {
  const initialRole = searchParams?.role === "joinee" ? "joinee" : "recruiter";

  return (
    <main className={styles.shell}>
      <LoginRedirect />
      <section className={styles.layout}>
        <aside className={styles.aside}>
          <span className={styles.eyebrow}>{en.loginEyebrow}</span>
          <h1 className={styles.title}>{en.loginTitle}</h1>
          <p className={styles.copy}>{en.loginCopy}</p>
          <ul className={styles.checklist}>
            <li>
              <CheckCircle2 size={18} />
              {en.loginPointAudit}
            </li>
            <li>
              <CheckCircle2 size={18} />
              {en.loginPointSigned}
            </li>
            <li>
              <CheckCircle2 size={18} />
              {en.loginPointRealtime}
            </li>
          </ul>
        </aside>
        <div className={styles.panel}>
          <LoginPanel initialRole={initialRole} />
        </div>
      </section>
    </main>
  );
}
