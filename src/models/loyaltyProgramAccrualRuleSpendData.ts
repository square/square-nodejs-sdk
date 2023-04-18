import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Money, moneySchema } from './money';

/** Represents additional data for rules with the `SPEND` accrual type. */
export interface LoyaltyProgramAccrualRuleSpendData {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  amountMoney: Money;
  /**
   * The IDs of any `CATEGORY` catalog objects that are excluded from points accrual.
   * You can use the [BatchRetrieveCatalogObjects](api-endpoint:Catalog-BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded categories.
   */
  excludedCategoryIds?: string[] | null;
  /**
   * The IDs of any `ITEM_VARIATION` catalog objects that are excluded from points accrual.
   * You can use the [BatchRetrieveCatalogObjects](api-endpoint:Catalog-BatchRetrieveCatalogObjects)
   * endpoint to retrieve information about the excluded item variations.
   */
  excludedItemVariationIds?: string[] | null;
  /**
   * Indicates how taxes should be treated when calculating the purchase amount used for loyalty points accrual.
   * This setting applies only to `SPEND` accrual rules or `VISIT` accrual rules that have a minimum spend requirement.
   */
  taxMode: string;
}

export const loyaltyProgramAccrualRuleSpendDataSchema: Schema<LoyaltyProgramAccrualRuleSpendData> = object(
  {
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    excludedCategoryIds: [
      'excluded_category_ids',
      optional(nullable(array(string()))),
    ],
    excludedItemVariationIds: [
      'excluded_item_variation_ids',
      optional(nullable(array(string()))),
    ],
    taxMode: ['tax_mode', string()],
  }
);
