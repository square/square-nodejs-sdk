/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a checkout processed by the Square Terminal.
 */
export interface TerminalCheckout {
    /** A unique ID for this `TerminalCheckout`. */
    id?: string;
    /** The amount of money (including the tax amount) that the Square Terminal device should try to collect. */
    amountMoney: Square.Money;
    /**
     * An optional user-defined reference ID that can be used to associate
     * this `TerminalCheckout` to another entity in an external system. For example, an order
     * ID generated by a third-party shopping cart. The ID is also associated with any payments
     * used to complete the checkout.
     */
    referenceId?: string | null;
    /**
     * An optional note to associate with the checkout, as well as with any payments used to complete the checkout.
     * Note: maximum 500 characters
     */
    note?: string | null;
    /** The reference to the Square order ID for the checkout request. */
    orderId?: string | null;
    /** Payment-specific options for the checkout request. */
    paymentOptions?: Square.PaymentOptions;
    /** Options to control the display and behavior of the Square Terminal device. */
    deviceOptions: Square.DeviceCheckoutOptions;
    /**
     * An RFC 3339 duration, after which the checkout is automatically canceled.
     * A `TerminalCheckout` that is `PENDING` is automatically `CANCELED` and has a cancellation reason
     * of `TIMED_OUT`.
     *
     * Default: 5 minutes from creation
     *
     * Maximum: 5 minutes
     */
    deadlineDuration?: string | null;
    /**
     * The status of the `TerminalCheckout`.
     * Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`
     */
    status?: string;
    /**
     * The reason why `TerminalCheckout` is canceled. Present if the status is `CANCELED`.
     * See [ActionCancelReason](#type-actioncancelreason) for possible values
     */
    cancelReason?: Square.ActionCancelReason;
    /** A list of IDs for payments created by this `TerminalCheckout`. */
    paymentIds?: string[];
    /** The time when the `TerminalCheckout` was created, as an RFC 3339 timestamp. */
    createdAt?: string;
    /** The time when the `TerminalCheckout` was last updated, as an RFC 3339 timestamp. */
    updatedAt?: string;
    /** The ID of the application that created the checkout. */
    appId?: string;
    /** The location of the device where the `TerminalCheckout` was directed. */
    locationId?: string;
    /**
     * The type of payment the terminal should attempt to capture from. Defaults to `CARD_PRESENT`.
     * See [CheckoutOptionsPaymentType](#type-checkoutoptionspaymenttype) for possible values
     */
    paymentType?: Square.CheckoutOptionsPaymentType;
    /** An optional ID of the team member associated with creating the checkout. */
    teamMemberId?: string | null;
    /** An optional ID of the customer associated with the checkout. */
    customerId?: string | null;
    /**
     * The amount the developer is taking as a fee for facilitating the payment on behalf
     * of the seller.
     *
     * The amount cannot be more than 90% of the total amount of the payment.
     *
     * The amount must be specified in the smallest denomination of the applicable currency (for example, US dollar amounts are specified in cents). For more information, see [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
     *
     * The fee currency code must match the currency associated with the seller that is accepting the payment. The application must be from a developer account in the same country and using the same currency code as the seller.
     *
     * For more information about the application fee scenario, see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
     *
     * To set this field, PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS OAuth permission is required. For more information, see [Permissions](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees#permissions).
     */
    appFeeMoney?: Square.Money;
    /**
     * Optional additional payment information to include on the customer's card statement as
     * part of the statement description. This can be, for example, an invoice number, ticket number,
     * or short description that uniquely identifies the purchase.
     */
    statementDescriptionIdentifier?: string | null;
    /**
     * The amount designated as a tip, in addition to `amount_money`. This may only be set for a
     * checkout that has tipping disabled (`tip_settings.allow_tipping` is `false`).
     */
    tipMoney?: Square.Money;
}
