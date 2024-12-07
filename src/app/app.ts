import { type Page } from "@playwright/test";
import API from "../api/api";
import PlaywrightClient from "../api/clients/playwright.client";
import ExamplePage from "../pages/example.page";

class App {
  public readonly examplePage = new ExamplePage(this.page);
  public readonly api = new API(new PlaywrightClient(this.page.request));

  public constructor(private readonly page: Page) {}
}

export default App;
