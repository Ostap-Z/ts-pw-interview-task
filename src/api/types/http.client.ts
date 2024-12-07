import type { Serializable } from "node:child_process";
import type { HttpResponse } from "./http.response";

interface HttpClient {
  post(
    url: string,
    payload?: Serializable,
    headers?: Record<string, string>
  ): Promise<HttpResponse>;

  get(url: string, headers?: Record<string, string>): Promise<HttpResponse>;
}

export type { HttpClient };
