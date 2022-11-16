import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import {
  InvoiceRecipientTaxIds,
  invoiceRecipientTaxIdsSchema,
} from './invoiceRecipientTaxIds';

/**
 * Represents a snapshot of customer data. This object stores customer data that is displayed on the invoice
 * and that Square uses to deliver the invoice.
 * When you provide a customer ID for a draft invoice, Square retrieves the associated customer profile and populates
 * the remaining `InvoiceRecipient` fields. You cannot update these fields after the invoice is published.
 * Square updates the customer ID in response to a merge operation, but does not update other fields.
 */
export interface InvoiceRecipient {
  /**
   * The ID of the customer. This is the customer profile ID that
   * you provide when creating a draft invoice.
   */
  customerId?: string | null;
  /** The recipient's given (that is, first) name. */
  givenName?: string;
  /** The recipient's family (that is, last) name. */
  familyName?: string;
  /** The recipient's email address. */
  emailAddress?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The recipient's phone number. */
  phoneNumber?: string;
  /** The name of the recipient's company. */
  companyName?: string;
  /**
   * Represents the tax IDs for an invoice recipient. The country of the seller account determines
   * whether the corresponding `tax_ids` field is available for the customer. For more information,
   * see [Invoice recipient tax IDs](https://developer.squareup.com/docs/invoices-api/overview#recipient-tax-ids).
   */
  taxIds?: InvoiceRecipientTaxIds;
}

export const invoiceRecipientSchema: Schema<InvoiceRecipient> = object({
  customerId: ['customer_id', optional(nullable(string()))],
  givenName: ['given_name', optional(string())],
  familyName: ['family_name', optional(string())],
  emailAddress: ['email_address', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
  phoneNumber: ['phone_number', optional(string())],
  companyName: ['company_name', optional(string())],
  taxIds: ['tax_ids', optional(lazy(() => invoiceRecipientTaxIdsSchema))],
});
