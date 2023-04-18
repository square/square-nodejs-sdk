import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Refund, refundSchema } from './refund';

/**
 * Defines the fields that are included in the response body of
 * a request to the [CreateRefund](api-endpoint:Transactions-CreateRefund) endpoint.
 * One of `errors` or `refund` is present in a given response (never both).
 */
export interface CreateRefundResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a refund processed for a Square transaction. */
  refund?: Refund;
}

export const createRefundResponseSchema: Schema<CreateRefundResponse> = object({
  errors: ['errors', optional(array(lazy(() => errorSchema)))],
  refund: ['refund', optional(lazy(() => refundSchema))],
});
