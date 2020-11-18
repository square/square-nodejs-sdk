import {
  array,
  boolean,
  lazy,
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
 * Describes a specific payment request in an invoice. Invoices that contain multiple payment requests can
 * specify a maximum of 12 `INSTALLMENT` request types. All of the payment requests must specify the same `request_method`.
 * For more information,
 * see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
 */
export interface InvoicePaymentRequest {
  /** The Square-generated ID of the payment request in an [invoice](#type-invoice). */
  uid?: string;
  /**
   * Specifies the action for Square to take for processing the invoice. For example,
   * email the invoice, charge a customer's card on file, or do nothing.
   */
  requestMethod?: string;
  /**
   * Indicates the type of the payment request. An invoice supports the following payment request combinations:
   * - 1 balance
   * - 1 deposit with 1 balance
   * - 2 - 12 installments
   * - 1 deposit with 2 - 12 installments
   * For more information,
   * see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
   */
  requestType?: string;
  /**
   * The due date (in the invoice location's time zone) for the payment request.
   * After this date, the invoice becomes overdue.
   */
  dueDate?: string;
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
   * - When the payment `request_type` is `DEPOSIT`, it is the percentage of the order total amount.
   * - When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order total less
   * the deposit, if requested. The sum of the `percentage_requested` in all installment
   * payment requests must be equal to 100.
   * You cannot specify this when the payment `request_type` is `BALANCE` or when the
   * payment request specifies the `fixed_amount_requested_money` field.
   */
  percentageRequested?: string;
  /**
   * If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)
   * provides a place for the customer to pay a tip.
   * This field is allowed only on the final payment request
   * and the payment `request_type` must be `BALANCE` or `INSTALLMENT`.
   */
  tippingEnabled?: boolean;
  /**
   * If the request method is `CHARGE_CARD_ON_FILE`, this field provides the
   * card to charge.
   */
  cardId?: string;
  /** A list of one or more reminders to send for the payment request. */
  reminders?: InvoicePaymentReminder[];
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
    uid: ['uid', optional(string())],
    requestMethod: ['request_method', optional(string())],
    requestType: ['request_type', optional(string())],
    dueDate: ['due_date', optional(string())],
    fixedAmountRequestedMoney: [
      'fixed_amount_requested_money',
      optional(lazy(() => moneySchema)),
    ],
    percentageRequested: ['percentage_requested', optional(string())],
    tippingEnabled: ['tipping_enabled', optional(boolean())],
    cardId: ['card_id', optional(string())],
    reminders: [
      'reminders',
      optional(array(lazy(() => invoicePaymentReminderSchema))),
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
