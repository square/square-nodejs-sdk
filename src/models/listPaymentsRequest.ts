import { number, object, optional, Schema, string } from '../schema';

/**
 * Retrieves a list of payments taken by the account making the request.
 * The maximum results per page is 100.
 */
export interface ListPaymentsRequest {
  /**
   * The timestamp for the beginning of the reporting period, in RFC 3339 format.
   * Inclusive. Default: The current time minus one year.
   */
  beginTime?: string;
  /**
   * The timestamp for the end of the reporting period, in RFC 3339 format.
   * Default: The current time.
   */
  endTime?: string;
  /**
   * The order in which results are listed:
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
   */
  cursor?: string;
  /**
   * Limit results to the location supplied. By default, results are returned
   * for the default (main) location associated with the seller.
   */
  locationId?: string;
  /** The exact amount in the `total_money` for a payment. */
  total?: number;
  /** The last four digits of a payment card. */
  last4?: string;
  /** The brand of the payment card (for example, VISA). */
  cardBrand?: string;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * The default value of 100 is also the maximum allowed value. If the provided value is
   * greater than 100, it is ignored and the default value is used instead.
   * Default: `100`
   */
  limit?: number;
}

export const listPaymentsRequestSchema: Schema<ListPaymentsRequest> = object({
  beginTime: ['begin_time', optional(string())],
  endTime: ['end_time', optional(string())],
  sortOrder: ['sort_order', optional(string())],
  cursor: ['cursor', optional(string())],
  locationId: ['location_id', optional(string())],
  total: ['total', optional(number())],
  last4: ['last_4', optional(string())],
  cardBrand: ['card_brand', optional(string())],
  limit: ['limit', optional(number())],
});
