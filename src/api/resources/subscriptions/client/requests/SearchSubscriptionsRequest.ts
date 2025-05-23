/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         query: {
 *             filter: {
 *                 customerIds: ["CHFGVKYY8RSV93M5KCYTG4PN0G"],
 *                 locationIds: ["S8GWD5R9QB376"],
 *                 sourceNames: ["My App"]
 *             }
 *         }
 *     }
 */
export interface SearchSubscriptionsRequest {
    /**
     * When the total number of resulting subscriptions exceeds the limit of a paged response,
     * specify the cursor returned from a preceding response here to fetch the next set of results.
     * If the cursor is unset, the response contains the last page of the results.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The upper limit on the number of subscriptions to return
     * in a paged response.
     */
    limit?: number;
    /**
     * A subscription query consisting of specified filtering conditions.
     *
     * If this `query` field is unspecified, the `SearchSubscriptions` call will return all subscriptions.
     */
    query?: Square.SearchSubscriptionsQuery;
    /**
     * An option to include related information in the response.
     *
     * The supported values are:
     *
     * - `actions`: to include scheduled actions on the targeted subscriptions.
     */
    include?: string[];
}
