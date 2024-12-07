interface HttpResponse {
  readonly status: number;
  readonly headers: Record<string, string>;
  toJson<T>(): Promise<T>;
  toText(): Promise<string>;
}

export type { HttpResponse };
