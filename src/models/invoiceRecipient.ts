import { lazy, object, optional, Schema, string } from '../schema';
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
  customerId?: string;
  /** The recipient's given (that is, first) name. */
  givenName?: string;
  /** The recipient's family (that is, last) name. */
  familyName?: string;
  /** The recipient's email address. */
  emailAddress?: string;
  /**
   * Represents a postal address in a country. The address format is based
   * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
   * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
   * This format has dedicated fields for four address components: postal code,
   * locality (city), administrative district (state, prefecture, or province), and
   * sublocality (town or village). These components have dedicated fields in the
   * `Address` object because software sometimes behaves differently based on them.
   * For example, sales tax software may charge different amounts of sales tax
   * based on the postal code, and some software is only available in
   * certain states due to compliance reasons.
   * For the remaining address components, the `Address` type provides the
   * `address_line_1` and `address_line_2` fields for free-form data entry.
   * These fields are free-form because the remaining address components have
   * too many variations around the world and typical software does not parse
   * these components. These fields enable users to enter anything they want.
   * Note that, in the current implementation, all other `Address` type fields are blank.
   * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
   * `administrative_district_level_2`, `administrative_district_level_3`,
   * `first_name`, `last_name`, and `organization`.
   * When it comes to localization, the seller's language preferences
   * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
   * are ignored for addresses. Even though Square products (such as Square Point of Sale
   * and the Seller Dashboard) mostly use a seller's language preference in
   * communication, when it comes to addresses, they will use English for a US address,
   * Japanese for an address in Japan, and so on.
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
  customerId: ['customer_id', optional(string())],
  givenName: ['given_name', optional(string())],
  familyName: ['family_name', optional(string())],
  emailAddress: ['email_address', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
  phoneNumber: ['phone_number', optional(string())],
  companyName: ['company_name', optional(string())],
  taxIds: ['tax_ids', optional(lazy(() => invoiceRecipientTaxIdsSchema))],
});
