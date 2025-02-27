/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         key: "key",
 *         customAttributeDefinition: {
 *             description: "Update the description as desired.",
 *             visibility: "VISIBILITY_READ_ONLY"
 *         }
 *     }
 */
export interface UpdateCustomerCustomAttributeDefinitionRequest {
    /**
     * The key of the custom attribute definition to update.
     */
    key: string;
    /**
     * The custom attribute definition that contains the fields to update. This endpoint
     * supports sparse updates, so only new or changed fields need to be included in the request.
     * Only the following fields can be updated:
     *
     * - `name`
     * - `description`
     * - `visibility`
     * - `schema` for a `Selection` data type. Only changes to the named options or the maximum number of allowed
     * selections are supported.
     *
     * For more information, see
     * [Updatable definition fields](https://developer.squareup.com/docs/customer-custom-attributes-api/custom-attribute-definitions#updatable-definition-fields).
     *
     * To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control, include the optional `version` field and specify the current version of the custom attribute definition.
     */
    customAttributeDefinition: Square.CustomAttributeDefinition;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
