/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LoyaltyEventAdjustPoints: core.serialization.ObjectSchema<
    serializers.LoyaltyEventAdjustPoints.Raw,
    Square.LoyaltyEventAdjustPoints
> = core.serialization.object({
    loyaltyProgramId: core.serialization.property("loyalty_program_id", core.serialization.string().optional()),
    points: core.serialization.number(),
    reason: core.serialization.string().optionalNullable(),
});

export declare namespace LoyaltyEventAdjustPoints {
    export interface Raw {
        loyalty_program_id?: string | null;
        points: number;
        reason?: (string | null) | null;
    }
}
