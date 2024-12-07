import { type Page } from "@playwright/test";
import API from "../api/api";
import PlaywrightClient from "../api/clients/playwright.client";

class App {
  public readonly api = new API(new PlaywrightClient(this.page.request));

  public constructor(private readonly page: Page) {}
}

export default App;
