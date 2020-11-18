import { array, lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import {
  V1MerchantLocationDetails,
  v1MerchantLocationDetailsSchema,
} from './v1MerchantLocationDetails';
import { V1PhoneNumber, v1PhoneNumberSchema } from './v1PhoneNumber';

/**
 * Defines the fields that are included in the response body of
 * a request to the **RetrieveBusiness** endpoint.
 */
export interface V1Merchant {
  /** The merchant account's unique identifier. */
  id?: string;
  /** The name associated with the merchant account. */
  name?: string;
  /** The email address associated with the merchant account. */
  email?: string;
  accountType?: string;
  /** Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array are not enabled for the account. */
  accountCapabilities?: string[];
  /** The country associated with the merchant account, in ISO 3166-1-alpha-2 format. */
  countryCode?: string;
  /** The language associated with the merchant account, in BCP 47 format. */
  languageCode?: string;
  /** The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
  currencyCode?: string;
  /** The name of the merchant's business. */
  businessName?: string;
  /** Represents a physical address. */
  businessAddress?: Address;
  /** Represents a phone number. */
  businessPhone?: V1PhoneNumber;
  businessType?: string;
  /** Represents a physical address. */
  shippingAddress?: Address;
  /** Additional information for a single-location account specified by its associated business account, if it has one. */
  locationDetails?: V1MerchantLocationDetails;
  /** The URL of the merchant's online store. */
  marketUrl?: string;
}

export const v1MerchantSchema: Schema<V1Merchant> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  email: ['email', optional(string())],
  accountType: ['account_type', optional(string())],
  accountCapabilities: ['account_capabilities', optional(array(string()))],
  countryCode: ['country_code', optional(string())],
  languageCode: ['language_code', optional(string())],
  currencyCode: ['currency_code', optional(string())],
  businessName: ['business_name', optional(string())],
  businessAddress: ['business_address', optional(lazy(() => addressSchema))],
  businessPhone: ['business_phone', optional(lazy(() => v1PhoneNumberSchema))],
  businessType: ['business_type', optional(string())],
  shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
  locationDetails: [
    'location_details',
    optional(lazy(() => v1MerchantLocationDetailsSchema)),
  ],
  marketUrl: ['market_url', optional(string())],
});
