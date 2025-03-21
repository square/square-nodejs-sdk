/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the Employee being retrieved.
 *
 * DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus).
 */
export type EmployeeStatus = "ACTIVE" | "INACTIVE";
export const EmployeeStatus = {
    Active: "ACTIVE",
    Inactive: "INACTIVE",
} as const;
