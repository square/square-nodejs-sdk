import { object, optional, Schema, string } from '../schema';

/**
 * Retrieves a list of refunds for the account making the request.
 * Max results per page: 100
 */
export interface ListPaymentRefundsRequest {
  /**
   * Timestamp for the beginning of the requested reporting period, in RFC 3339 format.
   * Default: The current time minus one year.
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
  /**
   * If provided, only refunds with the given status are returned.
   * For a list of refund status values, see [PaymentRefund](#type-paymentrefund).
   * Default: If omitted refunds are returned regardless of status.
   */
  status?: string;
  /**
   * If provided, only refunds with the given source type are returned.
   * - `CARD` - List refunds only for payments where card was specified as payment
   * source.
   * Default: If omitted refunds are returned regardless of source type.
   */
  sourceType?: string;
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
  }
);
