import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Defines fields in a RemoveDisputeEvidence response. */
export interface RemoveDisputeEvidenceResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
}

export const removeDisputeEvidenceResponseSchema: Schema<RemoveDisputeEvidenceResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
