/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         customAttributeDefinition: {}
 *     }
 */
export interface CreateBookingCustomAttributeDefinitionRequest {
    /**
     * The custom attribute definition to create, with the following fields:
     *
     * - `key`
     *
     * - `name`. If provided, `name` must be unique (case-sensitive) across all visible booking-related custom attribute
     * definitions for the seller.
     *
     * - `description`
     *
     * - `visibility`. Note that all custom attributes are visible in exported booking data, including those set to
     * `VISIBILITY_HIDDEN`.
     *
     * - `schema`. With the exception of the `Selection` data type, the `schema` is specified as a
     * simple URL to the JSON schema definition hosted on the Square CDN. For more information, see
     * [Specifying the schema](https://developer.squareup.com/docs/booking-custom-attributes-api/custom-attribute-definitions#specify-schema).
     */
    customAttributeDefinition: Square.CustomAttributeDefinition;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string;
}
