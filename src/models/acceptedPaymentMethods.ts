import { boolean, nullable, object, optional, Schema } from '../schema';

export interface AcceptedPaymentMethods {
  /** Whether Apple Pay is accepted at checkout. */
  applePay?: boolean | null;
  /** Whether Google Pay is accepted at checkout. */
  googlePay?: boolean | null;
  /** Whether Cash App Pay is accepted at checkout. */
  cashAppPay?: boolean | null;
  /** Whether Afterpay/Clearpay is accepted at checkout. */
  afterpayClearpay?: boolean | null;
}

export const acceptedPaymentMethodsSchema: Schema<AcceptedPaymentMethods> = object(
  {
    applePay: ['apple_pay', optional(nullable(boolean()))],
    googlePay: ['google_pay', optional(nullable(boolean()))],
    cashAppPay: ['cash_app_pay', optional(nullable(boolean()))],
    afterpayClearpay: ['afterpay_clearpay', optional(nullable(boolean()))],
  }
);
