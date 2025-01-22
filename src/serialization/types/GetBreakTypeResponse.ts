/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { BreakType } from "./BreakType";
import { Error_ } from "./Error_";

export const GetBreakTypeResponse: core.serialization.ObjectSchema<
    serializers.GetBreakTypeResponse.Raw,
    Square.GetBreakTypeResponse
> = core.serialization.object({
    breakType: core.serialization.property("break_type", BreakType.optional()),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace GetBreakTypeResponse {
    export interface Raw {
        break_type?: BreakType.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
