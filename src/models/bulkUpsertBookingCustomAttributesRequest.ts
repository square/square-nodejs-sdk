import { dict, lazy, object, Schema } from '../schema';
import {
  BookingCustomAttributeUpsertRequest,
  bookingCustomAttributeUpsertRequestSchema,
} from './bookingCustomAttributeUpsertRequest';

/** Represents a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes) request. */
export interface BulkUpsertBookingCustomAttributesRequest {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an
   * arbitrary ID that is unique for this `BulkUpsertBookingCustomAttributes` request and the
   * information needed to create or update a custom attribute.
   */
  values: Record<string, BookingCustomAttributeUpsertRequest>;
}

export const bulkUpsertBookingCustomAttributesRequestSchema: Schema<BulkUpsertBookingCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(lazy(() => bookingCustomAttributeUpsertRequestSchema)),
    ],
  }
);
