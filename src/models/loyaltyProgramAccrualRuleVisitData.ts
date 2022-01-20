import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** Represents additional data for rules with the `VISIT` accrual type. */
export interface LoyaltyProgramAccrualRuleVisitData {
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  minimumAmountMoney?: Money;
  /**
   * Indicates how taxes should be treated when calculating the purchase amount used for loyalty points accrual.
   * This setting applies only to `SPEND` accrual rules or `VISIT` accrual rules that have a minimum spend requirement.
   */
  taxMode: string;
}

export const loyaltyProgramAccrualRuleVisitDataSchema: Schema<LoyaltyProgramAccrualRuleVisitData> = object(
  {
    minimumAmountMoney: [
      'minimum_amount_money',
      optional(lazy(() => moneySchema)),
    ],
    taxMode: ['tax_mode', string()],
  }
);
