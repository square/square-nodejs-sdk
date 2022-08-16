import { array, lazy, object, optional, Schema, string } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines the fields in a `ListDisputeEvidence` response. */
export interface ListDisputeEvidenceResponse {
  /** The list of evidence previously uploaded to the specified dispute. */
  evidence?: DisputeEvidence[];
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /**
   * The pagination cursor to be used in a subsequent request.
   * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse> = object(
  {
    evidence: ['evidence', optional(array(lazy(() => disputeEvidenceSchema)))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
