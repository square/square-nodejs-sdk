import { array, lazy, object, optional, Schema } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines the fields in a `CreateDisputeEvidenceText` response. */
export interface CreateDisputeEvidenceTextResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  evidence?: DisputeEvidence;
}

export const createDisputeEvidenceTextResponseSchema: Schema<CreateDisputeEvidenceTextResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    evidence: ['evidence', optional(lazy(() => disputeEvidenceSchema))],
  }
);
