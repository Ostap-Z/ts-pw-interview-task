import { expect } from "@playwright/test";
import type { PostResponse } from "../../src/api/models/post.model";
import { validateSchema } from "../../src/api/schemas/validator";
import { postResponseSchema } from "../../src/api/schemas/post.schema";
import { appFixture } from "../../src/fixtures/fixtures";

appFixture("should create a post", async ({ app }) => {
  const postCreateResponse = await app.api.postsController.create({
    title: "foo",
    body: "bar",
    userId: 1,
  });

  expect(postCreateResponse.status).toBe(201);
});

appFixture("should get a post by id", async ({ app }) => {
  const postResponse = await app.api.postsController.getById(1);
  const postJson = await postResponse.toJson<PostResponse>();

  expect(postResponse.status).toBe(200);
  validateSchema(postJson, postResponseSchema);
});
