/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const DeviceStatusCategory: core.serialization.Schema<
    serializers.DeviceStatusCategory.Raw,
    Square.DeviceStatusCategory
> = core.serialization.enum_(["AVAILABLE", "NEEDS_ATTENTION", "OFFLINE"]);

export declare namespace DeviceStatusCategory {
    export type Raw = "AVAILABLE" | "NEEDS_ATTENTION" | "OFFLINE";
}
