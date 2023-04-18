import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { PaymentRefund, paymentRefundSchema } from './paymentRefund';

/**
 * Defines the response returned by [ListPaymentRefunds]($e/Refunds/ListPaymentRefunds).
 * Either `errors` or `refunds` is present in a given response (never both).
 */
export interface ListPaymentRefundsResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The list of requested refunds. */
  refunds?: PaymentRefund[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listPaymentRefundsResponseSchema: Schema<ListPaymentRefundsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refunds: ['refunds', optional(array(lazy(() => paymentRefundSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
