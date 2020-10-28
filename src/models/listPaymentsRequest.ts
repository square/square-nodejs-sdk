import { number, object, optional, Schema, string } from '../schema';

/**
 * Retrieves a list of payments taken by the account making the request.
 * Max results per page: 100
 */
export interface ListPaymentsRequest {
  /**
   * Timestamp for the beginning of the reporting period, in RFC 3339 format.
   * Inclusive. Default: The current time minus one year.
   */
  beginTime?: string;
  /**
   * Timestamp for the end of the requested reporting period, in RFC 3339 format.
   * Default: The current time.
   */
  endTime?: string;
  /**
   * The order in which results are listed.
   * - `ASC` - oldest to newest
   * - `DESC` - newest to oldest (default).
   */
  sortOrder?: string;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /**
   * Limit results to the location supplied. By default, results are returned
   * for all locations associated with the merchant.
   */
  locationId?: string;
  /** The exact amount in the total_money for a `Payment`. */
  total?: number;
  /** The last 4 digits of `Payment` card. */
  last4?: string;
  /** The brand of `Payment` card. For example, `VISA` */
  cardBrand?: string;
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
});
