import { test, expect } from "@playwright/test";
import App from "../../src/app/app";
import type { PostResponse } from "../../src/api/models/post.model";
import { validateSchema } from "../../src/api/schemas/validator";
import { postResponseSchema } from "../../src/api/schemas/post.schema";

test("should create a post", async ({ page }) => {
  const app = new App(page);
  const postCreateResponse = await app.api.postsController.create({
    title: "foo",
    body: "bar",
    userId: 1,
  });

  expect(postCreateResponse.status).toBe(201);
});

test("should get a post by id", async ({ page }) => {
  const app = new App(page);
  const postResponse = await app.api.postsController.getById(1);
  const postJson = await postResponse.toJson<PostResponse>();

  expect(postResponse.status).toBe(200);
  validateSchema(postJson, postResponseSchema);
});
