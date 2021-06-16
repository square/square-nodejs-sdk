import { array, lazy, object, optional, Schema } from '../schema';
import { DisputeEvidence, disputeEvidenceSchema } from './disputeEvidence';
import { Error, errorSchema } from './error';

/** Defines the fields in a `DeprecatedCreateDisputeEvidenceText` response. */
export interface DeprecatedCreateDisputeEvidenceTextResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  evidence?: DisputeEvidence;
}

export const deprecatedCreateDisputeEvidenceTextResponseSchema: Schema<DeprecatedCreateDisputeEvidenceTextResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    evidence: ['evidence', optional(lazy(() => disputeEvidenceSchema))],
  }
);
