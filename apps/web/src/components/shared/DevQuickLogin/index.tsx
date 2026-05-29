/**
 * @module DevQuickLogin
 * @description Development-only quick login helper.
 * @author auto
 * @since 1.0.0
 */
export function DevQuickLogin(): JSX.Element | null {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }
  return (
    <button className="rounded-md border border-dashed px-3 py-2 text-sm" type="button">
      Dev quick login
    </button>
  );
}
