/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         orderId: "order_id",
 *         customAttributeKey: "custom_attribute_key"
 *     }
 */
export interface CustomAttributesGetRequest {
    /**
     * The ID of the target [order](entity:Order).
     */
    orderId: string;
    /**
     * The key of the custom attribute to retrieve.  This key must match the key of an
     * existing custom attribute definition.
     */
    customAttributeKey: string;
    /**
     * To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
     * control, include this optional field and specify the current version of the custom attribute.
     */
    version?: number | null;
    /**
     * Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each
     * custom attribute. Set this parameter to `true` to get the name and description of each custom attribute,
     * information about the data type, or other definition details. The default value is `false`.
     */
    withDefinition?: boolean | null;
}
