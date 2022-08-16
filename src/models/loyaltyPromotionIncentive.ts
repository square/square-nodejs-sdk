import { lazy, object, optional, Schema, string } from '../schema';
import {
  LoyaltyPromotionIncentivePointsAdditionData,
  loyaltyPromotionIncentivePointsAdditionDataSchema,
} from './loyaltyPromotionIncentivePointsAdditionData';
import {
  LoyaltyPromotionIncentivePointsMultiplierData,
  loyaltyPromotionIncentivePointsMultiplierDataSchema,
} from './loyaltyPromotionIncentivePointsMultiplierData';

/**
 * Represents how points for a [loyalty promotion]($m/LoyaltyPromotion) are calculated,
 * either by multiplying the points earned from the base program or by adding a specified number
 * of points to the points earned from the base program.
 */
export interface LoyaltyPromotionIncentive {
  /**
   * Indicates the type of points incentive for a [loyalty promotion]($m/LoyaltyPromotion),
   * which is used to determine how buyers can earn points from the promotion.
   */
  type: string;
  /** Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive]($m/LoyaltyPromotionIncentive). */
  pointsMultiplierData?: LoyaltyPromotionIncentivePointsMultiplierData;
  /** Represents the metadata for a `POINTS_ADDITION` type of [loyalty promotion incentive]($m/LoyaltyPromotionIncentive). */
  pointsAdditionData?: LoyaltyPromotionIncentivePointsAdditionData;
}

export const loyaltyPromotionIncentiveSchema: Schema<LoyaltyPromotionIncentive> = object(
  {
    type: ['type', string()],
    pointsMultiplierData: [
      'points_multiplier_data',
      optional(lazy(() => loyaltyPromotionIncentivePointsMultiplierDataSchema)),
    ],
    pointsAdditionData: [
      'points_addition_data',
      optional(lazy(() => loyaltyPromotionIncentivePointsAdditionDataSchema)),
    ],
  }
);
