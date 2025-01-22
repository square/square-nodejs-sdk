/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale.
 */
export type CatalogPricingType = "FIXED_PRICING" | "VARIABLE_PRICING";
export const CatalogPricingType = {
    FixedPricing: "FIXED_PRICING",
    VariablePricing: "VARIABLE_PRICING",
} as const;
