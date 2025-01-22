/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const UpsertCatalogObjectRequest: core.serialization.Schema<
    serializers.catalog.UpsertCatalogObjectRequest.Raw,
    Square.catalog.UpsertCatalogObjectRequest
> = core.serialization.object({
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string()),
    object: core.serialization.lazy(() => serializers.CatalogObject),
});

export declare namespace UpsertCatalogObjectRequest {
    export interface Raw {
        idempotency_key: string;
        object: serializers.CatalogObject.Raw;
    }
}
