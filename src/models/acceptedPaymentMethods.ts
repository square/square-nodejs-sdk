import { boolean, object, optional, Schema } from '../schema';

export interface AcceptedPaymentMethods {
  /** Whether Apple Pay is accepted at checkout */
  applePay?: boolean;
  /** Whether Google Pay is accepted at checkout */
  googlePay?: boolean;
  /** Whether Cash App Pay is accepted at checkout */
  cashAppPay?: boolean;
  /** Whether Afterpay/Clearpay is accepted at checkout */
  afterpayClearpay?: boolean;
}

export const acceptedPaymentMethodsSchema: Schema<AcceptedPaymentMethods> = object(
  {
    applePay: ['apple_pay', optional(boolean())],
    googlePay: ['google_pay', optional(boolean())],
    cashAppPay: ['cash_app_pay', optional(boolean())],
    afterpayClearpay: ['afterpay_clearpay', optional(boolean())],
  }
);
