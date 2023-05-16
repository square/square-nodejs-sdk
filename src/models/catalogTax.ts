import { boolean, nullable, object, optional, Schema, string } from '../schema';

/** A tax applicable to an item. */
export interface CatalogTax {
  /** The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  name?: string | null;
  /** When to calculate the taxes due on a cart. */
  calculationPhase?: string;
  /** Whether to the tax amount should be additional to or included in the CatalogItem price. */
  inclusionType?: string;
  /**
   * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
   * A value of `7.5` corresponds to 7.5%. For a location-specific tax rate, contact the tax authority of the location or a tax consultant.
   */
  percentage?: string | null;
  /**
   * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
   * app that are not associated with a particular `CatalogItem`.
   */
  appliesToCustomAmounts?: boolean | null;
  /** A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). */
  enabled?: boolean | null;
  /** The ID of a `CatalogProductSet` object. If set, the tax is applicable to all products in the product set. */
  appliesToProductSetId?: string | null;
}

export const catalogTaxSchema: Schema<CatalogTax> = object({
  name: ['name', optional(nullable(string()))],
  calculationPhase: ['calculation_phase', optional(string())],
  inclusionType: ['inclusion_type', optional(string())],
  percentage: ['percentage', optional(nullable(string()))],
  appliesToCustomAmounts: [
    'applies_to_custom_amounts',
    optional(nullable(boolean())),
  ],
  enabled: ['enabled', optional(nullable(boolean()))],
  appliesToProductSetId: [
    'applies_to_product_set_id',
    optional(nullable(string())),
  ],
});
