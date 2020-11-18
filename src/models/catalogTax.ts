import { boolean, object, optional, Schema, string } from '../schema';

/** A tax applicable to an item. */
export interface CatalogTax {
  /** The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string;
  /** When to calculate the taxes due on a cart. */
  calculationPhase?: string;
  /** Whether to the tax amount should be additional to or included in the CatalogItem price. */
  inclusionType?: string;
  /**
   * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
   * A value of `7.5` corresponds to 7.5%.
   */
  percentage?: string;
  /**
   * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
   * app that are not associated with a particular `CatalogItem`.
   */
  appliesToCustomAmounts?: boolean;
  /** A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). */
  enabled?: boolean;
}

export const catalogTaxSchema: Schema<CatalogTax> = object({
  name: ['name', optional(string())],
  calculationPhase: ['calculation_phase', optional(string())],
  inclusionType: ['inclusion_type', optional(string())],
  percentage: ['percentage', optional(string())],
  appliesToCustomAmounts: ['applies_to_custom_amounts', optional(boolean())],
  enabled: ['enabled', optional(boolean())],
});
