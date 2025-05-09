/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { BulkCreateCustomerData } from "../../../../types/BulkCreateCustomerData";

export const BulkCreateCustomersRequest: core.serialization.Schema<
    serializers.BulkCreateCustomersRequest.Raw,
    Square.BulkCreateCustomersRequest
> = core.serialization.object({
    customers: core.serialization.record(core.serialization.string(), BulkCreateCustomerData),
});

export declare namespace BulkCreateCustomersRequest {
    export interface Raw {
        customers: Record<string, BulkCreateCustomerData.Raw>;
    }
}
