/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { JobAssignment } from "./JobAssignment";

export const WageSetting: core.serialization.ObjectSchema<serializers.WageSetting.Raw, Square.WageSetting> =
    core.serialization.object({
        teamMemberId: core.serialization.property("team_member_id", core.serialization.string().optionalNullable()),
        jobAssignments: core.serialization.property(
            "job_assignments",
            core.serialization.list(JobAssignment).optionalNullable(),
        ),
        isOvertimeExempt: core.serialization.property(
            "is_overtime_exempt",
            core.serialization.boolean().optionalNullable(),
        ),
        version: core.serialization.number().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    });

export declare namespace WageSetting {
    export interface Raw {
        team_member_id?: (string | null) | null;
        job_assignments?: (JobAssignment.Raw[] | null) | null;
        is_overtime_exempt?: (boolean | null) | null;
        version?: number | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
