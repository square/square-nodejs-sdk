import { object, optional, Schema, string } from '../schema';

/** Represents a Square seller. */
export interface Merchant {
  /** The Square-issued ID of the merchant. */
  id?: string;
  /** The business name of the merchant. */
  businessName?: string;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country: string;
  /** The language code associated with the merchant account, in BCP 47 format. */
  languageCode?: string;
  /**
   * Indicates the associated currency for an amount of money. Values correspond
   * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: string;
  status?: string;
  /** The ID of the main `Location` for this merchant. */
  mainLocationId?: string;
}

export const merchantSchema: Schema<Merchant> = object({
  id: ['id', optional(string())],
  businessName: ['business_name', optional(string())],
  country: ['country', string()],
  languageCode: ['language_code', optional(string())],
  currency: ['currency', optional(string())],
  status: ['status', optional(string())],
  mainLocationId: ['main_location_id', optional(string())],
});
