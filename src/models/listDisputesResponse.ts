import { array, lazy, object, optional, Schema, string } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines fields in a `ListDisputes` response. */
export interface ListDisputesResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The list of disputes. */
  disputes?: Dispute[];
  /**
   * The pagination cursor to be used in a subsequent request.
   * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listDisputesResponseSchema: Schema<ListDisputesResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  disputes: ['disputes', optional(array(lazy(() => disputeSchema)))],
  cursor: ['cursor', optional(string())],
});
