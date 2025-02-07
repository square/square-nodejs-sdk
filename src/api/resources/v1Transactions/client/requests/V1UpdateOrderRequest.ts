/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         locationId: "location_id",
 *         orderId: "order_id",
 *         action: "COMPLETE"
 *     }
 */
export interface V1UpdateOrderRequest {
    /**
     * The ID of the order's associated location.
     */
    locationId: string;
    /**
     * The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
     */
    orderId: string;
    /**
     * The action to perform on the order (COMPLETE, CANCEL, or REFUND).
     * See [V1UpdateOrderRequestAction](#type-v1updateorderrequestaction) for possible values
     */
    action: Square.V1UpdateOrderRequestAction;
    /** The tracking number of the shipment associated with the order. Only valid if action is COMPLETE. */
    shippedTrackingNumber?: string | null;
    /** A merchant-specified note about the completion of the order. Only valid if action is COMPLETE. */
    completedNote?: string | null;
    /** A merchant-specified note about the refunding of the order. Only valid if action is REFUND. */
    refundedNote?: string | null;
    /** A merchant-specified note about the canceling of the order. Only valid if action is CANCEL. */
    canceledNote?: string | null;
}
