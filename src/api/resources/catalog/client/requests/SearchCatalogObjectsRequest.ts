/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         objectTypes: ["ITEM"],
 *         query: {
 *             prefixQuery: {
 *                 attributeName: "name",
 *                 attributePrefix: "tea"
 *             }
 *         },
 *         limit: 100
 *     }
 */
export interface SearchCatalogObjectsRequest {
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string;
    /**
     * The desired set of object types to appear in the search results.
     *
     * If this is unspecified, the operation returns objects of all the top level types at the version
     * of the Square API used to make the request. Object types that are nested onto other object types
     * are not included in the defaults.
     *
     * At the current API version the default object types are:
     * ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST,
     * PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT,
     * SUBSCRIPTION_PLAN, ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS.
     *
     * Note that if you wish for the query to return objects belonging to nested types (i.e., COMPONENT, IMAGE,
     * ITEM_OPTION_VAL, ITEM_VARIATION, or MODIFIER), you must explicitly include all the types of interest
     * in this field.
     */
    objectTypes?: Square.CatalogObjectType[];
    /** If `true`, deleted objects will be included in the results. Defaults to `false`. Deleted objects will have their `is_deleted` field set to `true`. If `include_deleted_objects` is `true`, then the `include_category_path_to_root` request parameter must be `false`. Both properties cannot be `true` at the same time. */
    includeDeletedObjects?: boolean;
    /**
     * If `true`, the response will include additional objects that are related to the
     * requested objects. Related objects are objects that are referenced by object ID by the objects
     * in the response. This is helpful if the objects are being fetched for immediate display to a user.
     * This process only goes one level deep. Objects referenced by the related objects will not be included.
     * For example:
     *
     * If the `objects` field of the response contains a CatalogItem, its associated
     * CatalogCategory objects, CatalogTax objects, CatalogImage objects and
     * CatalogModifierLists will be returned in the `related_objects` field of the
     * response. If the `objects` field of the response contains a CatalogItemVariation,
     * its parent CatalogItem will be returned in the `related_objects` field of
     * the response.
     *
     * Default value: `false`
     */
    includeRelatedObjects?: boolean;
    /**
     * Return objects modified after this [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), in RFC 3339
     * format, e.g., `2016-09-04T23:59:33.123Z`. The timestamp is exclusive - objects with a
     * timestamp equal to `begin_time` will not be included in the response.
     */
    beginTime?: string;
    /** A query to be used to filter or sort the results. If no query is specified, the entire catalog will be returned. */
    query?: Square.CatalogQuery;
    /**
     * A limit on the number of results to be returned in a single page. The limit is advisory -
     * the implementation may return more or fewer results. If the supplied limit is negative, zero, or
     * is higher than the maximum limit of 1,000, it will be ignored.
     */
    limit?: number;
    /** Specifies whether or not to include the `path_to_root` list for each returned category instance. The `path_to_root` list consists of `CategoryPathToRootNode` objects and specifies the path that starts with the immediate parent category of the returned category and ends with its root category. If the returned category is a top-level category, the `path_to_root` list is empty and is not returned in the response payload. If `include_category_path_to_root` is `true`, then the `include_deleted_objects` request parameter must be `false`. Both properties cannot be `true` at the same time. */
    includeCategoryPathToRoot?: boolean;
}
