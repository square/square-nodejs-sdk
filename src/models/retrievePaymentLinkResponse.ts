import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { PaymentLink, paymentLinkSchema } from './paymentLink';

export interface RetrievePaymentLinkResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  paymentLink?: PaymentLink;
}

export const retrievePaymentLinkResponseSchema: Schema<RetrievePaymentLinkResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLink: ['payment_link', optional(lazy(() => paymentLinkSchema))],
  }
);
