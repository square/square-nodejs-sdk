import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Represents an individual delete response in a [BulkDeleteLocationCustomAttributes]($e/LocationCustomAttributes/BulkDeleteLocationCustomAttributes)
 * request.
 */
export interface BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse {
  /** The ID of the location associated with the custom attribute. */
  locationId?: string;
  /** Errors that occurred while processing the individual LocationCustomAttributeDeleteRequest request */
  errors?: Error[];
}

export const bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema: Schema<BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse> = object(
  {
    locationId: ['location_id', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
