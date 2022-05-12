import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { PaymentLink, paymentLinkSchema } from './paymentLink';

export interface UpdatePaymentLinkResponse {
  /** Any errors that occurred when updating the payment link. */
  errors?: Error[];
  paymentLink?: PaymentLink;
}

export const updatePaymentLinkResponseSchema: Schema<UpdatePaymentLinkResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLink: ['payment_link', optional(lazy(() => paymentLinkSchema))],
  }
);
