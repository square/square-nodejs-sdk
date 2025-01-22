/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Enumerates the possible pay types that a job can be assigned.
 */
export type JobAssignmentPayType = "NONE" | "HOURLY" | "SALARY";
export const JobAssignmentPayType = {
    None: "NONE",
    Hourly: "HOURLY",
    Salary: "SALARY",
} as const;
