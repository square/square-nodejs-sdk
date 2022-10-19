import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { CustomerTaxIds, customerTaxIdsSchema } from './customerTaxIds';

/**
 * Defines the body parameters that can be included in a request to the
 * `CreateCustomer` endpoint.
 */
export interface CreateCustomerRequest {
  /**
   * The idempotency key for the request.	For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /**
   * The given name (that is, the first name) associated with the customer profile.
   * The maximum length for this value is 300 characters.
   */
  givenName?: string;
  /**
   * The family name (that is, the last name) associated with the customer profile.
   * The maximum length for this value is 300 characters.
   */
  familyName?: string;
  /**
   * A business name associated with the customer profile.
   * The maximum length for this value is 500 characters.
   */
  companyName?: string;
  /**
   * A nickname for the customer profile.
   * The maximum length for this value is 100 characters.
   */
  nickname?: string;
  /**
   * The email address associated with the customer profile.
   * The maximum length for this value is 254 characters.
   */
  emailAddress?: string;
  /**
   * Represents a postal address in a country.
   * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /**
   * The phone number associated with the customer profile. The phone number must be valid and can contain
   * 9–16 digits, with an optional `+` prefix and country code. For more information, see
   * [Customer phone numbers](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#phone-number).
   */
  phoneNumber?: string;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   * The maximum length for this value is 100 characters.
   */
  referenceId?: string;
  /** A custom note associated with the customer profile. */
  note?: string;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` or `MM-DD` format. For example,
   * specify `1998-09-21` for September 21, 1998, or `09-21` for September 21. Birthdays are returned in `YYYY-MM-DD`
   * format, where `YYYY` is the specified birth year or `0000` if a birth year is not specified.
   */
  birthday?: string;
  /**
   * Represents the tax ID associated with a [customer profile]($m/Customer). The corresponding `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
   * For more information, see [Customer tax IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
}

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = object(
  {
    idempotencyKey: ['idempotency_key', optional(string())],
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
    taxIds: ['tax_ids', optional(lazy(() => customerTaxIdsSchema))],
  }
);
