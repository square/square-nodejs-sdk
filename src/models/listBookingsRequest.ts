import { nullable, number, object, optional, Schema, string } from '../schema';

export interface ListBookingsRequest {
  /** The maximum number of results per page to return in a paged response. */
  limit?: number | null;
  /** The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. */
  cursor?: string | null;
  /** The [customer](entity:Customer) for whom to retrieve bookings. If this is not set, bookings for all customers are retrieved. */
  customerId?: string | null;
  /** The team member for whom to retrieve bookings. If this is not set, bookings of all members are retrieved. */
  teamMemberId?: string | null;
  /** The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. */
  locationId?: string | null;
  /** The RFC 3339 timestamp specifying the earliest of the start time. If this is not set, the current time is used. */
  startAtMin?: string | null;
  /** The RFC 3339 timestamp specifying the latest of the start time. If this is not set, the time of 31 days after `start_at_min` is used. */
  startAtMax?: string | null;
}

export const listBookingsRequestSchema: Schema<ListBookingsRequest> = object({
  limit: ['limit', optional(nullable(number()))],
  cursor: ['cursor', optional(nullable(string()))],
  customerId: ['customer_id', optional(nullable(string()))],
  teamMemberId: ['team_member_id', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  startAtMin: ['start_at_min', optional(nullable(string()))],
  startAtMax: ['start_at_max', optional(nullable(string()))],
});
