import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';

/** Represents an upsert request for an order custom attribute. */
export interface UpsertOrderCustomAttributeRequest {
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this request, used to ensure idempotency.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
}

export const upsertOrderCustomAttributeRequestSchema: Schema<UpsertOrderCustomAttributeRequest> = object(
  {
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  }
);
