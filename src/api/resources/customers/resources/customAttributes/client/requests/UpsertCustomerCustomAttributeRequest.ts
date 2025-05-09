/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         customerId: "customer_id",
 *         key: "key",
 *         customAttribute: {
 *             value: "Dune"
 *         }
 *     }
 */
export interface UpsertCustomerCustomAttributeRequest {
    /**
     * The ID of the target [customer profile](entity:Customer).
     */
    customerId: string;
    /**
     * The key of the custom attribute to create or update. This key must match the `key` of a
     * custom attribute definition in the Square seller account. If the requesting application is not
     * the definition owner, you must use the qualified key.
     */
    key: string;
    /**
     * The custom attribute to create or update, with the following fields:
     *
     * - `value`. This value must conform to the `schema` specified by the definition.
     * For more information, see [Value data types](https://developer.squareup.com/docs/customer-custom-attributes-api/custom-attributes#value-data-types).
     *
     * - `version`. To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control for an update operation, include this optional field and specify the current version
     * of the custom attribute.
     */
    customAttribute: Square.CustomAttribute;
    /**
     * A unique identifier for this request, used to ensure idempotency. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
