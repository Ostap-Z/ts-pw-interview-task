import type { HttpClient } from "../../types/http.client";

abstract class BaseController {
  public constructor(
    public readonly url: string,
    protected readonly client: HttpClient
  ) {
    this.url = url.endsWith("/") ? url : `${url}/`;
  }
}

export default BaseController;
