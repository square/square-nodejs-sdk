import { array, lazy, object, optional, Schema } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines fields in a AcceptDispute response. */
export interface AcceptDisputeResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents a dispute a cardholder initiated with their bank. */
  dispute?: Dispute;
}

export const acceptDisputeResponseSchema: Schema<AcceptDisputeResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    dispute: ['dispute', optional(lazy(() => disputeSchema))],
  }
);
