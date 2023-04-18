import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface PaymentOptions {
  /**
   * Indicates whether the `Payment` objects created from this `TerminalCheckout` are automatically
   * `COMPLETED` or left in an `APPROVED` state for later modification.
   */
  autocomplete?: boolean | null;
  /**
   * The duration of time after the payment's creation when Square automatically cancels the
   * payment. This automatic cancellation applies only to payments that do not reach a terminal state
   * (COMPLETED or CANCELED) before the `delay_duration` time period.
   * This parameter should be specified as a time duration, in RFC 3339 format, with a minimum value
   * of 1 minute.
   * Note: This feature is only supported for card payments. This parameter can only be set for a delayed
   * capture payment (`autocomplete=false`).
   * Default:
   * - Card-present payments: "PT36H" (36 hours) from the creation time.
   * - Card-not-present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: string | null;
  /**
   * If set to `true` and charging a Square Gift Card, a payment might be returned with
   * `amount_money` equal to less than what was requested. For example, a request for $20 when charging
   * a Square Gift Card with a balance of $5 results in an APPROVED payment of $5. You might choose
   * to prompt the buyer for an additional payment to cover the remainder or cancel the Gift Card
   * payment.
   * This field cannot be `true` when `autocomplete = true`.
   * This field cannot be `true` when an `order_id` isn't specified.
   * For more information, see
   * [Take Partial Payments](https://developer.squareup.com/docs/payments-api/take-payments/card-payments/partial-payments-with-gift-cards).
   * Default: false
   */
  acceptPartialAuthorization?: boolean | null;
  /**
   * Describes the action to be applied to a delayed capture payment when the delay_duration
   * has elapsed.
   */
  delayAction?: string;
}

export const paymentOptionsSchema: Schema<PaymentOptions> = object({
  autocomplete: ['autocomplete', optional(nullable(boolean()))],
  delayDuration: ['delay_duration', optional(nullable(string()))],
  acceptPartialAuthorization: [
    'accept_partial_authorization',
    optional(nullable(boolean())),
  ],
  delayAction: ['delay_action', optional(string())],
});
