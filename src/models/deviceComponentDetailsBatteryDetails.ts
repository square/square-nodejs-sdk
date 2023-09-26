import { nullable, number, object, optional, Schema, string } from '../schema';

export interface DeviceComponentDetailsBatteryDetails {
  /** The battery charge percentage as displayed on the device. */
  visiblePercent?: number | null;
  /** An enum for ExternalPower. */
  externalPower?: string;
}

export const deviceComponentDetailsBatteryDetailsSchema: Schema<DeviceComponentDetailsBatteryDetails> = object(
  {
    visiblePercent: ['visible_percent', optional(nullable(number()))],
    externalPower: ['external_power', optional(string())],
  }
);
