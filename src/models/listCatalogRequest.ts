import { bigint, object, optional, Schema, string } from '../schema';

export interface ListCatalogRequest {
  /**
   * The pagination cursor returned in the previous response. Leave unset for an initial request.
   * The page size is currently set to be 100.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /**
   * An optional case-insensitive, comma-separated list of object types to retrieve.
   * The valid values are defined in the [CatalogObjectType]($m/CatalogObjectType) enum, including
   * `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
   * `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
   * If this is unspecified, the operation returns objects of all the types at the version of the Square API used to make the request.
   */
  types?: string;
  /**
   * The specific version of the catalog objects to be included in the response.
   * This allows you to retrieve historical
   * versions of objects. The specified version value is matched against
   * the [CatalogObject]($m/CatalogObject)s' `version` attribute.
   */
  catalogVersion?: bigint;
}

export const listCatalogRequestSchema: Schema<ListCatalogRequest> = object({
  cursor: ['cursor', optional(string())],
  types: ['types', optional(string())],
  catalogVersion: ['catalog_version', optional(bigint())],
});
