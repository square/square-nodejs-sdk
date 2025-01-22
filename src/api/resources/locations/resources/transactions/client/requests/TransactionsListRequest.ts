/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         locationId: "location_id"
 *     }
 */
export interface TransactionsListRequest {
    /**
     * The ID of the location to list transactions for.
     */
    locationId: string;
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     *
     * Default value: The current time minus one year.
     */
    beginTime?: string | null;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     *
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     *
     * Default value: The current time.
     */
    endTime?: string | null;
    /**
     * The order in which results are listed in the response (`ASC` for
     * oldest first, `DESC` for newest first).
     *
     * Default value: `DESC`
     */
    sortOrder?: Square.SortOrder | null;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string | null;
}
