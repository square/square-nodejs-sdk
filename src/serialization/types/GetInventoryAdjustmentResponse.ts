/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { InventoryAdjustment } from "./InventoryAdjustment";

export const GetInventoryAdjustmentResponse: core.serialization.ObjectSchema<
    serializers.GetInventoryAdjustmentResponse.Raw,
    Square.GetInventoryAdjustmentResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    adjustment: InventoryAdjustment.optional(),
});

export declare namespace GetInventoryAdjustmentResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        adjustment?: InventoryAdjustment.Raw | null;
    }
}
