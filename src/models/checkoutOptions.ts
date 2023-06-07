import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AcceptedPaymentMethods,
  acceptedPaymentMethodsSchema,
} from './acceptedPaymentMethods';
import { CustomField, customFieldSchema } from './customField';
import { Money, moneySchema } from './money';
import { ShippingFee, shippingFeeSchema } from './shippingFee';

export interface CheckoutOptions {
  /** Indicates whether the payment allows tipping. */
  allowTipping?: boolean | null;
  /** The custom fields requesting information from the buyer. */
  customFields?: CustomField[] | null;
  /**
   * The ID of the subscription plan for the buyer to pay and subscribe.
   * For more information, see [Subscription Plan Checkout](https://developer.squareup.com/docs/checkout-api/subscription-plan-checkout).
   */
  subscriptionPlanId?: string | null;
  /** The confirmation page URL to redirect the buyer to after Square processes the payment. */
  redirectUrl?: string | null;
  /** The email address that buyers can use to contact the seller. */
  merchantSupportEmail?: string | null;
  /** Indicates whether to include the address fields in the payment form. */
  askForShippingAddress?: boolean | null;
  acceptedPaymentMethods?: AcceptedPaymentMethods;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  appFeeMoney?: Money;
  shippingFee?: ShippingFee;
  /** Indicates whether to include the `Add coupon` section for the buyer to provide a Square marketing coupon in the payment form. */
  enableCoupon?: boolean | null;
  /** Indicates whether to include the `REWARDS` section for the buyer to opt in to loyalty, redeem rewards in the payment form, or both. */
  enableLoyalty?: boolean | null;
}

export const checkoutOptionsSchema: Schema<CheckoutOptions> = object({
  allowTipping: ['allow_tipping', optional(nullable(boolean()))],
  customFields: [
    'custom_fields',
    optional(nullable(array(lazy(() => customFieldSchema)))),
  ],
  subscriptionPlanId: ['subscription_plan_id', optional(nullable(string()))],
  redirectUrl: ['redirect_url', optional(nullable(string()))],
  merchantSupportEmail: [
    'merchant_support_email',
    optional(nullable(string())),
  ],
  askForShippingAddress: [
    'ask_for_shipping_address',
    optional(nullable(boolean())),
  ],
  acceptedPaymentMethods: [
    'accepted_payment_methods',
    optional(lazy(() => acceptedPaymentMethodsSchema)),
  ],
  appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
  shippingFee: ['shipping_fee', optional(lazy(() => shippingFeeSchema))],
  enableCoupon: ['enable_coupon', optional(nullable(boolean()))],
  enableLoyalty: ['enable_loyalty', optional(nullable(boolean()))],
});
