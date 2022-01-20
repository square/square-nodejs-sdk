import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  LoyaltyProgramAccrualRuleCategoryData,
  loyaltyProgramAccrualRuleCategoryDataSchema,
} from './loyaltyProgramAccrualRuleCategoryData';
import {
  LoyaltyProgramAccrualRuleItemVariationData,
  loyaltyProgramAccrualRuleItemVariationDataSchema,
} from './loyaltyProgramAccrualRuleItemVariationData';
import {
  LoyaltyProgramAccrualRuleSpendData,
  loyaltyProgramAccrualRuleSpendDataSchema,
} from './loyaltyProgramAccrualRuleSpendData';
import {
  LoyaltyProgramAccrualRuleVisitData,
  loyaltyProgramAccrualRuleVisitDataSchema,
} from './loyaltyProgramAccrualRuleVisitData';

/** Defines an accrual rule, which is how buyers can earn points. */
export interface LoyaltyProgramAccrualRule {
  /** The type of the accrual rule that defines how buyers can earn points. */
  accrualType: string;
  /**
   * The number of points that
   * buyers earn based on the `accrual_type`.
   */
  points?: number;
  /** Represents additional data for rules with the `VISIT` accrual type. */
  visitData?: LoyaltyProgramAccrualRuleVisitData;
  /** Represents additional data for rules with the `SPEND` accrual type. */
  spendData?: LoyaltyProgramAccrualRuleSpendData;
  /** Represents additional data for rules with the `ITEM_VARIATION` accrual type. */
  itemVariationData?: LoyaltyProgramAccrualRuleItemVariationData;
  /** Represents additional data for rules with the `CATEGORY` accrual type. */
  categoryData?: LoyaltyProgramAccrualRuleCategoryData;
}

export const loyaltyProgramAccrualRuleSchema: Schema<LoyaltyProgramAccrualRule> = object(
  {
    accrualType: ['accrual_type', string()],
    points: ['points', optional(number())],
    visitData: [
      'visit_data',
      optional(lazy(() => loyaltyProgramAccrualRuleVisitDataSchema)),
    ],
    spendData: [
      'spend_data',
      optional(lazy(() => loyaltyProgramAccrualRuleSpendDataSchema)),
    ],
    itemVariationData: [
      'item_variation_data',
      optional(lazy(() => loyaltyProgramAccrualRuleItemVariationDataSchema)),
    ],
    categoryData: [
      'category_data',
      optional(lazy(() => loyaltyProgramAccrualRuleCategoryDataSchema)),
    ],
  }
);
