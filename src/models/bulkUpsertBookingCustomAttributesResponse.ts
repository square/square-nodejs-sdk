import { array, dict, lazy, object, optional, Schema } from '../schema';
import {
  BookingCustomAttributeUpsertResponse,
  bookingCustomAttributeUpsertResponseSchema,
} from './bookingCustomAttributeUpsertResponse';
import { Error, errorSchema } from './error';

/**
 * Represents a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertBookingCustomAttributesResponse {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the
   * same ID as the corresponding request and contains either a `booking_id` and `custom_attribute` or an `errors` field.
   */
  values?: Record<string, BookingCustomAttributeUpsertResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const bulkUpsertBookingCustomAttributesResponseSchema: Schema<BulkUpsertBookingCustomAttributesResponse> = object(
  {
    values: [
      'values',
      optional(dict(lazy(() => bookingCustomAttributeUpsertResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
