/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { CustomAttributeDefinition } from "../../../../../../types/CustomAttributeDefinition";

export const UpdateMerchantCustomAttributeDefinitionRequest: core.serialization.Schema<
    serializers.merchants.UpdateMerchantCustomAttributeDefinitionRequest.Raw,
    Omit<Square.merchants.UpdateMerchantCustomAttributeDefinitionRequest, "key">
> = core.serialization.object({
    customAttributeDefinition: core.serialization.property("custom_attribute_definition", CustomAttributeDefinition),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optionalNullable()),
});

export declare namespace UpdateMerchantCustomAttributeDefinitionRequest {
    export interface Raw {
        custom_attribute_definition: CustomAttributeDefinition.Raw;
        idempotency_key?: (string | null) | null;
    }
}
