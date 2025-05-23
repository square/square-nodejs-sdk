/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The hourly wage rate used to compensate a team member for a [timecard](entity:Timecard).
 */
export interface TimecardWage {
    /** The name of the job performed during this timecard. */
    title?: string | null;
    /**
     * Can be a custom-set hourly wage or the calculated effective hourly
     * wage based on the annual wage and hours worked per week.
     */
    hourlyRate?: Square.Money;
    /**
     * The ID of the [job](entity:Job) performed for this timecard. Square
     * labor-reporting UIs might group timecards together by ID.
     */
    jobId?: string;
    /** Whether team members are eligible for tips when working this job. */
    tipEligible?: boolean | null;
}
