/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomAttributeDefinition } from "./CustomAttributeDefinition";
import { Error_ } from "./Error_";

export const CreateLocationCustomAttributeDefinitionResponse: core.serialization.ObjectSchema<
    serializers.CreateLocationCustomAttributeDefinitionResponse.Raw,
    Square.CreateLocationCustomAttributeDefinitionResponse
> = core.serialization.object({
    customAttributeDefinition: core.serialization.property(
        "custom_attribute_definition",
        CustomAttributeDefinition.optional(),
    ),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace CreateLocationCustomAttributeDefinitionResponse {
    export interface Raw {
        custom_attribute_definition?: CustomAttributeDefinition.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
