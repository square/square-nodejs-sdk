/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         loyaltyAccount: {
 *             programId: "d619f755-2d17-41f3-990d-c04ecedd64dd",
 *             mapping: {
 *                 phoneNumber: "+14155551234"
 *             }
 *         },
 *         idempotencyKey: "ec78c477-b1c3-4899-a209-a4e71337c996"
 *     }
 */
export interface CreateLoyaltyAccountRequest {
    /** The loyalty account to create. */
    loyaltyAccount: Square.LoyaltyAccount;
    /**
     * A unique string that identifies this `CreateLoyaltyAccount` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
