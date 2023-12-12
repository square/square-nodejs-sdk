import { boolean, nullable, object, optional, Schema } from '../schema';

/** The settings allowed for a payment method. */
export interface CheckoutMerchantSettingsPaymentMethodsPaymentMethod {
  /** Indicates whether the payment method is enabled for the account. */
  enabled?: boolean | null;
}

export const checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema: Schema<CheckoutMerchantSettingsPaymentMethodsPaymentMethod> = object(
  { enabled: ['enabled', optional(nullable(boolean()))] }
);
