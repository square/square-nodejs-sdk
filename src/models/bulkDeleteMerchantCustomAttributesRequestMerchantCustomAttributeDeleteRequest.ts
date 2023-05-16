import { object, optional, Schema, string } from '../schema';

/**
 * Represents an individual delete request in a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes)
 * request. An individual request contains an optional ID of the associated custom attribute definition
 * and optional key of the associated custom attribute definition.
 */
export interface BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest {
  /**
   * The key of the associated custom attribute definition.
   * Represented as a qualified key if the requesting app is not the definition owner.
   */
  key?: string;
}

export const bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest> = object(
  { key: ['key', optional(string())] }
);
