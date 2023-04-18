import { nullable, number, object, optional, Schema, string } from '../schema';

/** A request to retrieve payout records. */
export interface ListPayoutsRequest {
  /**
   * The ID of the location for which to list the payouts.
   * By default, payouts are returned for the default (main) location associated with the seller.
   */
  locationId?: string | null;
  /** Payout status types */
  status?: string;
  /**
   * The timestamp for the beginning of the payout creation time, in RFC 3339 format.
   * Inclusive. Default: The current time minus one year.
   */
  beginTime?: string | null;
  /**
   * The timestamp for the end of the payout creation time, in RFC 3339 format.
   * Default: The current time.
   */
  endTime?: string | null;
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  sortOrder?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   * If request parameters change between requests, subsequent results may contain duplicates or missing records.
   */
  cursor?: string | null;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * The default value of 100 is also the maximum allowed value. If the provided value is
   * greater than 100, it is ignored and the default value is used instead.
   * Default: `100`
   */
  limit?: number | null;
}

export const listPayoutsRequestSchema: Schema<ListPayoutsRequest> = object({
  locationId: ['location_id', optional(nullable(string()))],
  status: ['status', optional(string())],
  beginTime: ['begin_time', optional(nullable(string()))],
  endTime: ['end_time', optional(nullable(string()))],
  sortOrder: ['sort_order', optional(string())],
  cursor: ['cursor', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
});
