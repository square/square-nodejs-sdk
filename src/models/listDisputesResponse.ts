import { array, lazy, object, optional, Schema, string } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines fields in a ListDisputes response. */
export interface ListDisputesResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The list of Disputes. */
  disputes?: Dispute[];
  /**
   * The pagination cursor to be used in a subsequent request.
   * If unset, this is the final response.
   * For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
   */
  cursor?: string;
}

export const listDisputesResponseSchema: Schema<ListDisputesResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  disputes: ['disputes', optional(array(lazy(() => disputeSchema)))],
  cursor: ['cursor', optional(string())],
});
