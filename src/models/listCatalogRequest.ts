import { bigint, object, optional, Schema, string } from '../schema';

export interface ListCatalogRequest {
  /**
   * The pagination cursor returned in the previous response. Leave unset for an initial request.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  cursor?: string;
  /**
   * An optional case-insensitive, comma-separated list of object types to retrieve, for example
   * `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.
   * The legal values are taken from the CatalogObjectType enum:
   * `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
   * `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
   */
  types?: string;
  /**
   * The specific version of the catalog objects to be included in the response.
   * This allows you to retrieve historical
   * versions of objects. The specified version value is matched against
   * the [CatalogObject](#type-catalogobject)s' `version` attribute.
   */
  catalogVersion?: bigint;
}

export const listCatalogRequestSchema: Schema<ListCatalogRequest> = object({
  cursor: ['cursor', optional(string())],
  types: ['types', optional(string())],
  catalogVersion: ['catalog_version', optional(bigint())],
});
