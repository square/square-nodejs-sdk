/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ActionCancelReason = "BUYER_CANCELED" | "SELLER_CANCELED" | "TIMED_OUT";
export const ActionCancelReason = {
    BuyerCanceled: "BUYER_CANCELED",
    SellerCanceled: "SELLER_CANCELED",
    TimedOut: "TIMED_OUT",
} as const;
