import { appFixture } from "../../src/fixtures/fixtures";

appFixture("page should has the 'Example Domain' title", async ({ app }) => {
  await app.examplePage.open();
  await app.examplePage.expectHasTitle("Example Domain");
});
