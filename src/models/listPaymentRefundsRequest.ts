import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * Describes a request to list refunds using
 * [ListPaymentRefunds]($e/Refunds/ListPaymentRefunds).
 * The maximum results per page is 100.
 */
export interface ListPaymentRefundsRequest {
  /**
   * Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339
   * format.  The range is determined using the `created_at` field for each `PaymentRefund`.
   * Default: The current time minus one year.
   */
  beginTime?: string | null;
  /**
   * Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339
   * format.  The range is determined using the `created_at` field for each `PaymentRefund`.
   * Default: The current time.
   */
  endTime?: string | null;
  /**
   * The order in which results are listed by `PaymentRefund.created_at`:
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string | null;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * Limit results to the location supplied. By default, results are returned
   * for all locations associated with the seller.
   */
  locationId?: string | null;
  /**
   * If provided, only refunds with the given status are returned.
   * For a list of refund status values, see [PaymentRefund](entity:PaymentRefund).
   * Default: If omitted, refunds are returned regardless of their status.
   */
  status?: string | null;
  /**
   * If provided, only returns refunds whose payments have the indicated source type.
   * Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`.
   * For information about these payment source types, see
   * [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   * Default: If omitted, refunds are returned regardless of the source type.
   */
  sourceType?: string | null;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * If the supplied value is greater than 100, no more than 100 results are returned.
   * Default: 100
   */
  limit?: number | null;
}

export const listPaymentRefundsRequestSchema: Schema<ListPaymentRefundsRequest> = object(
  {
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', optional(nullable(string()))],
    sourceType: ['source_type', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
  }
);
