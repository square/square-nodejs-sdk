import { array, lazy, object, optional, Schema } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines fields in a ListDisputeEvidence response. */
export interface ListDisputeEvidenceResponse {
  /** The list of evidence previously uploaded to the specified dispute. */
  evidence?: DisputeEvidence[];
  /** Information on errors encountered during the request. */
  errors?: Error[];
}

export const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse> = object(
  {
    evidence: ['evidence', optional(array(lazy(() => disputeEvidenceSchema)))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
