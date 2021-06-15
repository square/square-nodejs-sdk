import { array, lazy, object, optional, Schema } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines the fields in a `DeprecatedCreateDisputeEvidenceFile` response. */
export interface DeprecatedCreateDisputeEvidenceFileResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  evidence?: DisputeEvidence;
}

export const deprecatedCreateDisputeEvidenceFileResponseSchema: Schema<DeprecatedCreateDisputeEvidenceFileResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    evidence: ['evidence', optional(lazy(() => disputeEvidenceSchema))],
  }
);
