import type { HttpClient } from "./types/http.client";
import PostsController from "./controllers/posts.controller";

class API {
  public constructor(private readonly client: HttpClient) {}

  public readonly postsController = new PostsController(
    process.env.API_BASE_URL ?? "http://localhost:3000/api",
    this.client
  );
}

export default API;
