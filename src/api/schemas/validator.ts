import Ajv, { JSONSchemaType } from "ajv";
import { expect } from "@playwright/test";

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: true,
});

export function validateSchema<T>(
  data: unknown,
  schema: JSONSchemaType<T>
): void {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    const errors = validate.errors?.map((error) => ({
      path: error.instancePath,
      keyword: error.keyword,
      message: error.message,
      params: error.params,
    }));
    expect
      .soft(
        valid,
        `Schema validation failed:\n${JSON.stringify(errors, null, 2)}`
      )
      .toBeTruthy();
  }
}
