/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         paymentId: "payment_id"
 *     }
 */
export interface CompletePaymentRequest {
    /**
     * The unique ID identifying the payment to be completed.
     */
    paymentId: string;
    /**
     * Used for optimistic concurrency. This opaque token identifies the current `Payment`
     * version that the caller expects. If the server has a different version of the Payment,
     * the update fails and a response with a VERSION_MISMATCH error is returned.
     */
    versionToken?: string | null;
}
