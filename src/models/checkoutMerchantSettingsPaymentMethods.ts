import { lazy, object, optional, Schema } from '../schema';
import {
  CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay,
  checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema,
} from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpay';
import {
  CheckoutMerchantSettingsPaymentMethodsPaymentMethod,
  checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema,
} from './checkoutMerchantSettingsPaymentMethodsPaymentMethod';

export interface CheckoutMerchantSettingsPaymentMethods {
  /** The settings allowed for a payment method. */
  applePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  /** The settings allowed for a payment method. */
  googlePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  /** The settings allowed for a payment method. */
  cashApp?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
  /** The settings allowed for AfterpayClearpay. */
  afterpayClearpay?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay;
}

export const checkoutMerchantSettingsPaymentMethodsSchema: Schema<CheckoutMerchantSettingsPaymentMethods> = object(
  {
    applePay: [
      'apple_pay',
      optional(
        lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)
      ),
    ],
    googlePay: [
      'google_pay',
      optional(
        lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)
      ),
    ],
    cashApp: [
      'cash_app',
      optional(
        lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)
      ),
    ],
    afterpayClearpay: [
      'afterpay_clearpay',
      optional(
        lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema)
      ),
    ],
  }
);
