import type { Serializable } from "node:child_process";
import type { APIRequestContext } from "@playwright/test";
import type { HttpClient } from "../types/http.client";
import type { HttpResponse } from "../types/http.response";
import { PlaywrightResponse } from "../adapters/playwright.response";

class PlaywrightClient implements HttpClient {
  public constructor(private readonly request: APIRequestContext) {}

  public async post(
    url: string,
    payload?: Serializable,
    headers?: Record<string, string>
  ): Promise<HttpResponse> {
    const response = await this.request.post(url, {
      data: payload,
      headers: headers,
    });
    return new PlaywrightResponse(response);
  }

  public async get(
    url: string,
    headers?: Record<string, string>
  ): Promise<HttpResponse> {
    const response = await this.request.get(url, {
      headers: headers,
    });
    return new PlaywrightResponse(response);
  }
}

export default PlaywrightClient;
