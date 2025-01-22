/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         orderId: "order_id",
 *         order: {
 *             locationId: "location_id",
 *             lineItems: [{
 *                     uid: "cookie_uid",
 *                     name: "COOKIE",
 *                     quantity: "2",
 *                     basePriceMoney: {
 *                         amount: 200,
 *                         currency: "USD"
 *                     }
 *                 }],
 *             version: 1
 *         },
 *         fieldsToClear: ["discounts"],
 *         idempotencyKey: "UNIQUE_STRING"
 *     }
 */
export interface UpdateOrderRequest {
    /**
     * The ID of the order to update.
     */
    orderId: string;
    /**
     * The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#sparse-order-objects)
     * containing only the fields to update and the version to which the update is
     * being applied.
     */
    order?: Square.Order;
    /**
     * The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
     * fields to clear. For example, `line_items[uid].note`.
     * For more information, see [Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#deleting-fields).
     */
    fieldsToClear?: string[] | null;
    /**
     * A value you specify that uniquely identifies this update request.
     *
     * If you are unsure whether a particular update was applied to an order successfully,
     * you can reattempt it with the same idempotency key without
     * worrying about creating duplicate updates to the order.
     * The latest order version is returned.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
