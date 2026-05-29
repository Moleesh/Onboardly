/**
 * @module RoleBadge
 * @description Displays the active user role.
 * @author auto
 * @since 1.0.0
 */
export function RoleBadge({ role }: { role: string }): JSX.Element {
  return <span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold">{role}</span>;
}
