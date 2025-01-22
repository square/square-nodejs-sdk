/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represents a phase in the process of calculating order totals.
 * Service charges are applied after the indicated phase.
 *
 * [Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
 */
export type OrderServiceChargeCalculationPhase =
    | "SUBTOTAL_PHASE"
    | "TOTAL_PHASE"
    | "APPORTIONED_PERCENTAGE_PHASE"
    | "APPORTIONED_AMOUNT_PHASE";
export const OrderServiceChargeCalculationPhase = {
    SubtotalPhase: "SUBTOTAL_PHASE",
    TotalPhase: "TOTAL_PHASE",
    ApportionedPercentagePhase: "APPORTIONED_PERCENTAGE_PHASE",
    ApportionedAmountPhase: "APPORTIONED_AMOUNT_PHASE",
} as const;
