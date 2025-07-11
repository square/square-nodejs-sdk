/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { VendorCreatedEventObject } from "./VendorCreatedEventObject";

export const VendorCreatedEventData: core.serialization.ObjectSchema<
    serializers.VendorCreatedEventData.Raw,
    Square.VendorCreatedEventData
> = core.serialization.object({
    type: core.serialization.string().optionalNullable(),
    id: core.serialization.string().optional(),
    object: VendorCreatedEventObject.optional(),
});

export declare namespace VendorCreatedEventData {
    export interface Raw {
        type?: (string | null) | null;
        id?: string | null;
        object?: VendorCreatedEventObject.Raw | null;
    }
}
