/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const MeasurementUnitTime: core.serialization.Schema<
    serializers.MeasurementUnitTime.Raw,
    Square.MeasurementUnitTime
> = core.serialization.enum_([
    "GENERIC_MILLISECOND",
    "GENERIC_SECOND",
    "GENERIC_MINUTE",
    "GENERIC_HOUR",
    "GENERIC_DAY",
]);

export declare namespace MeasurementUnitTime {
    export type Raw = "GENERIC_MILLISECOND" | "GENERIC_SECOND" | "GENERIC_MINUTE" | "GENERIC_HOUR" | "GENERIC_DAY";
}
