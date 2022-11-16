import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
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

/** Represents an accrual rule, which defines how buyers can earn points from the base [loyalty program]($m/LoyaltyProgram). */
export interface LoyaltyProgramAccrualRule {
  /** The type of the accrual rule that defines how buyers can earn points. */
  accrualType: string;
  /**
   * The number of points that
   * buyers earn based on the `accrual_type`.
   */
  points?: number | null;
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
    points: ['points', optional(nullable(number()))],
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
