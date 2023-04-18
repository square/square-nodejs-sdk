import { object, Schema, string } from '../schema';

/** Represents additional data for rules with the `ITEM_VARIATION` accrual type. */
export interface LoyaltyProgramAccrualRuleItemVariationData {
  /**
   * The ID of the `ITEM_VARIATION` [catalog object](entity:CatalogObject) that buyers can purchase to earn
   * points.
   */
  itemVariationId: string;
}

export const loyaltyProgramAccrualRuleItemVariationDataSchema: Schema<LoyaltyProgramAccrualRuleItemVariationData> = object(
  { itemVariationId: ['item_variation_id', string()] }
);
