import { boolean, lazy, object, optional, Schema } from '../schema';
import {
  CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange,
  checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema,
} from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange';

/** The settings allowed for AfterpayClearpay. */
export interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay {
  /** A range of purchase price that qualifies. */
  orderEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  /** A range of purchase price that qualifies. */
  itemEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
  /** Indicates whether the payment method is enabled for the account. */
  enabled?: boolean;
}

export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema: Schema<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay> = object(
  {
    orderEligibilityRange: [
      'order_eligibility_range',
      optional(
        lazy(
          () =>
            checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema
        )
      ),
    ],
    itemEligibilityRange: [
      'item_eligibility_range',
      optional(
        lazy(
          () =>
            checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema
        )
      ),
    ],
    enabled: ['enabled', optional(boolean())],
  }
);
