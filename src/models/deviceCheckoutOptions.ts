import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { TipSettings, tipSettingsSchema } from './tipSettings';

export interface DeviceCheckoutOptions {
  /**
   * The unique Id of the device intended for this `TerminalCheckout`.
   * The Id can be retrieved from /v2/devices api.
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
