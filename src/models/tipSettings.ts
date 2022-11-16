import {
  array,
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
} from '../schema';

export interface TipSettings {
  /** Indicates whether tipping is enabled for this checkout. Defaults to false. */
  allowTipping?: boolean | null;
  /**
   * Indicates whether tip options should be presented on the screen before presenting
   * the signature screen during card payment. Defaults to false.
   */
  separateTipScreen?: boolean | null;
  /** Indicates whether custom tip amounts are allowed during the checkout flow. Defaults to false. */
  customTipField?: boolean | null;
  /**
   * A list of tip percentages that should be presented during the checkout flow, specified as
   * up to 3 non-negative integers from 0 to 100 (inclusive). Defaults to 15, 20, and 25.
   */
  tipPercentages?: number[] | null;
  /**
   * Enables the "Smart Tip Amounts" behavior.
   * Exact tipping options depend on the region in which the Square seller is active.
   * For payments under 10.00, in the Australia, Canada, Ireland, United Kingdom, and United States, tipping options are presented as no tip, .50, 1.00 or 2.00.
   * For payment amounts of 10.00 or greater, tipping options are presented as the following percentages: 0%, 5%, 10%, 15%.
   * If set to true, the `tip_percentages` settings is ignored.
   * Defaults to false.
   * To learn more about smart tipping, see [Accept Tips with the Square App](https://squareup.com/help/us/en/article/5069-accept-tips-with-the-square-app).
   */
  smartTipping?: boolean | null;
}

export const tipSettingsSchema: Schema<TipSettings> = object({
  allowTipping: ['allow_tipping', optional(nullable(boolean()))],
  separateTipScreen: ['separate_tip_screen', optional(nullable(boolean()))],
  customTipField: ['custom_tip_field', optional(nullable(boolean()))],
  tipPercentages: ['tip_percentages', optional(nullable(array(number())))],
  smartTipping: ['smart_tipping', optional(nullable(boolean()))],
});
