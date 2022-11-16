import { nullable, object, optional, Schema, string } from '../schema';

/** Represents a business that sells with Square. */
export interface Merchant {
  /** The Square-issued ID of the merchant. */
  id?: string;
  /** The name of the merchant's overall business. */
  businessName?: string | null;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country: string;
  /** The code indicating the [language preferences](https://developer.squareup.com/docs/build-basics/general-considerations/language-preferences) of the merchant, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). For example, `en-US` or `fr-CA`. */
  languageCode?: string | null;
  /**
   * Indicates the associated currency for an amount of money. Values correspond
   * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: string;
  status?: string;
  /** The ID of the [main `Location`](https://developer.squareup.com/docs/locations-api#about-the-main-location) for this merchant. */
  mainLocationId?: string | null;
  /**
   * The time when the merchant was created, in RFC 3339 format.
   *    For more information, see [Working with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
  createdAt?: string;
}

export const merchantSchema: Schema<Merchant> = object({
  id: ['id', optional(string())],
  businessName: ['business_name', optional(nullable(string()))],
  country: ['country', string()],
  languageCode: ['language_code', optional(nullable(string()))],
  currency: ['currency', optional(string())],
  status: ['status', optional(string())],
  mainLocationId: ['main_location_id', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
});
