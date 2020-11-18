import { array, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Provides details about the loyalty program reward tier definition. */
export interface LoyaltyProgramRewardDefinition {
  /** Indicates the scope of the reward tier. */
  scope: string;
  /** The type of discount the reward tier offers. */
  discountType: string;
  /**
   * Present if `discount_type` is `FIXED_PERCENTAGE`.
   * For example, a 7.25% off discount will be represented as "7.25".
   */
  percentageDiscount?: string;
  /** A list of [catalog object](#type-CatalogObject) ids to which this reward can be applied. They are either all item-variation ids or category ids, depending on the `type` field. */
  catalogObjectIds?: string[];
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  fixedDiscountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  maxDiscountMoney?: Money;
}

export const loyaltyProgramRewardDefinitionSchema: Schema<LoyaltyProgramRewardDefinition> = object(
  {
    scope: ['scope', string()],
    discountType: ['discount_type', string()],
    percentageDiscount: ['percentage_discount', optional(string())],
    catalogObjectIds: ['catalog_object_ids', optional(array(string()))],
    fixedDiscountMoney: [
      'fixed_discount_money',
      optional(lazy(() => moneySchema)),
    ],
    maxDiscountMoney: ['max_discount_money', optional(lazy(() => moneySchema))],
  }
);
