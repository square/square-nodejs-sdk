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
  /** The 11-digit phone number associated with the customer profile. */
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
   * As a best practice, you should include this field to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. For more information, see [Update a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#update-a-customer-profile).
   */
  version?: bigint;
  /**
   * Represents the tax ID associated with a customer profile. The corresponding `tax_ids` field is available only for customers of sellers in France, Ireland, or the United Kingdom.
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
