import { bigint, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { CustomerTaxIds, customerTaxIdsSchema } from './customerTaxIds';

/**
 * Defines the body parameters that can be included in a request to the
 * `UpdateCustomer` endpoint.
 */
export interface UpdateCustomerRequest {
  /** The given name (that is, the first name) associated with the customer profile. */
  givenName?: string;
  /** The family name (that is, the last name) associated with the customer profile. */
  familyName?: string;
  /** A business name associated with the customer profile. */
  companyName?: string;
  /** A nickname for the customer profile. */
  nickname?: string;
  /** The email address associated with the customer profile. */
  emailAddress?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The phone number associated with the customer profile. A phone number can contain 9–16 digits, with an optional `+` prefix. */
  phoneNumber?: string;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: string;
  /** A custom note associated with the customer profile. */
  note?: string;
  /**
   * The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.
   * For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998.
   * You can also specify this value in `YYYY-MM-DD` format.
   */
  birthday?: string;
  /**
   * The current version of the customer profile.
   * As a best practice, you should include this field to enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency) control. For more information, see [Update a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#update-a-customer-profile).
   */
  version?: bigint;
  /**
   * Represents the tax ID associated with a [customer profile]($m/Customer). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
   * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
}

export const updateCustomerRequestSchema: Schema<UpdateCustomerRequest> = object(
  {
    givenName: ['given_name', optional(string())],
    familyName: ['family_name', optional(string())],
    companyName: ['company_name', optional(string())],
    nickname: ['nickname', optional(string())],
    emailAddress: ['email_address', optional(string())],
    address: ['address', optional(lazy(() => addressSchema))],
    phoneNumber: ['phone_number', optional(string())],
    referenceId: ['reference_id', optional(string())],
    note: ['note', optional(string())],
    birthday: ['birthday', optional(string())],
    version: ['version', optional(bigint())],
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
  }
);
