import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoicePaymentRequest,
  invoicePaymentRequestSchema,
} from './invoicePaymentRequest';
import { InvoiceRecipient, invoiceRecipientSchema } from './invoiceRecipient';
import { Money, moneySchema } from './money';

/**
 * Stores information about an invoice. You use the Invoices API to create and process
 * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
 */
export interface Invoice {
  /** The Square-assigned ID of the invoice. */
  id?: string;
  /** The Square-assigned version number, which is incremented each time an update is committed to the invoice. */
  version?: number;
  /**
   * The ID of the location that this invoice is associated with.
   * This field is required when creating an invoice.
   */
  locationId?: string;
  /**
   * The ID of the [order](#type-order) for which the invoice is created.
   * This order must be in the `OPEN` state and must belong to the `location_id`
   * specified for this invoice. This field is required when creating an invoice.
   */
  orderId?: string;
  /** Provides customer data that Square uses to deliver an invoice. */
  primaryRecipient?: InvoiceRecipient;
  /**
   * An array of `InvoicePaymentRequest` objects. Each object defines
   * a payment request in an invoice payment schedule. It provides information
   * such as when and how Square processes payments. You must specify at least one payment request. For invoices
   * with multiple payment requests, you can specify a maximum of 12 `INSTALLMENT` request types. All of the payment requests must specify the
   * same `request_method`.
   * This field is required when creating an invoice.
   */
  paymentRequests?: InvoicePaymentRequest[];
  /**
   * A user-friendly invoice number. The value is unique within a location.
   * If not provided when creating an invoice, Square assigns a value.
   * It increments from 1 and padded with zeros making it 7 characters long
   * for example, 0000001, 0000002.
   */
  invoiceNumber?: string;
  /** The title of the invoice. */
  title?: string;
  /** The description of the invoice. This is visible the customer receiving the invoice. */
  description?: string;
  /**
   * The timestamp when the invoice is scheduled for processing, in RFC 3339 format.
   * At the specified time, depending on the `request_method`, Square sends the
   * invoice to the customer's email address or charge the customer's card on file.
   * If the field is not set, Square processes the invoice immediately after publication.
   */
  scheduledAt?: string;
  /**
   * The URL of the Square-hosted invoice page.
   * After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice
   * page and returns the page URL in the response.
   */
  publicUrl?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  nextPaymentAmountMoney?: Money;
  /** Indicates the status of an invoice. */
  status?: string;
  /** The time zone of the date values (for example, `due_date`) specified in the invoice. */
  timezone?: string;
  /** The timestamp when the invoice was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the invoice was last updated, in RFC 3339 format. */
  updatedAt?: string;
}

export const invoiceSchema: Schema<Invoice> = object({
  id: ['id', optional(string())],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(string())],
  orderId: ['order_id', optional(string())],
  primaryRecipient: [
    'primary_recipient',
    optional(lazy(() => invoiceRecipientSchema)),
  ],
  paymentRequests: [
    'payment_requests',
    optional(array(lazy(() => invoicePaymentRequestSchema))),
  ],
  invoiceNumber: ['invoice_number', optional(string())],
  title: ['title', optional(string())],
  description: ['description', optional(string())],
  scheduledAt: ['scheduled_at', optional(string())],
  publicUrl: ['public_url', optional(string())],
  nextPaymentAmountMoney: [
    'next_payment_amount_money',
    optional(lazy(() => moneySchema)),
  ],
  status: ['status', optional(string())],
  timezone: ['timezone', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
