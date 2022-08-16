import { number, object, Schema } from '../schema';

/** Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive]($m/LoyaltyPromotionIncentive). */
export interface LoyaltyPromotionIncentivePointsMultiplierData {
  /**
   * The multiplier used to calculate the number of points earned each time the promotion
   * is triggered. For example, suppose a purchase qualifies for 5 points from the base loyalty program.
   * If the purchase also qualifies for a `POINTS_MULTIPLIER` promotion incentive with a `points_multiplier`
   * of 3, the buyer earns a total of 15 points (5 program points x 3 promotion multiplier = 15 points).
   */
  pointsMultiplier: number;
}

export const loyaltyPromotionIncentivePointsMultiplierDataSchema: Schema<LoyaltyPromotionIncentivePointsMultiplierData> = object(
  { pointsMultiplier: ['points_multiplier', number()] }
);
