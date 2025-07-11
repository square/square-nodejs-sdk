/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { DisputeCreatedEventObject } from "./DisputeCreatedEventObject";

export const DisputeCreatedEventData: core.serialization.ObjectSchema<
    serializers.DisputeCreatedEventData.Raw,
    Square.DisputeCreatedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: DisputeCreatedEventObject.optional(),
});

export declare namespace DisputeCreatedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: DisputeCreatedEventObject.Raw | null;
    }
}
