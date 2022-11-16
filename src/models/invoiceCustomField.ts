import { nullable, object, optional, Schema, string } from '../schema';

/**
 * An additional seller-defined and customer-facing field to include on the invoice. For more information,
 * see [Custom fields](https://developer.squareup.com/docs/invoices-api/overview#custom-fields).
 * Adding custom fields to an invoice requires an
 * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
 */
export interface InvoiceCustomField {
  /** The label or title of the custom field. This field is required for a custom field. */
  label?: string | null;
  /** The text of the custom field. If omitted, only the label is rendered. */
  value?: string | null;
  /**
   * Indicates where to render a custom field on the Square-hosted invoice page and in emailed or PDF
   * copies of the invoice.
   */
  placement?: string;
}

export const invoiceCustomFieldSchema: Schema<InvoiceCustomField> = object({
  label: ['label', optional(nullable(string()))],
  value: ['value', optional(nullable(string()))],
  placement: ['placement', optional(string())],
});
