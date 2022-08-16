import { array, lazy, object, optional, Schema } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines fields in a `RetrieveDispute` response. */
export interface RetrieveDisputeResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
  dispute?: Dispute;
}

export const retrieveDisputeResponseSchema: Schema<RetrieveDisputeResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    dispute: ['dispute', optional(lazy(() => disputeSchema))],
  }
);
