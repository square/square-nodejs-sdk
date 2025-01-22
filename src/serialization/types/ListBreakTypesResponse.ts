/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { BreakType } from "./BreakType";
import { Error_ } from "./Error_";

export const ListBreakTypesResponse: core.serialization.ObjectSchema<
    serializers.ListBreakTypesResponse.Raw,
    Square.ListBreakTypesResponse
> = core.serialization.object({
    breakTypes: core.serialization.property("break_types", core.serialization.list(BreakType).optional()),
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace ListBreakTypesResponse {
    export interface Raw {
        break_types?: BreakType.Raw[] | null;
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
