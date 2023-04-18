import { bigint, nullable, object, optional, Schema, string } from '../schema';

export interface ListCatalogRequest {
  /**
   * The pagination cursor returned in the previous response. Leave unset for an initial request.
   * The page size is currently set to be 100.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
   */
  cursor?: string | null;
  /**
   * An optional case-insensitive, comma-separated list of object types to retrieve.
   * The valid values are defined in the [CatalogObjectType](entity:CatalogObjectType) enum, for example,
   * `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,
   * `MODIFIER`, `MODIFIER_LIST`, `IMAGE`, etc.
   * If this is unspecified, the operation returns objects of all the top level types at the version
   * of the Square API used to make the request. Object types that are nested onto other object types
   * are not included in the defaults.
   * At the current API version the default object types are:
   * ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST,
   * PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT,
   * SUBSCRIPTION_PLAN, ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS.
   */
  types?: string | null;
  /**
   * The specific version of the catalog objects to be included in the response.
   * This allows you to retrieve historical versions of objects. The specified version value is matched against
   * the [CatalogObject]($m/CatalogObject)s' `version` attribute.  If not included, results will be from the
   * current version of the catalog.
   */
  catalogVersion?: bigint | null;
}

export const listCatalogRequestSchema: Schema<ListCatalogRequest> = object({
  cursor: ['cursor', optional(nullable(string()))],
  types: ['types', optional(nullable(string()))],
  catalogVersion: ['catalog_version', optional(nullable(bigint()))],
});
