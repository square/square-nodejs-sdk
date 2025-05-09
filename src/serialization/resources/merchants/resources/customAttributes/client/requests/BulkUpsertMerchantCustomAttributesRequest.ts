/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest } from "../../../../../../types/BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest";

export const BulkUpsertMerchantCustomAttributesRequest: core.serialization.Schema<
    serializers.merchants.BulkUpsertMerchantCustomAttributesRequest.Raw,
    Square.merchants.BulkUpsertMerchantCustomAttributesRequest
> = core.serialization.object({
    values: core.serialization.record(
        core.serialization.string(),
        BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest,
    ),
});

export declare namespace BulkUpsertMerchantCustomAttributesRequest {
    export interface Raw {
        values: Record<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest.Raw>;
    }
}
