/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { UpdateVendorResponse } from "./UpdateVendorResponse";

export const BatchUpdateVendorsResponse: core.serialization.ObjectSchema<
    serializers.BatchUpdateVendorsResponse.Raw,
    Square.BatchUpdateVendorsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    responses: core.serialization.record(core.serialization.string(), UpdateVendorResponse).optional(),
});

export declare namespace BatchUpdateVendorsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        responses?: Record<string, UpdateVendorResponse.Raw> | null;
    }
}
