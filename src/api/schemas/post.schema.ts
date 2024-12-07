import { JSONSchemaType } from "ajv";
import { PostResponse } from "../models/post.model";

export const postResponseSchema: JSONSchemaType<PostResponse> = {
  type: "object",
  properties: {
    id: { type: "number" },
    userId: { type: "number" },
    title: { type: "string" },
    body: { type: "string" },
  },
  required: ["id", "userId", "title", "body"],
  additionalProperties: false,
};
