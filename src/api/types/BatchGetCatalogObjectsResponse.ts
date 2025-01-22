/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface BatchGetCatalogObjectsResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** A list of [CatalogObject](entity:CatalogObject)s returned. */
    objects?: Square.CatalogObject[];
    /** A list of [CatalogObject](entity:CatalogObject)s referenced by the object in the `objects` field. */
    relatedObjects?: Square.CatalogObject[];
}
