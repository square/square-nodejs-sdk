/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const UpdateItemModifierListsResponse: core.serialization.ObjectSchema<
    serializers.UpdateItemModifierListsResponse.Raw,
    Square.UpdateItemModifierListsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace UpdateItemModifierListsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        updated_at?: string | null;
    }
}
