import { object, optional, Schema, string } from '../schema';

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
}

export const listCatalogRequestSchema: Schema<ListCatalogRequest> = object({
  cursor: ['cursor', optional(string())],
  types: ['types', optional(string())],
});
