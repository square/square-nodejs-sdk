/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Money } from "./Money";

export const TimecardWage: core.serialization.ObjectSchema<serializers.TimecardWage.Raw, Square.TimecardWage> =
    core.serialization.object({
        title: core.serialization.string().optionalNullable(),
        hourlyRate: core.serialization.property("hourly_rate", Money.optional()),
        jobId: core.serialization.property("job_id", core.serialization.string().optional()),
        tipEligible: core.serialization.property("tip_eligible", core.serialization.boolean().optionalNullable()),
    });

export declare namespace TimecardWage {
    export interface Raw {
        title?: (string | null) | null;
        hourly_rate?: Money.Raw | null;
        job_id?: string | null;
        tip_eligible?: (boolean | null) | null;
    }
}
