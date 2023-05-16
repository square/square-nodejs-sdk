import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/** Represents a response for an individual upsert request in a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes) operation. */
export interface BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse {
  /** The ID of the merchant associated with the custom attribute. */
  merchantId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
}

export const bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema: Schema<BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse> = object(
  {
    merchantId: ['merchant_id', optional(string())],
    customAttribute: [
      'custom_attribute',
      optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
