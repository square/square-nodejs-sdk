import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AppointmentSegment,
  appointmentSegmentSchema,
} from './appointmentSegment';

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
  /** The timestamp specifying the creation time of this booking. */
  createdAt?: string;
  /** The timestamp specifying the most recent update time of this booking. */
  updatedAt?: string;
  /** The timestamp specifying the starting time of this booking. */
  startAt?: string;
  /** The ID of the [Location](#type-location) object representing the location where the booked service is provided. */
  locationId?: string;
  /** The ID of the [Customer](#type-Customer) object representing the customer attending this booking */
  customerId?: string;
  /** The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant [CatalogObject](#type-CatalogObject) instance. */
  customerNote?: string;
  /**
   * The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific [CatalogObject](#type-CatalogObject) instance.
   * This field should not be visible to customers.
   */
  sellerNote?: string;
  /** A list of appointment segments for this booking. */
  appointmentSegments?: AppointmentSegment[];
}

export const bookingSchema: Schema<Booking> = object({
  id: ['id', optional(string())],
  version: ['version', optional(number())],
  status: ['status', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  startAt: ['start_at', optional(string())],
  locationId: ['location_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  customerNote: ['customer_note', optional(string())],
  sellerNote: ['seller_note', optional(string())],
  appointmentSegments: [
    'appointment_segments',
    optional(array(lazy(() => appointmentSegmentSchema))),
  ],
});
