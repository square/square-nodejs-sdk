/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response for an individual upsert request in a [BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes) operation.
 */
export interface BatchUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse {
    /** The ID of the customer profile associated with the custom attribute. */
    customerId?: string;
    /** The new or updated custom attribute. */
    customAttribute?: Square.CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Square.Error_[];
}
