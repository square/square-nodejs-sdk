/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response for an individual upsert request in a [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes) operation.
 */
export interface BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse {
    /** The ID of the merchant associated with the custom attribute. */
    merchantId?: string;
    /** The new or updated custom attribute. */
    customAttribute?: Square.CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Square.Error_[];
}
