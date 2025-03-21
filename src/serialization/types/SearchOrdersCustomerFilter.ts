/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const SearchOrdersCustomerFilter: core.serialization.ObjectSchema<
    serializers.SearchOrdersCustomerFilter.Raw,
    Square.SearchOrdersCustomerFilter
> = core.serialization.object({
    customerIds: core.serialization.property(
        "customer_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
});

export declare namespace SearchOrdersCustomerFilter {
    export interface Raw {
        customer_ids?: (string[] | null) | null;
    }
}
