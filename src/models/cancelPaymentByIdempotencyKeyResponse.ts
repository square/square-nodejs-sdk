import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';

/**
 * Defines the response returned by
 * [CancelPaymentByIdempotencyKey](#endpoint-payments-cancelpaymentbyidempotencykey).
 * On success, `errors` is empty.
 */
export interface CancelPaymentByIdempotencyKeyResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse> = object(
  { errors: ['errors', optional(array(lazy(() => errorSchema)))] }
);
