import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/**
 * Defines the fields that are included in the response body of
 * a request to the [ListPayments](#endpoint-payments-listpayments) endpoint.
 */
export interface ListPaymentsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested list of `Payment`s. */
  payments?: Payment[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
}

export const listPaymentsResponseSchema: Schema<ListPaymentsResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  payments: ['payments', optional(array(lazy(() => paymentSchema)))],
  cursor: ['cursor', optional(string())],
});
