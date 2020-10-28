import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Payment, paymentSchema } from './payment';

/**
 * Defines the fields that are included in the response body of
 * a request to the [CreatePayment](#endpoint-payments-createpayment) endpoint.
 * Note: if there are errors processing the request, the payment field may not be
 * present, or it may be present with a status of `FAILED`.
 */
export interface CreatePaymentResponse {
  /** Information on errors encountered during the request. */
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
