/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../index";

/**
 * @example
 *     {
 *         invoice: {
 *             locationId: "ES0RJRZYEC39A",
 *             orderId: "CAISENgvlJ6jLWAzERDzjyHVybY",
 *             primaryRecipient: {
 *                 customerId: "JDKYHBWT1D4F8MFH63DBMEN8Y4"
 *             },
 *             paymentRequests: [{
 *                     requestType: "BALANCE",
 *                     dueDate: "2030-01-24",
 *                     tippingEnabled: true,
 *                     automaticPaymentSource: "NONE",
 *                     reminders: [{
 *                             relativeScheduledDays: -1,
 *                             message: "Your invoice is due tomorrow"
 *                         }]
 *                 }],
 *             deliveryMethod: "EMAIL",
 *             invoiceNumber: "inv-100",
 *             title: "Event Planning Services",
 *             description: "We appreciate your business!",
 *             scheduledAt: "2030-01-13T10:00:00Z",
 *             acceptedPaymentMethods: {
 *                 card: true,
 *                 squareGiftCard: false,
 *                 bankAccount: false,
 *                 buyNowPayLater: false,
 *                 cashAppPay: false
 *             },
 *             customFields: [{
 *                     label: "Event Reference Number",
 *                     value: "Ref. #1234",
 *                     placement: "ABOVE_LINE_ITEMS"
 *                 }, {
 *                     label: "Terms of Service",
 *                     value: "The terms of service are...",
 *                     placement: "BELOW_LINE_ITEMS"
 *                 }],
 *             saleOrServiceDate: "2030-01-24",
 *             storePaymentMethodEnabled: false
 *         },
 *         idempotencyKey: "ce3748f9-5fc1-4762-aa12-aae5e843f1f4"
 *     }
 */
export interface CreateInvoiceRequest {
    /** The invoice to create. */
    invoice: Square.Invoice;
    /**
     * A unique string that identifies the `CreateInvoice` request. If you do not
     * provide `idempotency_key` (or provide an empty string as the value), the endpoint
     * treats each request as independent.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string;
}
