/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates whether customers should be included in, or excluded from,
 * the result set when they match the filtering criteria.
 */
export type CustomerInclusionExclusion = "INCLUDE" | "EXCLUDE";
export const CustomerInclusionExclusion = {
    Include: "INCLUDE",
    Exclude: "EXCLUDE",
} as const;
