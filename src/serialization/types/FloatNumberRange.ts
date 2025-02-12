/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const FloatNumberRange: core.serialization.ObjectSchema<
    serializers.FloatNumberRange.Raw,
    Square.FloatNumberRange
> = core.serialization.object({
    startAt: core.serialization.property("start_at", core.serialization.string().optionalNullable()),
    endAt: core.serialization.property("end_at", core.serialization.string().optionalNullable()),
});

export declare namespace FloatNumberRange {
    export interface Raw {
        start_at?: (string | null) | null;
        end_at?: (string | null) | null;
    }
}
