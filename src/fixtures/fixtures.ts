import { test } from "@playwright/test";
import App from "../app/app";

const appFixture = test.extend<{ app: App }>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});

export { appFixture };
