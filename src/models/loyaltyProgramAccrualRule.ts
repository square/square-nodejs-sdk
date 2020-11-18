import { lazy, number, object, optional, Schema, string } from '../schema';
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
   * The ID of the [catalog object](#type-CatalogObject) to purchase to earn the number of points defined by the
   * rule. This is either an item variation or a category, depending on the type. This is defined on
   * `ITEM_VARIATION` rules and `CATEGORY` rules.
   */
  catalogObjectId?: string;
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
  }
);
