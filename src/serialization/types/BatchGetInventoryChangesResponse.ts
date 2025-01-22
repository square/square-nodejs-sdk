/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { InventoryChange } from "./InventoryChange";

export const BatchGetInventoryChangesResponse: core.serialization.ObjectSchema<
    serializers.BatchGetInventoryChangesResponse.Raw,
    Square.BatchGetInventoryChangesResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    changes: core.serialization.list(InventoryChange).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace BatchGetInventoryChangesResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        changes?: InventoryChange.Raw[] | null;
        cursor?: string | null;
    }
}
