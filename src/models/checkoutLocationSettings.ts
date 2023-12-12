import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CheckoutLocationSettingsBranding,
  checkoutLocationSettingsBrandingSchema,
} from './checkoutLocationSettingsBranding';
import {
  CheckoutLocationSettingsCoupons,
  checkoutLocationSettingsCouponsSchema,
} from './checkoutLocationSettingsCoupons';
import {
  CheckoutLocationSettingsPolicy,
  checkoutLocationSettingsPolicySchema,
} from './checkoutLocationSettingsPolicy';
import {
  CheckoutLocationSettingsTipping,
  checkoutLocationSettingsTippingSchema,
} from './checkoutLocationSettingsTipping';

export interface CheckoutLocationSettings {
  /** The ID of the location that these settings apply to. */
  locationId?: string | null;
  /** Indicates whether customers are allowed to leave notes at checkout. */
  customerNotesEnabled?: boolean | null;
  /**
   * Policy information is displayed at the bottom of the checkout pages.
   * You can set a maximum of two policies.
   */
  policies?: CheckoutLocationSettingsPolicy[] | null;
  branding?: CheckoutLocationSettingsBranding;
  tipping?: CheckoutLocationSettingsTipping;
  coupons?: CheckoutLocationSettingsCoupons;
  /**
   * The timestamp when the settings were last updated, in RFC 3339 format.
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   * UTC: 2020-01-26T02:25:34Z
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAt?: string;
}

export const checkoutLocationSettingsSchema: Schema<CheckoutLocationSettings> = object(
  {
    locationId: ['location_id', optional(nullable(string()))],
    customerNotesEnabled: [
      'customer_notes_enabled',
      optional(nullable(boolean())),
    ],
    policies: [
      'policies',
      optional(
        nullable(array(lazy(() => checkoutLocationSettingsPolicySchema)))
      ),
    ],
    branding: [
      'branding',
      optional(lazy(() => checkoutLocationSettingsBrandingSchema)),
    ],
    tipping: [
      'tipping',
      optional(lazy(() => checkoutLocationSettingsTippingSchema)),
    ],
    coupons: [
      'coupons',
      optional(lazy(() => checkoutLocationSettingsCouponsSchema)),
    ],
    updatedAt: ['updated_at', optional(string())],
  }
);
