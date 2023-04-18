import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Refund, refundSchema } from './refund';

/**
 * Defines the fields that are included in the response body of
 * a request to the [ListRefunds](api-endpoint:Transactions-ListRefunds) endpoint.
 * One of `errors` or `refunds` is present in a given response (never both).
 */
export interface ListRefundsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** An array of refunds that match your query. */
  refunds?: Refund[];
  /**
   * A pagination cursor for retrieving the next set of results,
   * if any remain. Provide this value as the `cursor` parameter in a subsequent
   * request to this endpoint.
   * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
   */
  cursor?: string;
}

export const listRefundsResponseSchema: Schema<ListRefundsResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  refunds: ['refunds', optional(array(lazy(() => refundSchema)))],
  cursor: ['cursor', optional(string())],
});
