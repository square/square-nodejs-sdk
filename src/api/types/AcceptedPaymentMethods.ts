/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AcceptedPaymentMethods {
    /** Whether Apple Pay is accepted at checkout. */
    applePay?: boolean | null;
    /** Whether Google Pay is accepted at checkout. */
    googlePay?: boolean | null;
    /** Whether Cash App Pay is accepted at checkout. */
    cashAppPay?: boolean | null;
    /** Whether Afterpay/Clearpay is accepted at checkout. */
    afterpayClearpay?: boolean | null;
}
