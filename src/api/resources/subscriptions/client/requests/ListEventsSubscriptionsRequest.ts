/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         subscriptionId: "subscription_id"
 *     }
 */
export interface ListEventsSubscriptionsRequest {
    /**
     * The ID of the subscription to retrieve the events for.
     */
    subscriptionId: string;
    /**
     * When the total number of resulting subscription events exceeds the limit of a paged response,
     * specify the cursor returned from a preceding response here to fetch the next set of results.
     * If the cursor is unset, the response contains the last page of the results.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string | null;
    /**
     * The upper limit on the number of subscription events to return
     * in a paged response.
     */
    limit?: number | null;
}
