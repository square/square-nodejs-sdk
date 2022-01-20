import { object, optional, Schema, string } from '../schema';

/**
 * Represents a postal address in a country.
 * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
 */
export interface Address {
  /**
   * The first line of the address.
   * Fields that start with `address_line` provide the address's most specific
   * details, like street number, street name, and building name. They do *not*
   * provide less specific details like city, state/province, or country (these
   * details are provided in other fields).
   */
  addressLine1?: string;
  /** The second line of the address, if any. */
  addressLine2?: string;
  /** The third line of the address, if any. */
  addressLine3?: string;
  /** The city or town of the address. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  locality?: string;
  /** A civil region within the address's `locality`, if any. */
  sublocality?: string;
  /**
   * A civil entity within the address's country. In the US, this
   * is the state. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  administrativeDistrictLevel1?: string;
  /** The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  postalCode?: string;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: string;
}

export const addressSchema: Schema<Address> = object({
  addressLine1: ['address_line_1', optional(string())],
  addressLine2: ['address_line_2', optional(string())],
  addressLine3: ['address_line_3', optional(string())],
  locality: ['locality', optional(string())],
  sublocality: ['sublocality', optional(string())],
  administrativeDistrictLevel1: [
    'administrative_district_level_1',
    optional(string()),
  ],
  postalCode: ['postal_code', optional(string())],
  country: ['country', optional(string())],
});
