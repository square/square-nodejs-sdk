/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { CatalogObjectBatch } from "../../../../types/CatalogObjectBatch";

export const BatchUpsertCatalogObjectsRequest: core.serialization.Schema<
    serializers.BatchUpsertCatalogObjectsRequest.Raw,
    Square.BatchUpsertCatalogObjectsRequest
> = core.serialization.object({
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string()),
    batches: core.serialization.list(CatalogObjectBatch),
});

export declare namespace BatchUpsertCatalogObjectsRequest {
    export interface Raw {
        idempotency_key: string;
        batches: CatalogObjectBatch.Raw[];
    }
}
