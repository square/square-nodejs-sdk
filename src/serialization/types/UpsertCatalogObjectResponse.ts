/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { CatalogIdMapping } from "./CatalogIdMapping";

export const UpsertCatalogObjectResponse: core.serialization.ObjectSchema<
    serializers.UpsertCatalogObjectResponse.Raw,
    Square.UpsertCatalogObjectResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    catalogObject: core.serialization.property(
        "catalog_object",
        core.serialization.lazy(() => serializers.CatalogObject).optional(),
    ),
    idMappings: core.serialization.property("id_mappings", core.serialization.list(CatalogIdMapping).optional()),
});

export declare namespace UpsertCatalogObjectResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        catalog_object?: serializers.CatalogObject.Raw | null;
        id_mappings?: CatalogIdMapping.Raw[] | null;
    }
}
