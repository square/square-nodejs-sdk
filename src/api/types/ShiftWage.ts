/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The hourly wage rate used to compensate an employee for this shift.
 */
export interface ShiftWage {
    /** The name of the job performed during this shift. */
    title?: string | null;
    /**
     * Can be a custom-set hourly wage or the calculated effective hourly
     * wage based on the annual wage and hours worked per week.
     */
    hourlyRate?: Square.Money;
    /**
     * The id of the job performed during this shift. Square
     * labor-reporting UIs might group shifts together by id. This cannot be used to retrieve the job.
     */
    jobId?: string;
    /** Whether team members are eligible for tips when working this job. */
    tipEligible?: boolean | null;
}
