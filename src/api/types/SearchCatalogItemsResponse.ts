/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the response body returned from the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint.
 */
export interface SearchCatalogItemsResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** Returned items matching the specified query expressions. */
    items?: Square.CatalogObject[];
    /** Pagination token used in the next request to return more of the search result. */
    cursor?: string;
    /** Ids of returned item variations matching the specified query expression. */
    matchedVariationIds?: string[];
}
