/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomerCreationSource } from "./CustomerCreationSource";
import { CustomerInclusionExclusion } from "./CustomerInclusionExclusion";

export const CustomerCreationSourceFilter: core.serialization.ObjectSchema<
    serializers.CustomerCreationSourceFilter.Raw,
    Square.CustomerCreationSourceFilter
> = core.serialization.object({
    values: core.serialization.list(CustomerCreationSource).optionalNullable(),
    rule: CustomerInclusionExclusion.optional(),
});

export declare namespace CustomerCreationSourceFilter {
    export interface Raw {
        values?: (CustomerCreationSource.Raw[] | null) | null;
        rule?: CustomerInclusionExclusion.Raw | null;
    }
}
