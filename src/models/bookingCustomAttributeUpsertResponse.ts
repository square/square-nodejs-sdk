import { array, lazy, object, optional, Schema, string } from '../schema';
import { CustomAttribute, customAttributeSchema } from './customAttribute';
import { Error, errorSchema } from './error';

/** Represents a response for an individual upsert request in a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes) operation. */
export interface BookingCustomAttributeUpsertResponse {
  /** The ID of the [booking](entity:Booking) associated with the custom attribute. */
  bookingId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
}

export const bookingCustomAttributeUpsertResponseSchema: Schema<BookingCustomAttributeUpsertResponse> = object(
  {
    bookingId: ['booking_id', optional(string())],
    customAttribute: [
      'custom_attribute',
      optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
