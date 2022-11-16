import { nullable, object, optional, Schema, string } from '../schema';

/**
 * Describes a request to complete (capture) a payment using
 * [CompletePayment]($e/Payments/CompletePayment).
 * By default, payments are set to `autocomplete` immediately after they are created.
 * To complete payments manually, set `autocomplete` to `false`.
 */
export interface CompletePaymentRequest {
  /**
   * Used for optimistic concurrency. This opaque token identifies the current `Payment`
   * version that the caller expects. If the server has a different version of the Payment,
   * the update fails and a response with a VERSION_MISMATCH error is returned.
   */
  versionToken?: string | null;
}

export const completePaymentRequestSchema: Schema<CompletePaymentRequest> = object(
  { versionToken: ['version_token', optional(nullable(string()))] }
);
