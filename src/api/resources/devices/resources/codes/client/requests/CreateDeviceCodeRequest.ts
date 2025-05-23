/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         idempotencyKey: "01bb00a6-0c86-4770-94ed-f5fca973cd56",
 *         deviceCode: {
 *             name: "Counter 1",
 *             productType: "TERMINAL_API",
 *             locationId: "B5E4484SHHNYH"
 *         }
 *     }
 */
export interface CreateDeviceCodeRequest {
    /**
     * A unique string that identifies this CreateDeviceCode request. Keys can
     * be any valid string but must be unique for every CreateDeviceCode request.
     *
     * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
     */
    idempotencyKey: string;
    /** The device code to create. */
    deviceCode: Square.DeviceCode;
}
