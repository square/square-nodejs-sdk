import {
  bigint,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import { CustomerTaxIds, customerTaxIdsSchema } from './customerTaxIds';

/**
 * Defines the customer data provided in individual update requests for a
 * [BulkUpdateCustomers]($e/Customers/BulkUpdateCustomers) operation.
 */
export interface BulkUpdateCustomerData {
  /** The given name (that is, the first name) associated with the customer profile. */
  givenName?: string | null;
  /** The family name (that is, the last name) associated with the customer profile. */
  familyName?: string | null;
  /** A business name associated with the customer profile. */
  companyName?: string | null;
  /** A nickname for the customer profile. */
  nickname?: string | null;
  /** The email address associated with the customer profile. */
  emailAddress?: string | null;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /**
   * The phone number associated with the customer profile. The phone number must be valid
   * and can contain 9–16 digits, with an optional `+` prefix and country code. For more information,
   * see [Customer phone numbers](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#phone-number).
   */
  phoneNumber?: string | null;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: string | null;
  /** An custom note associates with the customer profile. */
  note?: string | null;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` or `MM-DD` format.
   * For example, specify `1998-09-21` for September 21, 1998, or `09-21` for September 21.
   * Birthdays are returned in `YYYY-MM-DD` format, where `YYYY` is the specified birth year or
   * `0000` if a birth year is not specified.
   */
  birthday?: string | null;
  /**
   * Represents the tax ID associated with a [customer profile]($m/Customer). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
   * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
  /**
   * The current version of the customer profile.
   * As a best practice, you should include this field to enable
   * [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control.
   */
  version?: bigint;
}

export const bulkUpdateCustomerDataSchema: Schema<BulkUpdateCustomerData> = object(
  {
    givenName: ['given_name', optional(nullable(string()))],
    familyName: ['family_name', optional(nullable(string()))],
    companyName: ['company_name', optional(nullable(string()))],
    nickname: ['nickname', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    birthday: ['birthday', optional(nullable(string()))],
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
    version: ['version', optional(bigint())],
  }
);
