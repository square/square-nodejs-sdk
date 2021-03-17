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
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField';
import {
  InvoicePaymentRequest,
  invoicePaymentRequestSchema,
} from './invoicePaymentRequest';
import { InvoiceRecipient, invoiceRecipientSchema } from './invoiceRecipient';
import { Money, moneySchema } from './money';

/**
 * Stores information about an invoice. You use the Invoices API to create and manage
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
   * The payment schedule for the invoice, represented by one or more payment requests that
   * define payment settings, such as amount due and due date. You can specify a maximum of 13
   * payment requests, with up to 12 `INSTALLMENT` request types. For more information, see
   * [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
   * This field is required when creating an invoice. It must contain at least one payment request.
   */
  paymentRequests?: InvoicePaymentRequest[];
  /** Indicates how Square delivers the [invoice](#type-Invoice) to the customer. */
  deliveryMethod?: string;
  /**
   * A user-friendly invoice number. The value is unique within a location.
   * If not provided when creating an invoice, Square assigns a value.
   * It increments from 1 and padded with zeros making it 7 characters long
   * for example, 0000001, 0000002.
   */
  invoiceNumber?: string;
  /** The title of the invoice. */
  title?: string;
  /** The description of the invoice. This is visible to the customer receiving the invoice. */
  description?: string;
  /**
   * The timestamp when the invoice is scheduled for processing, in RFC 3339 format.
   * After the invoice is published, Square processes the invoice on the specified date, according to the delivery method and payment request settings.
   * If the field is not set, Square processes the invoice immediately after it is published.
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
  /**
   * The time zone used to interpret calendar dates on the invoice, such as `due_date`. When an invoice is created, this field is set to the `timezone` specified for the seller location. The value cannot be changed.
   * For example, a payment `due_date` of 2021-03-09 with a `timezone` of America/Los\_Angeles becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC timestamp of 2021-03-10T08:00:00Z).
   */
  timezone?: string;
  /** The timestamp when the invoice was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the invoice was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Additional seller-defined fields to render on the invoice. These fields are visible to sellers and buyers
   * on the Square-hosted invoice page and in emailed or PDF copies of invoices. For more information, see
   * [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
   * Max: 2 custom fields
   */
  customFields?: InvoiceCustomField[];
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
  deliveryMethod: ['delivery_method', optional(string())],
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
  customFields: [
    'custom_fields',
    optional(array(lazy(() => invoiceCustomFieldSchema))),
  ],
});
