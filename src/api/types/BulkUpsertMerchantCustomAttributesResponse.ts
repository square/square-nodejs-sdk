/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertMerchantCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual upsert requests. Each response has the
     * same ID as the corresponding request and contains either a `merchant_id` and `custom_attribute` or an `errors` field.
     */
    values?: Record<string, Square.BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
