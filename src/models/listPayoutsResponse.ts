import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Payout, payoutSchema } from './payout';

/** The response to retrieve payout records entries. */
export interface ListPayoutsResponse {
  /** The requested list of payouts. */
  payouts?: Payout[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const listPayoutsResponseSchema: Schema<ListPayoutsResponse> = object({
  payouts: ['payouts', optional(array(lazy(() => payoutSchema)))],
  cursor: ['cursor', optional(string())],
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
