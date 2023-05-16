import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';

/**
 * Represents an individual upsert request in a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes)
 * request. An individual request contains a merchant ID, the custom attribute to create or update,
 * and an optional idempotency key.
 */
export interface BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest {
  /** The ID of the target [merchant](entity:Merchant). */
  merchantId: string;
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

export const bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest> = object(
  {
    merchantId: ['merchant_id', string()],
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
  }
);
