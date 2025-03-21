/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ListCardsRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     *
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string | null;
    /**
     * Limit results to cards associated with the customer supplied.
     * By default, all cards owned by the merchant are returned.
     */
    customerId?: string | null;
    /**
     * Includes disabled cards.
     * By default, all enabled cards owned by the merchant are returned.
     */
    includeDisabled?: boolean | null;
    /**
     * Limit results to cards associated with the reference_id supplied.
     */
    referenceId?: string | null;
    /**
     * Sorts the returned list by when the card was created with the specified order.
     * This field defaults to ASC.
     */
    sortOrder?: Square.SortOrder | null;
}
