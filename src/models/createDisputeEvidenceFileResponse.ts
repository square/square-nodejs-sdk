import { array, lazy, object, optional, Schema } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines the fields in a `CreateDisputeEvidenceFile` response. */
export interface CreateDisputeEvidenceFileResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  evidence?: DisputeEvidence;
}

export const createDisputeEvidenceFileResponseSchema: Schema<CreateDisputeEvidenceFileResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    evidence: ['evidence', optional(lazy(() => disputeEvidenceSchema))],
  }
);
