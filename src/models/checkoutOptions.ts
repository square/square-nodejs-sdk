import {
  array,
  boolean,
  lazy,
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

export interface CheckoutOptions {
  /** Indicates whether the payment allows tipping. */
  allowTipping?: boolean;
  /** The custom fields requesting information from the buyer. */
  customFields?: CustomField[];
  /**
   * The ID of the subscription plan for the buyer to pay and subscribe.
   * For more information, see [Subscription Plan Checkout](https://developer.squareup.com/docs/checkout-api/subscription-plan-checkout).
   */
  subscriptionPlanId?: string;
  /** The confirmation page URL to redirect the buyer to after Square processes the payment. */
  redirectUrl?: string;
  /** The email address that buyers can use to contact the seller. */
  merchantSupportEmail?: string;
  /** Indicates whether to include the address fields in the payment form. */
  askForShippingAddress?: boolean;
  acceptedPaymentMethods?: AcceptedPaymentMethods;
}

export const checkoutOptionsSchema: Schema<CheckoutOptions> = object({
  allowTipping: ['allow_tipping', optional(boolean())],
  customFields: [
    'custom_fields',
    optional(array(lazy(() => customFieldSchema))),
  ],
  subscriptionPlanId: ['subscription_plan_id', optional(string())],
  redirectUrl: ['redirect_url', optional(string())],
  merchantSupportEmail: ['merchant_support_email', optional(string())],
  askForShippingAddress: ['ask_for_shipping_address', optional(boolean())],
  acceptedPaymentMethods: [
    'accepted_payment_methods',
    optional(lazy(() => acceptedPaymentMethodsSchema)),
  ],
});
