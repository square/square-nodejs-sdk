/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Vendor } from "./Vendor";

export const SearchVendorsResponse: core.serialization.ObjectSchema<
    serializers.SearchVendorsResponse.Raw,
    Square.SearchVendorsResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    vendors: core.serialization.list(Vendor).optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace SearchVendorsResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        vendors?: Vendor.Raw[] | null;
        cursor?: string | null;
    }
}
