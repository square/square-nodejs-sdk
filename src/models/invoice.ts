import {
  array,
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoiceAcceptedPaymentMethods,
  invoiceAcceptedPaymentMethodsSchema,
} from './invoiceAcceptedPaymentMethods';
import {
  InvoiceAttachment,
  invoiceAttachmentSchema,
} from './invoiceAttachment';
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
 * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
 */
export interface Invoice {
  /** The Square-assigned ID of the invoice. */
  id?: string;
  /** The Square-assigned version number, which is incremented each time an update is committed to the invoice. */
  version?: number;
  /**
   * The ID of the location that this invoice is associated with.
   * If specified in a `CreateInvoice` request, the value must match the `location_id` of the associated order.
   */
  locationId?: string | null;
  /**
   * The ID of the [order](entity:Order) for which the invoice is created.
   * This field is required when creating an invoice, and the order must be in the `OPEN` state.
   * To view the line items and other information for the associated order, call the
   * [RetrieveOrder](api-endpoint:Orders-RetrieveOrder) endpoint using the order ID.
   */
  orderId?: string | null;
  /**
   * Represents a snapshot of customer data. This object stores customer data that is displayed on the invoice
   * and that Square uses to deliver the invoice.
   * When you provide a customer ID for a draft invoice, Square retrieves the associated customer profile and populates
   * the remaining `InvoiceRecipient` fields. You cannot update these fields after the invoice is published.
   * Square updates the customer ID in response to a merge operation, but does not update other fields.
   */
  primaryRecipient?: InvoiceRecipient;
  /**
   * The payment schedule for the invoice, represented by one or more payment requests that
   * define payment settings, such as amount due and due date. An invoice supports the following payment request combinations:
   * - One balance
   * - One deposit with one balance
   * - 2–12 installments
   * - One deposit with 2–12 installments
   * This field is required when creating an invoice. It must contain at least one payment request.
   * All payment requests for the invoice must equal the total order amount. For more information, see
   * [Configuring payment requests](https://developer.squareup.com/docs/invoices-api/create-publish-invoices#payment-requests).
   * Adding `INSTALLMENT` payment requests to an invoice requires an
   * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
   */
  paymentRequests?: InvoicePaymentRequest[] | null;
  /** Indicates how Square delivers the [invoice]($m/Invoice) to the customer. */
  deliveryMethod?: string;
  /**
   * A user-friendly invoice number that is displayed on the invoice. The value is unique within a location.
   * If not provided when creating an invoice, Square assigns a value.
   * It increments from 1 and is padded with zeros making it 7 characters long
   * (for example, 0000001 and 0000002).
   */
  invoiceNumber?: string | null;
  /** The title of the invoice, which is displayed on the invoice. */
  title?: string | null;
  /** The description of the invoice, which is displayed on the invoice. */
  description?: string | null;
  /**
   * The timestamp when the invoice is scheduled for processing, in RFC 3339 format.
   * After the invoice is published, Square processes the invoice on the specified date,
   * according to the delivery method and payment request settings.
   * If the field is not set, Square processes the invoice immediately after it is published.
   */
  scheduledAt?: string | null;
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
   * The time zone used to interpret calendar dates on the invoice, such as `due_date`.
   * When an invoice is created, this field is set to the `timezone` specified for the seller
   * location. The value cannot be changed.
   * For example, a payment `due_date` of 2021-03-09 with a `timezone` of America/Los\_Angeles
   * becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC timestamp
   * of 2021-03-10T08:00:00Z).
   */
  timezone?: string;
  /** The timestamp when the invoice was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the invoice was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** The payment methods that customers can use to pay an [invoice]($m/Invoice) on the Square-hosted invoice payment page. */
  acceptedPaymentMethods?: InvoiceAcceptedPaymentMethods;
  /**
   * Additional seller-defined fields that are displayed on the invoice. For more information, see
   * [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
   * Adding custom fields to an invoice requires an
   * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
   * Max: 2 custom fields
   */
  customFields?: InvoiceCustomField[] | null;
  /**
   * The ID of the [subscription](entity:Subscription) associated with the invoice.
   * This field is present only on subscription billing invoices.
   */
  subscriptionId?: string;
  /**
   * The date of the sale or the date that the service is rendered, in `YYYY-MM-DD` format.
   * This field can be used to specify a past or future date which is displayed on the invoice.
   */
  saleOrServiceDate?: string | null;
  /**
   * **France only.** The payment terms and conditions that are displayed on the invoice. For more information,
   * see [Payment conditions](https://developer.squareup.com/docs/invoices-api/overview#payment-conditions).
   * For countries other than France, Square returns an `INVALID_REQUEST_ERROR` with a `BAD_REQUEST` code and
   * "Payment conditions are not supported for this location's country" detail if this field is included in `CreateInvoice` or `UpdateInvoice` requests.
   */
  paymentConditions?: string | null;
  /**
   * Indicates whether to allow a customer to save a credit or debit card as a card on file or a bank transfer as a
   * bank account on file. If `true`, Square displays a __Save my card on file__ or __Save my bank on file__ checkbox on the
   * invoice payment page. Stored payment information can be used for future automatic payments. The default value is `false`.
   */
  storePaymentMethodEnabled?: boolean | null;
  /**
   * Metadata about the attachments on the invoice. Invoice attachments are managed using the
   * [CreateInvoiceAttachment](api-endpoint:Invoices-CreateInvoiceAttachment) and [DeleteInvoiceAttachment](api-endpoint:Invoices-DeleteInvoiceAttachment) endpoints.
   */
  attachments?: InvoiceAttachment[];
}

export const invoiceSchema: Schema<Invoice> = object({
  id: ['id', optional(string())],
  version: ['version', optional(number())],
  locationId: ['location_id', optional(nullable(string()))],
  orderId: ['order_id', optional(nullable(string()))],
  primaryRecipient: [
    'primary_recipient',
    optional(lazy(() => invoiceRecipientSchema)),
  ],
  paymentRequests: [
    'payment_requests',
    optional(nullable(array(lazy(() => invoicePaymentRequestSchema)))),
  ],
  deliveryMethod: ['delivery_method', optional(string())],
  invoiceNumber: ['invoice_number', optional(nullable(string()))],
  title: ['title', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  scheduledAt: ['scheduled_at', optional(nullable(string()))],
  publicUrl: ['public_url', optional(string())],
  nextPaymentAmountMoney: [
    'next_payment_amount_money',
    optional(lazy(() => moneySchema)),
  ],
  status: ['status', optional(string())],
  timezone: ['timezone', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  acceptedPaymentMethods: [
    'accepted_payment_methods',
    optional(lazy(() => invoiceAcceptedPaymentMethodsSchema)),
  ],
  customFields: [
    'custom_fields',
    optional(nullable(array(lazy(() => invoiceCustomFieldSchema)))),
  ],
  subscriptionId: ['subscription_id', optional(string())],
  saleOrServiceDate: ['sale_or_service_date', optional(nullable(string()))],
  paymentConditions: ['payment_conditions', optional(nullable(string()))],
  storePaymentMethodEnabled: [
    'store_payment_method_enabled',
    optional(nullable(boolean())),
  ],
  attachments: [
    'attachments',
    optional(array(lazy(() => invoiceAttachmentSchema))),
  ],
});
