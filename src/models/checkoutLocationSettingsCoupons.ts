import { boolean, nullable, object, optional, Schema } from '../schema';

export interface CheckoutLocationSettingsCoupons {
  /** Indicates whether coupons are enabled for this location. */
  enabled?: boolean | null;
}

export const checkoutLocationSettingsCouponsSchema: Schema<CheckoutLocationSettingsCoupons> = object(
  { enabled: ['enabled', optional(nullable(boolean()))] }
);
