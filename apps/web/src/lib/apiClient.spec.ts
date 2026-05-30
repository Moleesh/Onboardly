/**
 * @module ApiClientTests
 * @description Tests development recruiter credential validation.
 * @author auto
 * @since 1.0.0
 */
import { describe, expect, it } from "vitest";
import { loginRecruiter } from "@/lib/apiClient";

describe("loginRecruiter", () => {
  it("accepts the hard-coded development recruiter", async () => {
    await expect(loginRecruiter("recruiter", "firstday")).resolves.toEqual({
      redirectTo: "/dashboard",
      token: "demo-session-token",
    });
  });

  it("rejects an invalid development password", async () => {
    await expect(loginRecruiter("recruiter", "123456")).rejects.toThrow(
      "Invalid recruiter credentials",
    );
  });
});
