/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Timecard } from "./Timecard";

export const LaborTimecardUpdatedEventObject: core.serialization.ObjectSchema<
    serializers.LaborTimecardUpdatedEventObject.Raw,
    Square.LaborTimecardUpdatedEventObject
> = core.serialization.object({
    timecard: Timecard.optional(),
});

export declare namespace LaborTimecardUpdatedEventObject {
    export interface Raw {
        timecard?: Timecard.Raw | null;
    }
}
