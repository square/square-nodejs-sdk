/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const ShiftWorkdayMatcher: core.serialization.Schema<
    serializers.ShiftWorkdayMatcher.Raw,
    Square.ShiftWorkdayMatcher
> = core.serialization.enum_(["START_AT", "END_AT", "INTERSECTION"]);

export declare namespace ShiftWorkdayMatcher {
    export type Raw = "START_AT" | "END_AT" | "INTERSECTION";
}
