/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Defines valid values for the `field` sort setting in a
 * [SearchScheduledShifts](api-endpoint:Labor-SearchScheduledShifts) request.
 */
export type ScheduledShiftSortField = "START_AT" | "END_AT" | "CREATED_AT" | "UPDATED_AT";
export const ScheduledShiftSortField = {
    StartAt: "START_AT",
    EndAt: "END_AT",
    CreatedAt: "CREATED_AT",
    UpdatedAt: "UPDATED_AT",
} as const;
