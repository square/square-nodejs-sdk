/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         locationId: "location_id",
 *         idempotencyKey: "86ae1696-b1e3-4328-af6d-f1e04d947ad6",
 *         order: {
 *             order: {
 *                 locationId: "location_id",
 *                 referenceId: "reference_id",
 *                 customerId: "customer_id",
 *                 lineItems: [{
 *                         name: "Printed T Shirt",
 *                         quantity: "2",
 *                         appliedTaxes: [{
 *                                 taxUid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3"
 *                             }],
 *                         appliedDiscounts: [{
 *                                 discountUid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4"
 *                             }],
 *                         basePriceMoney: {
 *                             amount: 1500,
 *                             currency: "USD"
 *                         }
 *                     }, {
 *                         name: "Slim Jeans",
 *                         quantity: "1",
 *                         basePriceMoney: {
 *                             amount: 2500,
 *                             currency: "USD"
 *                         }
 *                     }, {
 *                         name: "Woven Sweater",
 *                         quantity: "3",
 *                         basePriceMoney: {
 *                             amount: 3500,
 *                             currency: "USD"
 *                         }
 *                     }],
 *                 taxes: [{
 *                         uid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
 *                         type: "INCLUSIVE",
 *                         percentage: "7.75",
 *                         scope: "LINE_ITEM"
 *                     }],
 *                 discounts: [{
 *                         uid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
 *                         type: "FIXED_AMOUNT",
 *                         amountMoney: {
 *                             amount: 100,
 *                             currency: "USD"
 *                         },
 *                         scope: "LINE_ITEM"
 *                     }]
 *             },
 *             idempotencyKey: "12ae1696-z1e3-4328-af6d-f1e04d947gd4"
 *         },
 *         askForShippingAddress: true,
 *         merchantSupportEmail: "merchant+support@website.com",
 *         prePopulateBuyerEmail: "example@email.com",
 *         prePopulateShippingAddress: {
 *             addressLine1: "1455 Market St.",
 *             addressLine2: "Suite 600",
 *             locality: "San Francisco",
 *             administrativeDistrictLevel1: "CA",
 *             postalCode: "94103",
 *             country: "US",
 *             firstName: "Jane",
 *             lastName: "Doe"
 *         },
 *         redirectUrl: "https://merchant.website.com/order-confirm",
 *         additionalRecipients: [{
 *                 locationId: "057P5VYJ4A5X1",
 *                 description: "Application fees",
 *                 amountMoney: {
 *                     amount: 60,
 *                     currency: "USD"
 *                 }
 *             }]
 *     }
 */
export interface CreateCheckoutRequest {
    /**
     * The ID of the business location to associate the checkout with.
     */
    locationId: string;
    /**
     * A unique string that identifies this checkout among others you have created. It can be
     * any valid string but must be unique for every order sent to Square Checkout for a given location ID.
     *
     * The idempotency key is used to avoid processing the same order more than once. If you are
     * unsure whether a particular checkout was created successfully, you can attempt it again with
     * the same idempotency key and all the same other parameters without worrying about creating duplicates.
     *
     * You should use a random number/string generator native to the language
     * you are working in to generate strings for your idempotency keys.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /** The order including line items to be checked out. */
    order: Square.CreateOrderRequest;
    /**
     * If `true`, Square Checkout collects shipping information on your behalf and stores
     * that information with the transaction information in the Square Seller Dashboard.
     *
     * Default: `false`.
     */
    askForShippingAddress?: boolean;
    /**
     * The email address to display on the Square Checkout confirmation page
     * and confirmation email that the buyer can use to contact the seller.
     *
     * If this value is not set, the confirmation page and email display the
     * primary email address associated with the seller's Square account.
     *
     * Default: none; only exists if explicitly set.
     */
    merchantSupportEmail?: string;
    /**
     * If provided, the buyer's email is prepopulated on the checkout page
     * as an editable text field.
     *
     * Default: none; only exists if explicitly set.
     */
    prePopulateBuyerEmail?: string;
    /**
     * If provided, the buyer's shipping information is prepopulated on the
     * checkout page as editable text fields.
     *
     * Default: none; only exists if explicitly set.
     */
    prePopulateShippingAddress?: Square.Address;
    /**
     * The URL to redirect to after the checkout is completed with `checkoutId`,
     * `transactionId`, and `referenceId` appended as URL parameters. For example,
     * if the provided redirect URL is `http://www.example.com/order-complete`, a
     * successful transaction redirects the customer to:
     *
     * `http://www.example.com/order-complete?checkoutId=xxxxxx&amp;referenceId=xxxxxx&amp;transactionId=xxxxxx`
     *
     * If you do not provide a redirect URL, Square Checkout displays an order
     * confirmation page on your behalf; however, it is strongly recommended that
     * you provide a redirect URL so you can verify the transaction results and
     * finalize the order through your existing/normal confirmation workflow.
     *
     * Default: none; only exists if explicitly set.
     */
    redirectUrl?: string;
    /**
     * The basic primitive of a multi-party transaction. The value is optional.
     * The transaction facilitated by you can be split from here.
     *
     * If you provide this value, the `amount_money` value in your `additional_recipients` field
     * cannot be more than 90% of the `total_money` calculated by Square for your order.
     * The `location_id` must be a valid seller location where the checkout is occurring.
     *
     * This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.
     *
     * This field is currently not supported in the Square Sandbox.
     */
    additionalRecipients?: Square.ChargeRequestAdditionalRecipient[];
    /**
     * An optional note to associate with the `checkout` object.
     *
     * This value cannot exceed 60 characters.
     */
    note?: string;
}
