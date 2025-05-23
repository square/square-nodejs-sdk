/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Describes the action to be applied to a delayed capture payment when the delay_duration
 * has elapsed.
 */
export type PaymentOptionsDelayAction = "CANCEL" | "COMPLETE";
export const PaymentOptionsDelayAction = {
    Cancel: "CANCEL",
    Complete: "COMPLETE",
} as const;
