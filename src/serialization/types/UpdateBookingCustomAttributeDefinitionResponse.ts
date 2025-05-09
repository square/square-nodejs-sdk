/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomAttributeDefinition } from "./CustomAttributeDefinition";
import { Error_ } from "./Error_";

export const UpdateBookingCustomAttributeDefinitionResponse: core.serialization.ObjectSchema<
    serializers.UpdateBookingCustomAttributeDefinitionResponse.Raw,
    Square.UpdateBookingCustomAttributeDefinitionResponse
> = core.serialization.object({
    customAttributeDefinition: core.serialization.property(
        "custom_attribute_definition",
        CustomAttributeDefinition.optional(),
    ),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace UpdateBookingCustomAttributeDefinitionResponse {
    export interface Raw {
        custom_attribute_definition?: CustomAttributeDefinition.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
