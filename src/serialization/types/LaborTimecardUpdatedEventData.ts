/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { LaborTimecardUpdatedEventObject } from "./LaborTimecardUpdatedEventObject";

export const LaborTimecardUpdatedEventData: core.serialization.ObjectSchema<
    serializers.LaborTimecardUpdatedEventData.Raw,
    Square.LaborTimecardUpdatedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: LaborTimecardUpdatedEventObject.optional(),
});

export declare namespace LaborTimecardUpdatedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: LaborTimecardUpdatedEventObject.Raw | null;
    }
}
