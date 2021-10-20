import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { BusinessHours, businessHoursSchema } from './businessHours';
import { Coordinates, coordinatesSchema } from './coordinates';
import { TaxIds, taxIdsSchema } from './taxIds';

/** Represents one of a business's locations. */
export interface Location {
  /** The Square-issued ID of the location. */
  id?: string;
  /**
   * The name of the location.
   * This information appears in the dashboard as the nickname.
   * A location name must be unique within a seller account.
   */
  name?: string;
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
  /**
   * The [IANA Timezone](https://www.iana.org/time-zones) identifier for
   * the timezone of the location.
   */
  timezone?: string;
  /**
   * The Square features that are enabled for the location.
   * See [LocationCapability]($m/LocationCapability) for possible values.
   * See [LocationCapability](#type-locationcapability) for possible values
   */
  capabilities?: string[];
  /** The status of the location, whether a location is active or inactive. */
  status?: string;
  /**
   * The time when the location was created, in RFC 3339 format.
   * For more information, see [Working with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
  createdAt?: string;
  /** The ID of the merchant that owns the location. */
  merchantId?: string;
  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: string;
  /**
   * The language associated with the location, in
   * [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
   * For more information, see [Location language code](https://developer.squareup.com/docs/locations-api#location-language-code).
   */
  languageCode?: string;
  /**
   * Indicates the associated currency for an amount of money. Values correspond
   * to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: string;
  /** The phone number of the location in human readable format. For example, `+353 80 0 098 8099`. */
  phoneNumber?: string;
  /**
   * The business name of the location
   * This is the name visible to the customers of the location.
   * For example, this name appears on customer receipts.
   */
  businessName?: string;
  /** A location's physical or mobile type. */
  type?: string;
  /** The website URL of the location.  For example, `https://squareup.com`. */
  websiteUrl?: string;
  /** Represents the hours of operation for a business location. */
  businessHours?: BusinessHours;
  /**
   * The email of the location.
   * This email is visible to the customers of the location.
   * For example, the email appears on customer receipts.
   * For example, `help@squareup.com`.
   */
  businessEmail?: string;
  /** The description of the location. */
  description?: string;
  /** The Twitter username of the location without the '@' symbol. For example, `Square`. */
  twitterUsername?: string;
  /** The Instagram username of the location without the '@' symbol. For example, `square`. */
  instagramUsername?: string;
  /** The Facebook profile URL of the location. The URL should begin with 'facebook.com/'. For example, `https://www.facebook.com/square`. */
  facebookUrl?: string;
  /** Latitude and longitude coordinates. */
  coordinates?: Coordinates;
  /**
   * The URL of the logo image for the location. The Seller must choose this logo in the Seller
   * dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices)
   * that Square generates on behalf of the Seller. This image should have an aspect ratio
   * close to 1:1 and is recommended to be at least 200x200 pixels.
   */
  logoUrl?: string;
  /** The URL of the Point of Sale background image for the location. */
  posBackgroundUrl?: string;
  /**
   * The merchant category code (MCC) of the location, as standardized by ISO 18245.
   * The MCC describes the kind of goods or services sold at the location.
   */
  mcc?: string;
  /**
   * The URL of a full-format logo image for the location. The Seller must choose this logo in the
   * Seller dashboard (Receipts section) for the logo to appear on transactions (such as receipts, invoices)
   * that Square generates on behalf of the Seller. This image can have an aspect ratio of 2:1 or greater
   * and is recommended to be at least 1280x648 pixels.
   */
  fullFormatLogoUrl?: string;
  /** The tax IDs that a Location is operating under. */
  taxIds?: TaxIds;
}

export const locationSchema: Schema<Location> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
  timezone: ['timezone', optional(string())],
  capabilities: ['capabilities', optional(array(string()))],
  status: ['status', optional(string())],
  createdAt: ['created_at', optional(string())],
  merchantId: ['merchant_id', optional(string())],
  country: ['country', optional(string())],
  languageCode: ['language_code', optional(string())],
  currency: ['currency', optional(string())],
  phoneNumber: ['phone_number', optional(string())],
  businessName: ['business_name', optional(string())],
  type: ['type', optional(string())],
  websiteUrl: ['website_url', optional(string())],
  businessHours: ['business_hours', optional(lazy(() => businessHoursSchema))],
  businessEmail: ['business_email', optional(string())],
  description: ['description', optional(string())],
  twitterUsername: ['twitter_username', optional(string())],
  instagramUsername: ['instagram_username', optional(string())],
  facebookUrl: ['facebook_url', optional(string())],
  coordinates: ['coordinates', optional(lazy(() => coordinatesSchema))],
  logoUrl: ['logo_url', optional(string())],
  posBackgroundUrl: ['pos_background_url', optional(string())],
  mcc: ['mcc', optional(string())],
  fullFormatLogoUrl: ['full_format_logo_url', optional(string())],
  taxIds: ['tax_ids', optional(lazy(() => taxIdsSchema))],
});
