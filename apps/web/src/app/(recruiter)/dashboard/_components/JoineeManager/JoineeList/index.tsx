/**
 * @module JoineeList
 * @description Lists joinees and onboarding statuses.
 * @author auto
 * @since 1.0.0
 */
import { JoineeStatusBadge } from "./JoineeStatusBadge";

export function JoineeList(): JSX.Element {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between rounded-md border p-3 text-sm">
        <span>JN-2026-00042</span>
        <JoineeStatusBadge status="PENDING" />
      </div>
    </div>
  );
}
