import type { HttpResponse } from "../types/http.response";
import type { Post } from "../models/post.model";
import BaseController from "./base.controller";
import { step } from "../../reporter/step";

class PostsController extends BaseController {
  @step()
  public async create(post: Post): Promise<HttpResponse> {
    return this.client.post(`${this.url}posts`, post);
  }

  @step()
  public async getById(id: number): Promise<HttpResponse> {
    return this.client.get(`${this.url}posts/${id}`);
  }
}

export default PostsController;
