import { expect, type Page } from "@playwright/test";

abstract class BasePage {
  public abstract readonly url: string;

  public abstract expectLoaded(options?: {
    message?: string;
    timeout?: number;
  }): Promise<void>;

  public constructor(protected readonly page: Page) {}

  public async open(url?: string): Promise<void> {
    await this.page.goto(url ?? this.url);
    await this.expectLoaded();
  }

  public async expectHasTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }
}

export default BasePage;
