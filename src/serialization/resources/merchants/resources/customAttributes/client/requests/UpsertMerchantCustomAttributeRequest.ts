/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { CustomAttribute } from "../../../../../../types/CustomAttribute";

export const UpsertMerchantCustomAttributeRequest: core.serialization.Schema<
    serializers.merchants.UpsertMerchantCustomAttributeRequest.Raw,
    Omit<Square.merchants.UpsertMerchantCustomAttributeRequest, "merchantId" | "key">
> = core.serialization.object({
    customAttribute: core.serialization.property("custom_attribute", CustomAttribute),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optionalNullable()),
});

export declare namespace UpsertMerchantCustomAttributeRequest {
    export interface Raw {
        custom_attribute: CustomAttribute.Raw;
        idempotency_key?: (string | null) | null;
    }
}
