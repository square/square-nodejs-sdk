import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/** Defines the fields in a `DeleteDisputeEvidence` response. */
export interface DeleteDisputeEvidenceResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const deleteDisputeEvidenceResponseSchema: Schema<DeleteDisputeEvidenceResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
