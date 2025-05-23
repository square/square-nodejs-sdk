/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         customerId: "customer_id",
 *         cardNonce: "YOUR_CARD_NONCE",
 *         billingAddress: {
 *             addressLine1: "500 Electric Ave",
 *             addressLine2: "Suite 600",
 *             locality: "New York",
 *             administrativeDistrictLevel1: "NY",
 *             postalCode: "10003",
 *             country: "US"
 *         },
 *         cardholderName: "Amelia Earhart"
 *     }
 */
export interface CreateCustomerCardRequest {
    /**
     * The Square ID of the customer profile the card is linked to.
     */
    customerId: string;
    /**
     * A card nonce representing the credit card to link to the customer.
     *
     * Card nonces are generated by the Square payment form when customers enter
     * their card information. For more information, see
     * [Walkthrough: Integrate Square Payments in a Website](https://developer.squareup.com/docs/web-payments/take-card-payment).
     *
     * __NOTE:__ Card nonces generated by digital wallets (such as Apple Pay)
     * cannot be used to create a customer card.
     */
    cardNonce: string;
    /**
     * Address information for the card on file.
     *
     * __NOTE:__ If a billing address is provided in the request, the
     * `CreateCustomerCardRequest.billing_address.postal_code` must match
     * the postal code encoded in the card nonce.
     */
    billingAddress?: Square.Address;
    /** The full name printed on the credit card. */
    cardholderName?: string;
    /**
     * An identifying token generated by [Payments.verifyBuyer()](https://developer.squareup.com/reference/sdks/web/payments/objects/Payments#Payments.verifyBuyer).
     * Verification tokens encapsulate customer device information and 3-D Secure
     * challenge results to indicate that Square has verified the buyer identity.
     */
    verificationToken?: string;
}
