/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomAttribute } from "./CustomAttribute";

export const BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest: core.serialization.ObjectSchema<
    serializers.BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest.Raw,
    Square.BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest
> = core.serialization.object({
    merchantId: core.serialization.property("merchant_id", core.serialization.string()),
    customAttribute: core.serialization.property("custom_attribute", CustomAttribute),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optionalNullable()),
});

export declare namespace BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest {
    export interface Raw {
        merchant_id: string;
        custom_attribute: CustomAttribute.Raw;
        idempotency_key?: (string | null) | null;
    }
}
