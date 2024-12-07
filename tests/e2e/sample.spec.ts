import { test, expect } from "@playwright/test";

test("page should has the 'Example Domain' title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Example Domain");
});
