import { boolean, object, optional, Schema } from '../schema';

export interface TipSettings {
  /** Indicates whether tipping is enabled for this checkout. Defaults to false. */
  allowTipping?: boolean;
  /**
   * Indicates whether tip options should be presented on their own screen before presenting
   * the signature screen during card payment. Defaults to false.
   */
  separateTipScreen?: boolean;
  /** Indicates whether custom tip amounts are allowed during the checkout flow. Defaults to false. */
  customTipField?: boolean;
}

export const tipSettingsSchema: Schema<TipSettings> = object({
  allowTipping: ['allow_tipping', optional(boolean())],
  separateTipScreen: ['separate_tip_screen', optional(boolean())],
  customTipField: ['custom_tip_field', optional(boolean())],
});
