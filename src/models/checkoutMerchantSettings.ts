import { lazy, object, optional, Schema, string } from '../schema';
import {
  CheckoutMerchantSettingsPaymentMethods,
  checkoutMerchantSettingsPaymentMethodsSchema,
} from './checkoutMerchantSettingsPaymentMethods';

export interface CheckoutMerchantSettings {
  paymentMethods?: CheckoutMerchantSettingsPaymentMethods;
  /**
   * The timestamp when the settings were last updated, in RFC 3339 format.
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   * UTC: 2020-01-26T02:25:34Z
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAt?: string;
}

export const checkoutMerchantSettingsSchema: Schema<CheckoutMerchantSettings> = object(
  {
    paymentMethods: [
      'payment_methods',
      optional(lazy(() => checkoutMerchantSettingsPaymentMethodsSchema)),
    ],
    updatedAt: ['updated_at', optional(string())],
  }
);
