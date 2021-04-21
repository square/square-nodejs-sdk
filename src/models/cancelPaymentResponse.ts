import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/** Defines the response returned by [CancelPayment]($e/Payments/CancelPayment). */
export interface CancelPaymentResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
}

export const cancelPaymentResponseSchema: Schema<CancelPaymentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payment: ['payment', optional(lazy(() => paymentSchema))],
  }
);
