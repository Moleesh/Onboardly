/**
 * @module JoineeStatusBadge
 * @description Displays a joinee onboarding status.
 * @author auto
 * @since 1.0.0
 */
export function JoineeStatusBadge({ status }: { status: string }): JSX.Element {
  return <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium">{status}</span>;
}
