import { object, Schema, string } from '../schema';

/** Represents additional data for rules with the `CATEGORY` accrual type. */
export interface LoyaltyProgramAccrualRuleCategoryData {
  /**
   * The ID of the `CATEGORY` [catalog object](entity:CatalogObject) that buyers can purchase to earn
   * points.
   */
  categoryId: string;
}

export const loyaltyProgramAccrualRuleCategoryDataSchema: Schema<LoyaltyProgramAccrualRuleCategoryData> = object(
  { categoryId: ['category_id', string()] }
);
