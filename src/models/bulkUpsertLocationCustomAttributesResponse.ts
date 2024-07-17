import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse,
  bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema,
} from './bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse';
import { Error, errorSchema } from './error';

/**
 * Represents a [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertLocationCustomAttributesResponse {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the
   * same ID as the corresponding request and contains either a `location_id` and `custom_attribute` or an `errors` field.
   */
  values?: Record<
    string,
    BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse
  >;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const bulkUpsertLocationCustomAttributesResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponse> = object(
  {
    values: [
      'values',
      optional(
        dict(
          lazy(
            () =>
              bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema
          )
        )
      ),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
