import { array, lazy, object, optional, Schema } from '../schema';
import { Dispute, disputeSchema } from './dispute';
import { Error, errorSchema } from './error';

/** Defines the fields in an `AcceptDispute` response. */
export interface AcceptDisputeResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a [dispute](https://developer.squareup.com/docs/disputes-api/overview) a cardholder initiated with their bank. */
  dispute?: Dispute;
}

export const acceptDisputeResponseSchema: Schema<AcceptDisputeResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    dispute: ['dispute', optional(lazy(() => disputeSchema))],
  }
);
