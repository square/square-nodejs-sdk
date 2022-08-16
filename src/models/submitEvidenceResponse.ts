import { array, lazy, object, optional, Schema } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines the fields in a `SubmitEvidence` response. */
export interface SubmitEvidenceResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
  dispute?: Dispute;
}

export const submitEvidenceResponseSchema: Schema<SubmitEvidenceResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    dispute: ['dispute', optional(lazy(() => disputeSchema))],
  }
);
