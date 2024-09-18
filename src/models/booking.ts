import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import {
  AppointmentSegment,
  appointmentSegmentSchema,
} from './appointmentSegment';
import {
  BookingCreatorDetails,
  bookingCreatorDetailsSchema,
} from './bookingCreatorDetails';

/**
 * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
 * at a given location to a requesting customer in one or more appointment segments.
 */
export interface Booking {
  /** A unique ID of this object representing a booking. */
  id?: string;
  /** The revision number for the booking used for optimistic concurrency. */
  version?: number;
  /** Supported booking statuses. */
  status?: string;
  /** The RFC 3339 timestamp specifying the creation time of this booking. */
  createdAt?: string;
  /** The RFC 3339 timestamp specifying the most recent update time of this booking. */
  updatedAt?: string;
  /** The RFC 3339 timestamp specifying the starting time of this booking. */
  startAt?: string | null;
  /** The ID of the [Location](entity:Location) object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed. */
  locationId?: string | null;
  /** The ID of the [Customer](entity:Customer) object representing the customer receiving the booked service. */
  customerId?: string | null;
  /** The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant [CatalogObject](entity:CatalogObject) instance. */
  customerNote?: string | null;
  /**
   * The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific [CatalogObject](entity:CatalogObject) instance.
   * This field should not be visible to customers.
   */
  sellerNote?: string | null;
  /** A list of appointment segments for this booking. */
  appointmentSegments?: AppointmentSegment[] | null;
  /**
   * Additional time at the end of a booking.
   * Applications should not make this field visible to customers of a seller.
   */
  transitionTimeMinutes?: number;
  /** Whether the booking is of a full business day. */
  allDay?: boolean;
  /** Supported types of location where service is provided. */
  locationType?: string;
  /** Information about a booking creator. */
  creatorDetails?: BookingCreatorDetails;
  /** Supported sources a booking was created from. */
  source?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
}

export const bookingSchema: Schema<Booking> = object({
  id: ['id', optional(string())],
  version: ['version', optional(number())],
  status: ['status', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  startAt: ['start_at', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  customerId: ['customer_id', optional(nullable(string()))],
  customerNote: ['customer_note', optional(nullable(string()))],
  sellerNote: ['seller_note', optional(nullable(string()))],
  appointmentSegments: [
    'appointment_segments',
    optional(nullable(array(lazy(() => appointmentSegmentSchema)))),
  ],
  transitionTimeMinutes: ['transition_time_minutes', optional(number())],
  allDay: ['all_day', optional(boolean())],
  locationType: ['location_type', optional(string())],
  creatorDetails: [
    'creator_details',
    optional(lazy(() => bookingCreatorDetailsSchema)),
  ],
  source: ['source', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
});
