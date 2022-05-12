import { lazy, object, Schema } from '../schema';
import { PaymentLink, paymentLinkSchema } from './paymentLink';

export interface UpdatePaymentLinkRequest {
  paymentLink: PaymentLink;
}

export const updatePaymentLinkRequestSchema: Schema<UpdatePaymentLinkRequest> = object(
  { paymentLink: ['payment_link', lazy(() => paymentLinkSchema)] }
);
