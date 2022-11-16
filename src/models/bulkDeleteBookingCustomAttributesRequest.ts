import { dict, lazy, object, Schema } from '../schema';
import {
  BookingCustomAttributeDeleteRequest,
  bookingCustomAttributeDeleteRequestSchema,
} from './bookingCustomAttributeDeleteRequest';

/** Represents a [BulkDeleteBookingCustomAttributes]($e/BookingCustomAttributes/BulkDeleteBookingCustomAttributes) request. */
export interface BulkDeleteBookingCustomAttributesRequest {
  /**
   * A map containing 1 to 25 individual Delete requests. For each request, provide an
   * arbitrary ID that is unique for this `BulkDeleteBookingCustomAttributes` request and the
   * information needed to delete a custom attribute.
   */
  values: Record<string, BookingCustomAttributeDeleteRequest>;
}

export const bulkDeleteBookingCustomAttributesRequestSchema: Schema<BulkDeleteBookingCustomAttributesRequest> = object(
  {
    values: [
      'values',
      dict(lazy(() => bookingCustomAttributeDeleteRequestSchema)),
    ],
  }
);
