import { nullable, object, optional, Schema, string } from '../schema';

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
  addressLine1?: string | null;
  /** The second line of the address, if any. */
  addressLine2?: string | null;
  /** The third line of the address, if any. */
  addressLine3?: string | null;
  /** The city or town of the address. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  locality?: string | null;
  /** A civil region within the address's `locality`, if any. */
  sublocality?: string | null;
  /** A civil region within the address's `sublocality`, if any. */
  sublocality2?: string | null;
  /** A civil region within the address's `sublocality_2`, if any. */
  sublocality3?: string | null;
  /**
   * A civil entity within the address's country. In the US, this
   * is the state. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  administrativeDistrictLevel1?: string | null;
  /**
   * A civil entity within the address's `administrative_district_level_1`.
   * In the US, this is the county.
   */
  administrativeDistrictLevel2?: string | null;
  /**
   * A civil entity within the address's `administrative_district_level_2`,
   * if any.
   */
  administrativeDistrictLevel3?: string | null;
  /** The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  postalCode?: string | null;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: string;
  /** Optional first name when it's representing recipient. */
  firstName?: string | null;
  /** Optional last name when it's representing recipient. */
  lastName?: string | null;
}

export const addressSchema: Schema<Address> = object({
  addressLine1: ['address_line_1', optional(nullable(string()))],
  addressLine2: ['address_line_2', optional(nullable(string()))],
  addressLine3: ['address_line_3', optional(nullable(string()))],
  locality: ['locality', optional(nullable(string()))],
  sublocality: ['sublocality', optional(nullable(string()))],
  sublocality2: ['sublocality_2', optional(nullable(string()))],
  sublocality3: ['sublocality_3', optional(nullable(string()))],
  administrativeDistrictLevel1: [
    'administrative_district_level_1',
    optional(nullable(string())),
  ],
  administrativeDistrictLevel2: [
    'administrative_district_level_2',
    optional(nullable(string())),
  ],
  administrativeDistrictLevel3: [
    'administrative_district_level_3',
    optional(nullable(string())),
  ],
  postalCode: ['postal_code', optional(nullable(string()))],
  country: ['country', optional(string())],
  firstName: ['first_name', optional(nullable(string()))],
  lastName: ['last_name', optional(nullable(string()))],
});
