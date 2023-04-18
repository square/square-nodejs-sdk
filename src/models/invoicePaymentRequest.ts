import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoicePaymentReminder,
  invoicePaymentReminderSchema,
} from './invoicePaymentReminder';
import { Money, moneySchema } from './money';

/**
 * Represents a payment request for an [invoice]($m/Invoice). Invoices can specify a maximum
 * of 13 payment requests, with up to 12 `INSTALLMENT` request types. For more information,
 * see [Configuring payment requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests).
 * Adding `INSTALLMENT` payment requests to an invoice requires an
 * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
 */
export interface InvoicePaymentRequest {
  /** The Square-generated ID of the payment request in an [invoice](entity:Invoice). */
  uid?: string | null;
  /**
   * Specifies the action for Square to take for processing the invoice. For example,
   * email the invoice, charge a customer's card on file, or do nothing. DEPRECATED at
   * version 2021-01-21. The corresponding `request_method` field is replaced by the
   * `Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields.
   */
  requestMethod?: string;
  /**
   * Indicates the type of the payment request. For more information, see
   * [Configuring payment requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests).
   */
  requestType?: string;
  /**
   * The due date (in the invoice's time zone) for the payment request, in `YYYY-MM-DD` format. This field
   * is required to create a payment request. If an `automatic_payment_source` is defined for the request, Square
   * charges the payment source on this date.
   * After this date, the invoice becomes overdue. For example, a payment `due_date` of 2021-03-09 with a `timezone`
   * of America/Los\_Angeles becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC
   * timestamp of 2021-03-10T08:00:00Z).
   */
  dueDate?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  fixedAmountRequestedMoney?: Money;
  /**
   * Specifies the amount for the payment request in percentage:
   * - When the payment `request_type` is `DEPOSIT`, it is the percentage of the order's total amount.
   * - When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order's total less
   * the deposit, if requested. The sum of the `percentage_requested` in all installment
   * payment requests must be equal to 100.
   * You cannot specify this when the payment `request_type` is `BALANCE` or when the
   * payment request specifies the `fixed_amount_requested_money` field.
   */
  percentageRequested?: string | null;
  /**
   * If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)
   * provides a place for the customer to pay a tip.
   * This field is allowed only on the final payment request
   * and the payment `request_type` must be `BALANCE` or `INSTALLMENT`.
   */
  tippingEnabled?: boolean | null;
  /** Indicates the automatic payment method for an [invoice payment request]($m/InvoicePaymentRequest). */
  automaticPaymentSource?: string;
  /**
   * The ID of the credit or debit card on file to charge for the payment request. To get the cards on file for a customer,
   * call [ListCards](api-endpoint:Cards-ListCards) and include the `customer_id` of the invoice recipient.
   */
  cardId?: string | null;
  /** A list of one or more reminders to send for the payment request. */
  reminders?: InvoicePaymentReminder[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  computedAmountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalCompletedAmountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  roundingAdjustmentIncludedMoney?: Money;
}

export const invoicePaymentRequestSchema: Schema<InvoicePaymentRequest> = object(
  {
    uid: ['uid', optional(nullable(string()))],
    requestMethod: ['request_method', optional(string())],
    requestType: ['request_type', optional(string())],
    dueDate: ['due_date', optional(nullable(string()))],
    fixedAmountRequestedMoney: [
      'fixed_amount_requested_money',
      optional(lazy(() => moneySchema)),
    ],
    percentageRequested: ['percentage_requested', optional(nullable(string()))],
    tippingEnabled: ['tipping_enabled', optional(nullable(boolean()))],
    automaticPaymentSource: ['automatic_payment_source', optional(string())],
    cardId: ['card_id', optional(nullable(string()))],
    reminders: [
      'reminders',
      optional(nullable(array(lazy(() => invoicePaymentReminderSchema)))),
    ],
    computedAmountMoney: [
      'computed_amount_money',
      optional(lazy(() => moneySchema)),
    ],
    totalCompletedAmountMoney: [
      'total_completed_amount_money',
      optional(lazy(() => moneySchema)),
    ],
    roundingAdjustmentIncludedMoney: [
      'rounding_adjustment_included_money',
      optional(lazy(() => moneySchema)),
    ],
  }
);
