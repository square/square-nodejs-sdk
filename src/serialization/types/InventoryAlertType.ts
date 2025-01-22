/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const InventoryAlertType: core.serialization.Schema<
    serializers.InventoryAlertType.Raw,
    Square.InventoryAlertType
> = core.serialization.enum_(["NONE", "LOW_QUANTITY"]);

export declare namespace InventoryAlertType {
    export type Raw = "NONE" | "LOW_QUANTITY";
}
