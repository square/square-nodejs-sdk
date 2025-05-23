/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface ListCustomAttributeDefinitionsRequest {
    /**
     * Filters the `CustomAttributeDefinition` results by their `visibility` values.
     */
    visibilityFilter?: Square.VisibilityFilter | null;
    /**
     * The maximum number of results to return in a single paged response. This limit is advisory.
     * The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.
     * The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number | null;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint.
     * Provide this cursor to retrieve the next page of results for your original request.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string | null;
}
