import { object, Schema, string } from '../schema';

export interface UpdateCatalogImageRequest {
  /**
   * A unique string that identifies this UpdateCatalogImage request.
   * Keys can be any valid string but must be unique for every UpdateCatalogImage request.
   * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
   */
  idempotencyKey: string;
}

export const updateCatalogImageRequestSchema: Schema<UpdateCatalogImageRequest> = object(
  { idempotencyKey: ['idempotency_key', string()] }
);
