import type { APIResponse } from "@playwright/test";
import { HttpResponse } from "../types/http.response";

export class PlaywrightResponse implements HttpResponse {
  public readonly status: number;
  public readonly headers: Record<string, string>;

  public constructor(private readonly response: APIResponse) {
    this.status = this.response.status();
    this.headers = this.response.headers() as Record<string, string>;
  }

  public async toJson<T>(): Promise<T> {
    return await this.response.json();
  }

  public async toText(): Promise<string> {
    return await this.response.text();
  }
}
