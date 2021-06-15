import { object, optional, Schema, string } from '../schema';

/** Defines the parameters for a `ListDisputeEvidence` request. */
export interface ListDisputeEvidenceRequest {
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
   */
  cursor?: string;
}

export const listDisputeEvidenceRequestSchema: Schema<ListDisputeEvidenceRequest> = object(
  { cursor: ['cursor', optional(string())] }
);
