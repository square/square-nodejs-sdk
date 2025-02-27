/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { ChangeTiming } from "../../../../types/ChangeTiming";

export const PauseSubscriptionRequest: core.serialization.Schema<
    serializers.PauseSubscriptionRequest.Raw,
    Omit<Square.PauseSubscriptionRequest, "subscriptionId">
> = core.serialization.object({
    pauseEffectiveDate: core.serialization.property(
        "pause_effective_date",
        core.serialization.string().optionalNullable(),
    ),
    pauseCycleDuration: core.serialization.property(
        "pause_cycle_duration",
        core.serialization.bigint().optionalNullable(),
    ),
    resumeEffectiveDate: core.serialization.property(
        "resume_effective_date",
        core.serialization.string().optionalNullable(),
    ),
    resumeChangeTiming: core.serialization.property("resume_change_timing", ChangeTiming.optional()),
    pauseReason: core.serialization.property("pause_reason", core.serialization.string().optionalNullable()),
});

export declare namespace PauseSubscriptionRequest {
    export interface Raw {
        pause_effective_date?: (string | null) | null;
        pause_cycle_duration?: ((bigint | number) | null) | null;
        resume_effective_date?: (string | null) | null;
        resume_change_timing?: ChangeTiming.Raw | null;
        pause_reason?: (string | null) | null;
    }
}
