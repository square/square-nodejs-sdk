/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity type](entity:GiftCardActivityType).
 */
export interface GiftCardActivityUnlinkedActivityRefund {
    /** The amount added to the gift card for the refund. This value is a positive integer. */
    amountMoney: Square.Money;
    /** A client-specified ID that associates the gift card activity with an entity in another system. */
    referenceId?: string | null;
    /** The ID of the refunded payment. This field is not used starting in Square version 2022-06-16. */
    paymentId?: string;
}
