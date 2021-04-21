import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/**
 * Defines the response returned by [CreatePayment]($e/Payments/CreatePayment).
 * If there are errors processing the request, the `payment` field might not be
 * present, or it might be present with a status of `FAILED`.
 */
export interface CreatePaymentResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
}

export const createPaymentResponseSchema: Schema<CreatePaymentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payment: ['payment', optional(lazy(() => paymentSchema))],
  }
);
