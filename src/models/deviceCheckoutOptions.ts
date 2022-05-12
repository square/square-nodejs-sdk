import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { TipSettings, tipSettingsSchema } from './tipSettings';

export interface DeviceCheckoutOptions {
  /**
   * The unique ID of the device intended for this `TerminalCheckout`.
   * A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint.
   * Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
   */
  deviceId: string;
  /** Instructs the device to skip the receipt screen. Defaults to false. */
  skipReceiptScreen?: boolean;
  /** Indicates that signature collection is desired during checkout. Defaults to false. */
  collectSignature?: boolean;
  tipSettings?: TipSettings;
  /**
   * Show the itemization screen prior to taking a payment. This field is only meaningful when the
   * checkout includes an order ID. Defaults to true.
   */
  showItemizedCart?: boolean;
}

export const deviceCheckoutOptionsSchema: Schema<DeviceCheckoutOptions> = object(
  {
    deviceId: ['device_id', string()],
    skipReceiptScreen: ['skip_receipt_screen', optional(boolean())],
    collectSignature: ['collect_signature', optional(boolean())],
    tipSettings: ['tip_settings', optional(lazy(() => tipSettingsSchema))],
    showItemizedCart: ['show_itemized_cart', optional(boolean())],
  }
);
