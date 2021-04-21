import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/**
 * Defines the response returned by
 * [UpdatePayment]($e/Payments/UpdatePayment).
 */
export interface UpdatePaymentResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
}

export const updatePaymentResponseSchema: Schema<UpdatePaymentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payment: ['payment', optional(lazy(() => paymentSchema))],
  }
);
