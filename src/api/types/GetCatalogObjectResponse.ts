/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface GetCatalogObjectResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The `CatalogObject`s returned. */
    object?: Square.CatalogObject;
    /** A list of `CatalogObject`s referenced by the object in the `object` field. */
    relatedObjects?: Square.CatalogObject[];
}
