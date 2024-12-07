import type { HttpResponse } from "../../types/http.response";
import type { Post } from "../models/post.model";
import BaseController from "./base.controller";

class PostsController extends BaseController {
  public async create(post: Post): Promise<HttpResponse> {
    return this.client.post(`${this.url}posts`, post);
  }

  public async getById(id: number): Promise<HttpResponse> {
    return this.client.get(`${this.url}posts/${id}`);
  }
}

export default PostsController;
