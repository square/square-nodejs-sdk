/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const LaborTimecardDeletedEventData: core.serialization.ObjectSchema<
    serializers.LaborTimecardDeletedEventData.Raw,
    Square.LaborTimecardDeletedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    deleted: core.serialization.boolean().optionalNullable(),
});

export declare namespace LaborTimecardDeletedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        deleted?: (boolean | null) | null;
    }
}
