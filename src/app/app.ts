import { type Page } from "@playwright/test";
import API from "../api/api";
import PlaywrightClient from "../api/clients/playwright.client";
import ExamplePage from "../pages/example.page";

class App {
  public readonly examplePage: ExamplePage;
  public readonly api: API;

  public constructor(private readonly page: Page) {
    this.examplePage = new ExamplePage(this.page);
    this.api = new API(new PlaywrightClient(this.page.request));
  }
}

export default App;
