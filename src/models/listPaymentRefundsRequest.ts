import { number, object, optional, Schema, string } from '../schema';

/**
 * Retrieves a list of refunds for the account making the request.
 * The maximum results per page is 100.
 */
export interface ListPaymentRefundsRequest {
  /**
   * The timestamp for the beginning of the requested reporting period, in RFC 3339 format.
   * Default: The current time minus one year.
   */
  beginTime?: string;
  /**
   * The timestamp for the end of the requested reporting period, in RFC 3339 format.
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
   * for all locations associated with the seller.
   */
  locationId?: string;
  /**
   * If provided, only refunds with the given status are returned.
   * For a list of refund status values, see [PaymentRefund](#type-paymentrefund).
   * Default: If omitted, refunds are returned regardless of their status.
   */
  status?: string;
  /**
   * If provided, only refunds with the given source type are returned.
   * - `CARD` - List refunds only for payments where `CARD` was specified as the payment
   * source.
   * Default: If omitted, refunds are returned regardless of the source type.
   */
  sourceType?: string;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * If the supplied value is greater than 100, no more than 100 results are returned.
   * Default: 100
   */
  limit?: number;
}

export const listPaymentRefundsRequestSchema: Schema<ListPaymentRefundsRequest> = object(
  {
    beginTime: ['begin_time', optional(string())],
    endTime: ['end_time', optional(string())],
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(string())],
    locationId: ['location_id', optional(string())],
    status: ['status', optional(string())],
    sourceType: ['source_type', optional(string())],
    limit: ['limit', optional(number())],
  }
);
