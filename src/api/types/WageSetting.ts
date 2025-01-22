/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents information about the overtime exemption status, job assignments, and compensation
 * for a [team member](entity:TeamMember).
 */
export interface WageSetting {
    /** The ID of the team member associated with the wage setting. */
    teamMemberId?: string | null;
    /**
     * **Required** The ordered list of jobs that the team member is assigned to.
     * The first job assignment is considered the team member's primary job.
     */
    jobAssignments?: Square.JobAssignment[] | null;
    /** Whether the team member is exempt from the overtime rules of the seller's country. */
    isOvertimeExempt?: boolean | null;
    /**
     * **Read only** Used for resolving concurrency issues. The request fails if the version
     * provided does not match the server version at the time of the request. If not provided,
     * Square executes a blind write, potentially overwriting data from another write. For more information,
     * see [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency).
     */
    version?: number;
    /** The timestamp when the wage setting was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the wage setting was last updated, in RFC 3339 format. */
    updatedAt?: string;
}
