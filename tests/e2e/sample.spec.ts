import { test } from "@playwright/test";
import App from "../../src/app/app";

test("page should has the 'Example Domain' title", async ({ page }) => {
  const app = new App(page);
  await app.examplePage.open();
  await app.examplePage.expectHasTitle("Example Domain");
});
