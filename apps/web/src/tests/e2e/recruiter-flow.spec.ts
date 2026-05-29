/**
 * @module RecruiterFlowE2E
 * @description End-to-end test for recruiter dashboard access.
 * @author auto
 * @since 1.0.0
 */
import { expect, test } from "@playwright/test";

test("recruiter dashboard renders", async ({ page }) => {
  await page.goto("/login?role=recruiter");
  await page.getByPlaceholder("recruiter@company.com").fill("recruiter@example.com");
  await page.getByRole("button", { name: /Request sign-in link/ }).click();
  await page.waitForURL("**/dashboard");
  await expect(page.getByText("Recruiter dashboard")).toBeVisible();
});
