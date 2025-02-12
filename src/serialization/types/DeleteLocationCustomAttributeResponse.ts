/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const DeleteLocationCustomAttributeResponse: core.serialization.ObjectSchema<
    serializers.DeleteLocationCustomAttributeResponse.Raw,
    Square.DeleteLocationCustomAttributeResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace DeleteLocationCustomAttributeResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
    }
}
