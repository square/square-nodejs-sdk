import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Defines an accrual rule, which is how buyers can earn points. */
export interface LoyaltyProgramAccrualRule {
  /** The type of the accrual rule that defines how buyers can earn points. */
  accrualType: string;
  /**
   * The number of points that
   * buyers earn based on the `accrual_type`.
   */
  points?: number;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  visitMinimumAmountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  spendAmountMoney?: Money;
  /**
   * When the accrual rule is item-based or category-based, this field specifies the ID
   * of the [catalog object]($m/CatalogObject) that buyers can purchase to earn points.
   * If `accrual_type` is `ITEM_VARIATION`, the object is an item variation.
   * If `accrual_type` is `CATEGORY`, the object is a category.
   */
  catalogObjectId?: string;
  /**
   * When the accrual rule is spend-based (`accrual_type` is `SPEND`), this field
   * lists the IDs of any `CATEGORY` catalog objects that are excluded from points accrual.
   * You can use the [BatchRetrieveCatalogObjects]($e/Catalog/BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded categories.
   */
  excludedCategoryIds?: string[];
  /**
   * When the accrual rule is spend-based (`accrual_type` is `SPEND`), this field
   * lists the IDs of any `ITEM_VARIATION` catalog objects that are excluded from points accrual.
   * You can use the [BatchRetrieveCatalogObjects]($e/Catalog/BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded item variations.
   */
  excludedItemVariationIds?: string[];
}

export const loyaltyProgramAccrualRuleSchema: Schema<LoyaltyProgramAccrualRule> = object(
  {
    accrualType: ['accrual_type', string()],
    points: ['points', optional(number())],
    visitMinimumAmountMoney: [
      'visit_minimum_amount_money',
      optional(lazy(() => moneySchema)),
    ],
    spendAmountMoney: ['spend_amount_money', optional(lazy(() => moneySchema))],
    catalogObjectId: ['catalog_object_id', optional(string())],
    excludedCategoryIds: ['excluded_category_ids', optional(array(string()))],
    excludedItemVariationIds: [
      'excluded_item_variation_ids',
      optional(array(string())),
    ],
  }
);
