import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/** Return value from a [CompletePayment](#endpoint-payments-completepayment) call. */
export interface CompletePaymentResponse {
  /** Information on errors encountered during the request */
  errors?: Error[];
  /** Represents a payment processed by the Square API. */
  payment?: Payment;
}

export const completePaymentResponseSchema: Schema<CompletePaymentResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payment: ['payment', optional(lazy(() => paymentSchema))],
  }
);
