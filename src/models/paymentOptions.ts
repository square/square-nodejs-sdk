import { boolean, object, optional, Schema } from '../schema';

export interface PaymentOptions {
  /**
   * Indicates whether the Payment objects created from this `TerminalCheckout` will automatically be
   * `COMPLETED` or left in an `APPROVED` state for later modification.
   */
  autocomplete?: boolean;
}

export const paymentOptionsSchema: Schema<PaymentOptions> = object({
  autocomplete: ['autocomplete', optional(boolean())],
});
