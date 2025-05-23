/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const ScheduledShiftDetails: core.serialization.ObjectSchema<
    serializers.ScheduledShiftDetails.Raw,
    Square.ScheduledShiftDetails
> = core.serialization.object({
    teamMemberId: core.serialization.property("team_member_id", core.serialization.string().optionalNullable()),
    locationId: core.serialization.property("location_id", core.serialization.string().optionalNullable()),
    jobId: core.serialization.property("job_id", core.serialization.string().optionalNullable()),
    startAt: core.serialization.property("start_at", core.serialization.string().optionalNullable()),
    endAt: core.serialization.property("end_at", core.serialization.string().optionalNullable()),
    notes: core.serialization.string().optionalNullable(),
    isDeleted: core.serialization.property("is_deleted", core.serialization.boolean().optionalNullable()),
    timezone: core.serialization.string().optional(),
});

export declare namespace ScheduledShiftDetails {
    export interface Raw {
        team_member_id?: (string | null) | null;
        location_id?: (string | null) | null;
        job_id?: (string | null) | null;
        start_at?: (string | null) | null;
        end_at?: (string | null) | null;
        notes?: (string | null) | null;
        is_deleted?: (boolean | null) | null;
        timezone?: string | null;
    }
}
