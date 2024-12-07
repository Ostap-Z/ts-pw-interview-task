import { Locator, expect } from "@playwright/test";
import BasePage from "./base.page";

class ExamplePage extends BasePage {
  public override readonly url = "https://example.com";
  private readonly heading: Locator = this.page.locator("h1");

  public override async expectLoaded(options?: {
    message?: string;
    timeout?: number;
  }): Promise<void> {
    const expectMessage = options?.message ?? "Example page is not opened";
    const expectTimeout = options?.timeout ?? 10_000;

    await expect(this.heading, expectMessage).toBeVisible({
      timeout: expectTimeout,
    });
  }
}

export default ExamplePage;
