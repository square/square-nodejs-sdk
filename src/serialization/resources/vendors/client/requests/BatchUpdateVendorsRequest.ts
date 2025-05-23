/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { UpdateVendorRequest } from "../../../../types/UpdateVendorRequest";

export const BatchUpdateVendorsRequest: core.serialization.Schema<
    serializers.BatchUpdateVendorsRequest.Raw,
    Square.BatchUpdateVendorsRequest
> = core.serialization.object({
    vendors: core.serialization.record(core.serialization.string(), UpdateVendorRequest),
});

export declare namespace BatchUpdateVendorsRequest {
    export interface Raw {
        vendors: Record<string, UpdateVendorRequest.Raw>;
    }
}
