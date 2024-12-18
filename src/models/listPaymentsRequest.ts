import {
  bigint,
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * Describes a request to list payments using
 * [ListPayments]($e/Payments/ListPayments).
 * The maximum results per page is 100.
 */
export interface ListPaymentsRequest {
  /**
   * Indicates the start of the time range to retrieve payments for, in RFC 3339 format.
   * The range is determined using the `created_at` field for each Payment.
   * Inclusive. Default: The current time minus one year.
   */
  beginTime?: string | null;
  /**
   * Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The
   * range is determined using the `created_at` field for each Payment.
   * Default: The current time.
   */
  endTime?: string | null;
  /**
   * The order in which results are listed by `ListPaymentsRequest.sort_field`:
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
   * for the default (main) location associated with the seller.
   */
  locationId?: string | null;
  /** The exact amount in the `total_money` for a payment. */
  total?: bigint | null;
  /** The last four digits of a payment card. */
  last4?: string | null;
  /** The brand of the payment card (for example, VISA). */
  cardBrand?: string | null;
  /**
   * The maximum number of results to be returned in a single page.
   * It is possible to receive fewer results than the specified limit on a given page.
   * The default value of 100 is also the maximum allowed value. If the provided value is
   * greater than 100, it is ignored and the default value is used instead.
   * Default: `100`
   */
  limit?: number | null;
  /** Whether the payment was taken offline or not. */
  isOfflinePayment?: boolean | null;
  /**
   * Indicates the start of the time range for which to retrieve offline payments, in RFC 3339
   * format for timestamps. The range is determined using the
   * `offline_payment_details.client_created_at` field for each Payment. If set, payments without a
   * value set in `offline_payment_details.client_created_at` will not be returned.
   * Default: The current time.
   */
  offlineBeginTime?: string | null;
  /**
   * Indicates the end of the time range for which to retrieve offline payments, in RFC 3339
   * format for timestamps. The range is determined using the
   * `offline_payment_details.client_created_at` field for each Payment. If set, payments without a
   * value set in `offline_payment_details.client_created_at` will not be returned.
   * Default: The current time.
   */
  offlineEndTime?: string | null;
  /**
   * Indicates the start of the time range to retrieve payments for, in RFC 3339 format.  The
   * range is determined using the `updated_at` field for each Payment.
   */
  updatedAtBeginTime?: string | null;
  /**
   * Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The
   * range is determined using the `updated_at` field for each Payment.
   */
  updatedAtEndTime?: string | null;
  sortField?: string;
}

export const listPaymentsRequestSchema: Schema<ListPaymentsRequest> = object({
  beginTime: ['begin_time', optional(nullable(string()))],
  endTime: ['end_time', optional(nullable(string()))],
  sortOrder: ['sort_order', optional(nullable(string()))],
  cursor: ['cursor', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  total: ['total', optional(nullable(bigint()))],
  last4: ['last_4', optional(nullable(string()))],
  cardBrand: ['card_brand', optional(nullable(string()))],
  limit: ['limit', optional(nullable(number()))],
  isOfflinePayment: ['is_offline_payment', optional(nullable(boolean()))],
  offlineBeginTime: ['offline_begin_time', optional(nullable(string()))],
  offlineEndTime: ['offline_end_time', optional(nullable(string()))],
  updatedAtBeginTime: ['updated_at_begin_time', optional(nullable(string()))],
  updatedAtEndTime: ['updated_at_end_time', optional(nullable(string()))],
  sortField: ['sort_field', optional(string())],
});
