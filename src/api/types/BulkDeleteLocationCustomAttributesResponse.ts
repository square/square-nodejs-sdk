/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [BulkDeleteLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkDeleteLocationCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual delete request.
 */
export interface BulkDeleteLocationCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual delete requests. Each response has the
     * same key as the corresponding request.
     */
    values: Record<string, Square.BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
