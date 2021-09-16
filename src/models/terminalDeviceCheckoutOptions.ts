import { boolean, lazy, object, optional, Schema } from '../schema';
import { TipSettings, tipSettingsSchema } from './tipSettings';

export interface TerminalDeviceCheckoutOptions {
  /** Instructs the device to skip the receipt screen. Defaults to false. */
  skipReceiptScreen?: boolean;
  tipSettings?: TipSettings;
}

export const terminalDeviceCheckoutOptionsSchema: Schema<TerminalDeviceCheckoutOptions> = object(
  {
    skipReceiptScreen: ['skip_receipt_screen', optional(boolean())],
    tipSettings: ['tip_settings', optional(lazy(() => tipSettingsSchema))],
  }
);
