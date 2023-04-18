import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';

/**
 * Represents an individual upsert request in a [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes)
 * request. An individual request contains a customer ID, the custom attribute to create or update,
 * and an optional idempotency key.
 */
export interface BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest {
  /** The ID of the target [customer profile](entity:Customer). */
  customerId: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this individual upsert request, used to ensure idempotency.
   * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
}

export const bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest> = object(
  {
    customerId: ['customer_id', string()],
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  }
);
