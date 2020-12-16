import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Defines the fields in a `RemoveDisputeEvidence` response. */
export interface RemoveDisputeEvidenceResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const removeDisputeEvidenceResponseSchema: Schema<RemoveDisputeEvidenceResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
