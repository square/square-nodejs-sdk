/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         locationId: "location_id",
 *         orderId: "order_id"
 *     }
 */
export interface V1RetrieveOrderRequest {
    /**
     * The ID of the order's associated location.
     */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
     */
    orderId: string;
}
