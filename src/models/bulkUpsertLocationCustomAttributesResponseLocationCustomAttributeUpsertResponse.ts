import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/** Represents a response for an individual upsert request in a [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes) operation. */
export interface BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse {
  /** The ID of the location associated with the custom attribute. */
  locationId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
}

export const bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse> = object(
  {
    locationId: ['location_id', optional(string())],
    customAttribute: [
      'custom_attribute',
      optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
