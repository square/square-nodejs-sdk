/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represents the tax IDs for an invoice recipient. The country of the seller account determines
 * whether the corresponding `tax_ids` field is available for the customer. For more information,
 * see [Invoice recipient tax IDs](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids).
 */
export interface InvoiceRecipientTaxIds {
    /** The EU VAT identification number for the invoice recipient. For example, `IE3426675K`. */
    euVat?: string;
}
