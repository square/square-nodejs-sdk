/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogCustomAttributeDefinitionType: core.serialization.Schema<
    serializers.CatalogCustomAttributeDefinitionType.Raw,
    Square.CatalogCustomAttributeDefinitionType
> = core.serialization.enum_(["STRING", "BOOLEAN", "NUMBER", "SELECTION"]);

export declare namespace CatalogCustomAttributeDefinitionType {
    export type Raw = "STRING" | "BOOLEAN" | "NUMBER" | "SELECTION";
}
