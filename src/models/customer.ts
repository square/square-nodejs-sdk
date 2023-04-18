import {
  array,
  bigint,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import { Card, cardSchema } from './card';
import {
  CustomerPreferences,
  customerPreferencesSchema,
} from './customerPreferences';
import { CustomerTaxIds, customerTaxIdsSchema } from './customerTaxIds';

/** Represents a Square customer profile in the Customer Directory of a Square seller. */
export interface Customer {
  /**
   * A unique Square-assigned ID for the customer profile.
   * If you need this ID for an API request, use the ID returned when you created the customer profile or call the [SearchCustomers](api-endpoint:Customers-SearchCustomers)
   * or [ListCustomers](api-endpoint:Customers-ListCustomers) endpoint.
   */
  id?: string;
  /** The timestamp when the customer profile was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the customer profile was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Payment details of the credit, debit, and gift cards stored on file for the customer profile.
   * DEPRECATED at version 2021-06-16. Replaced by calling [ListCards](api-endpoint:Cards-ListCards) (for credit and debit cards on file)
   * or [ListGiftCards](api-endpoint:GiftCards-ListGiftCards) (for gift cards on file) and including the `customer_id` query parameter.
   * For more information, see [Migration notes](https://developer.squareup.com/docs/customers-api/what-it-does#migrate-customer-cards).
   */
  cards?: Card[] | null;
  /** The given name (that is, the first name) associated with the customer profile. */
  givenName?: string | null;
  /** The family name (that is, the last name) associated with the customer profile. */
  familyName?: string | null;
  /** A nickname for the customer profile. */
  nickname?: string | null;
  /** A business name associated with the customer profile. */
  companyName?: string | null;
  /** The email address associated with the customer profile. */
  emailAddress?: string | null;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The phone number associated with the customer profile. */
  phoneNumber?: string | null;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` format. For example, `1998-09-21`
   * represents September 21, 1998, and `0000-09-21` represents September 21 (without a birth year).
   */
  birthday?: string | null;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: string | null;
  /** A custom note associated with the customer profile. */
  note?: string | null;
  /** Represents communication preferences for the customer profile. */
  preferences?: CustomerPreferences;
  /** Indicates the method used to create the customer profile. */
  creationSource?: string;
  /** The IDs of [customer groups](entity:CustomerGroup) the customer belongs to. */
  groupIds?: string[] | null;
  /** The IDs of [customer segments](entity:CustomerSegment) the customer belongs to. */
  segmentIds?: string[] | null;
  /** The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. */
  version?: bigint;
  /**
   * Represents the tax ID associated with a [customer profile]($m/Customer). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
   * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
}

export const customerSchema: Schema<Customer> = object({
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  cards: ['cards', optional(nullable(array(lazy(() => cardSchema))))],
  givenName: ['given_name', optional(nullable(string()))],
  familyName: ['family_name', optional(nullable(string()))],
  nickname: ['nickname', optional(nullable(string()))],
  companyName: ['company_name', optional(nullable(string()))],
  emailAddress: ['email_address', optional(nullable(string()))],
  address: ['address', optional(lazy(() => addressSchema))],
  phoneNumber: ['phone_number', optional(nullable(string()))],
  birthday: ['birthday', optional(nullable(string()))],
  referenceId: ['reference_id', optional(nullable(string()))],
  note: ['note', optional(nullable(string()))],
  preferences: ['preferences', optional(lazy(() => customerPreferencesSchema))],
  creationSource: ['creation_source', optional(string())],
  groupIds: ['group_ids', optional(nullable(array(string())))],
  segmentIds: ['segment_ids', optional(nullable(array(string())))],
  version: ['version', optional(bigint())],
  taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
});
