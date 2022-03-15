import { array, lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/**
 * Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
 * are now defined using a catalog pricing rule and other catalog objects. For more information, see
 * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
 */
export interface LoyaltyProgramRewardDefinition {
  /**
   * Indicates the scope of the reward tier. DEPRECATED at version 2020-12-16. Discount details
   * are now defined using a catalog pricing rule and other catalog objects. For more information, see
   * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
   */
  scope: string;
  /**
   * The type of discount the reward tier offers. DEPRECATED at version 2020-12-16. Discount details
   * are now defined using a catalog pricing rule and other catalog objects. For more information, see
   * [Getting discount details for a reward tier](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards#get-discount-details).
   */
  discountType: string;
  /**
   * The fixed percentage of the discount. Present if `discount_type` is `FIXED_PERCENTAGE`.
   * For example, a 7.25% off discount will be represented as "7.25". DEPRECATED at version 2020-12-16. You can find this
   * information in the `discount_data.percentage` field of the `DISCOUNT` catalog object referenced by the pricing rule.
   */
  percentageDiscount?: string;
  /**
   * The list of catalog objects to which this reward can be applied. They are either all item-variation ids or category ids, depending on the `type` field.
   * DEPRECATED at version 2020-12-16. You can find this information in the `product_set_data.product_ids_any` field
   * of the `PRODUCT_SET` catalog object referenced by the pricing rule.
   */
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
