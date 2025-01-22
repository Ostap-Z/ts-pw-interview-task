import { Locator, expect } from "@playwright/test";
import BasePage from "./base.page";
import { step } from "../reporter/step";

class ExamplePage extends BasePage {
  public override readonly url = "/";
  private readonly heading: Locator = this.page.locator("h1");

  @step()
  public override async expectLoaded(options?: {
    message?: string;
    timeout?: number;
  }): Promise<void> {
    const expectMessage = options?.message ?? "Example page should be opened";
    const expectTimeout = options?.timeout ?? 10_000;

    await expect(this.heading, expectMessage).toBeVisible({
      timeout: expectTimeout,
    });
  }
}

export default ExamplePage;
