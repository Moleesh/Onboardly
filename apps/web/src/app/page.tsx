/**
 * @module HomePage
 * @description Redirect-style landing page with operational entry links.
 * @author auto
 * @since 1.0.0
 */
import Link from "next/link";
import { ClipboardCheck, FileSignature, ShieldCheck } from "lucide-react";
import previewStyles from "@/app/_styles/HomePreview.module.scss";
import styles from "@/app/_styles/HomePage.module.scss";
import { en } from "@/i18n/en";

/**
 * Renders the application entry screen.
 * @returns Home page element.
 */
export default function Page(): JSX.Element {
  return (
    <main className={styles.shell}>
      <header className={styles.topbar}>
        <div className={styles.brand}>
          <span className={styles.brandName}>{en.appName}</span>
          <span className={styles.brandMeta}>{en.homeWorkspace}</span>
        </div>
        <span className={styles.status}>
          <ShieldCheck size={16} />
          {en.homeSecurityStatus}
        </span>
      </header>

      <section className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{en.homeEyebrow}</span>
          <h1 className={styles.title}>{en.homeTitle}</h1>
          <p className={styles.copy}>{en.homeCopy}</p>
          <div className={styles.actions}>
            <Link className={`${styles.action} ${styles.primary}`} href="/login?role=recruiter">
              <span className={styles.iconBox}>
                <ClipboardCheck size={20} />
              </span>
              <span className={styles.actionText}>
                <span className={styles.actionTitle}>{en.loginRecruiter}</span>
                <span className={styles.actionMeta}>{en.homeRecruiterAction}</span>
              </span>
            </Link>
            <Link className={styles.action} href="/login?role=joinee">
              <span className={styles.iconBox}>
                <FileSignature size={20} />
              </span>
              <span className={styles.actionText}>
                <span className={styles.actionTitle}>{en.loginJoinee}</span>
                <span className={styles.actionMeta}>{en.homeJoineeAction}</span>
              </span>
            </Link>
          </div>
        </div>

        <aside className={previewStyles.preview} aria-label={en.homePreviewLabel}>
          <div className={previewStyles.previewHeader}>
            <span className={previewStyles.previewTitle}>{en.recruiterDashboard}</span>
            <span className={previewStyles.pill}>{en.homeLivePreview}</span>
          </div>
          <div className={previewStyles.previewGrid}>
            <div className={previewStyles.metricRow}>
              <div className={previewStyles.metric}>
                <span className={previewStyles.metricValue}>18</span>
                <span className={previewStyles.metricLabel}>{en.homeMetricPending}</span>
              </div>
              <div className={previewStyles.metric}>
                <span className={previewStyles.metricValue}>7</span>
                <span className={previewStyles.metricLabel}>{en.homeMetricReview}</span>
              </div>
              <div className={previewStyles.metric}>
                <span className={previewStyles.metricValue}>42</span>
                <span className={previewStyles.metricLabel}>{en.homeMetricDone}</span>
              </div>
            </div>
            <div className={previewStyles.task}>
              <div>
                <div className={previewStyles.taskName}>JN-2026-00042</div>
                <div className={previewStyles.taskMeta}>{en.homeTaskUpload}</div>
              </div>
              <span className={previewStyles.pill}>IN PROGRESS</span>
            </div>
            <div className={previewStyles.task}>
              <div>
                <div className={previewStyles.taskName}>Employment packet v3</div>
                <div className={previewStyles.taskMeta}>{en.homeTaskTemplate}</div>
              </div>
              <span className={previewStyles.pill}>READY</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
