/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a [RetrieveBookingCustomAttributeDefinition](api-endpoint:BookingCustomAttributes-RetrieveBookingCustomAttributeDefinition) response.
 * Either `custom_attribute_definition` or `errors` is present in the response.
 */
export interface RetrieveBookingCustomAttributeDefinitionResponse {
    /** The retrieved custom attribute definition. */
    customAttributeDefinition?: Square.CustomAttributeDefinition;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
