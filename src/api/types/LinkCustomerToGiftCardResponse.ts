/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A response that contains the linked `GiftCard` object. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface LinkCustomerToGiftCardResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The gift card with the ID of the linked customer listed in the `customer_ids` field. */
    giftCard?: Square.GiftCard;
}
