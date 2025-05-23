/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines a filter used in a search for `Timecard` records. `AND` logic is
 * used by Square's servers to apply each filter property specified.
 */
export interface TimecardFilter {
    /** Fetch timecards for the specified location. */
    locationIds?: string[] | null;
    /**
     * Fetch a `Timecard` instance by `Timecard.status`.
     * See [TimecardFilterStatus](#type-timecardfilterstatus) for possible values
     */
    status?: Square.TimecardFilterStatus;
    /** Fetch `Timecard` instances that start in the time range - Inclusive. */
    start?: Square.TimeRange;
    /** Fetch the `Timecard` instances that end in the time range - Inclusive. */
    end?: Square.TimeRange;
    /** Fetch the `Timecard` instances based on the workday date range. */
    workday?: Square.TimecardWorkday;
    /** Fetch timecards for the specified team members. */
    teamMemberIds?: string[] | null;
}
