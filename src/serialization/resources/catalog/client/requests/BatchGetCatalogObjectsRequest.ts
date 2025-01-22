/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";

export const BatchGetCatalogObjectsRequest: core.serialization.Schema<
    serializers.BatchGetCatalogObjectsRequest.Raw,
    Square.BatchGetCatalogObjectsRequest
> = core.serialization.object({
    objectIds: core.serialization.property("object_ids", core.serialization.list(core.serialization.string())),
    includeRelatedObjects: core.serialization.property(
        "include_related_objects",
        core.serialization.boolean().optionalNullable(),
    ),
    catalogVersion: core.serialization.property("catalog_version", core.serialization.bigint().optionalNullable()),
    includeDeletedObjects: core.serialization.property(
        "include_deleted_objects",
        core.serialization.boolean().optionalNullable(),
    ),
    includeCategoryPathToRoot: core.serialization.property(
        "include_category_path_to_root",
        core.serialization.boolean().optionalNullable(),
    ),
});

export declare namespace BatchGetCatalogObjectsRequest {
    export interface Raw {
        object_ids: string[];
        include_related_objects?: (boolean | null) | null;
        catalog_version?: ((bigint | number) | null) | null;
        include_deleted_objects?: (boolean | null) | null;
        include_category_path_to_root?: (boolean | null) | null;
    }
}
