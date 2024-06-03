import { nullable, number, object, optional, Schema } from '../schema';

/** A whole number or unreduced fractional ratio. */
export interface QuantityRatio {
  /** The whole or fractional quantity as the numerator. */
  quantity?: number | null;
  /**
   * The whole or fractional quantity as the denominator.
   * With fractional quantity this field is the denominator and quantity is the numerator.
   * The default value is `1`. For example, when `quantity=3` and `quantity_denominator` is unspecified,
   * the quantity ratio is `3` or `3/1`.
   */
  quantityDenominator?: number | null;
}

export const quantityRatioSchema: Schema<QuantityRatio> = object({
  quantity: ['quantity', optional(nullable(number()))],
  quantityDenominator: ['quantity_denominator', optional(nullable(number()))],
});
