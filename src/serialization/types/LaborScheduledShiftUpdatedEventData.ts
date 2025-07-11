/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LaborScheduledShiftUpdatedEventObject } from "./LaborScheduledShiftUpdatedEventObject";

export const LaborScheduledShiftUpdatedEventData: core.serialization.ObjectSchema<
    serializers.LaborScheduledShiftUpdatedEventData.Raw,
    Square.LaborScheduledShiftUpdatedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: LaborScheduledShiftUpdatedEventObject.optional(),
});

export declare namespace LaborScheduledShiftUpdatedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: LaborScheduledShiftUpdatedEventObject.Raw | null;
    }
}
