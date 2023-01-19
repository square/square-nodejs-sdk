import { object, optional, Schema, string } from '../schema';

/**
 * Represents an individual delete request in a [BulkDeleteLocationCustomAttributes]($e/LocationCustomAttributes/BulkDeleteLocationCustomAttributes)
 * request. An individual request contains an optional ID of the associated custom attribute definition
 * and optional key of the associated custom attribute definition.
 */
export interface BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest {
  /**
   * The key of the associated custom attribute definition.
   * Represented as a qualified key if the requesting app is not the definition owner.
   */
  key?: string;
}

export const bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema: Schema<BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest> = object(
  { key: ['key', optional(string())] }
);
