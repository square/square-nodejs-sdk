import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { TipSettings, tipSettingsSchema } from './tipSettings';

export interface DeviceCheckoutOptions {
  /**
   * The unique ID of the device intended for this `TerminalCheckout`.
   * A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint.
   * Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
   */
  deviceId: string;
  /** Instruct the device to skip the receipt screen. Defaults to false. */
  skipReceiptScreen?: boolean;
  tipSettings?: TipSettings;
}

export const deviceCheckoutOptionsSchema: Schema<DeviceCheckoutOptions> = object(
  {
    deviceId: ['device_id', string()],
    skipReceiptScreen: ['skip_receipt_screen', optional(boolean())],
    tipSettings: ['tip_settings', optional(lazy(() => tipSettingsSchema))],
  }
);
