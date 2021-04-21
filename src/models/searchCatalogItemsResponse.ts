import { array, lazy, object, optional, Schema, string } from '../schema';
import { CatalogObject, catalogObjectSchema } from './catalogObject';
import { Error, errorSchema } from './error';

/** Defines the response body returned from the [SearchCatalogItems]($e/Catalog/SearchCatalogItems) endpoint. */
export interface SearchCatalogItemsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Returned items matching the specified query expressions. */
  items?: CatalogObject[];
  /** Pagination token used in the next request to return more of the search result. */
  cursor?: string;
  /** Ids of returned item variations matching the specified query expression. */
  matchedVariationIds?: string[];
}

export const searchCatalogItemsResponseSchema: Schema<SearchCatalogItemsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    items: ['items', optional(array(lazy(() => catalogObjectSchema)))],
    cursor: ['cursor', optional(string())],
    matchedVariationIds: ['matched_variation_ids', optional(array(string()))],
  }
);
