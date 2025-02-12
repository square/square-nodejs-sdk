/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { VendorStatus } from "./VendorStatus";

export const SearchVendorsRequestFilter: core.serialization.ObjectSchema<
    serializers.SearchVendorsRequestFilter.Raw,
    Square.SearchVendorsRequestFilter
> = core.serialization.object({
    name: core.serialization.list(core.serialization.string()).optionalNullable(),
    status: core.serialization.list(VendorStatus).optionalNullable(),
});

export declare namespace SearchVendorsRequestFilter {
    export interface Raw {
        name?: (string[] | null) | null;
        status?: (VendorStatus.Raw[] | null) | null;
    }
}
