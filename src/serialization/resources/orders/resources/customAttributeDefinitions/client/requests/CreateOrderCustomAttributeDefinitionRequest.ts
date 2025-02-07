/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { CustomAttributeDefinition } from "../../../../../../types/CustomAttributeDefinition";

export const CreateOrderCustomAttributeDefinitionRequest: core.serialization.Schema<
    serializers.orders.CreateOrderCustomAttributeDefinitionRequest.Raw,
    Square.orders.CreateOrderCustomAttributeDefinitionRequest
> = core.serialization.object({
    customAttributeDefinition: core.serialization.property("custom_attribute_definition", CustomAttributeDefinition),
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optional()),
});

export declare namespace CreateOrderCustomAttributeDefinitionRequest {
    export interface Raw {
        custom_attribute_definition: CustomAttributeDefinition.Raw;
        idempotency_key?: string | null;
    }
}
