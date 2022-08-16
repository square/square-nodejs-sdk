import { number, object, optional, Schema, string } from '../schema';

/**
 * Represents the number of times a buyer can earn points during a [loyalty promotion]($m/LoyaltyPromotion).
 * If this field is not set, buyers can trigger the promotion an unlimited number of times to earn points during
 * the time that the promotion is available.
 * A purchase that is disqualified from earning points because of this limit might qualify for another active promotion.
 */
export interface LoyaltyPromotionTriggerLimit {
  /** The maximum number of times a buyer can trigger the promotion during the specified `interval`. */
  times: number;
  /**
   * Indicates the time period that the [trigger limit]($m/LoyaltyPromotionTriggerLimit) applies to,
   * which is used to determine the number of times a buyer can earn points for a [loyalty promotion]($m/LoyaltyPromotion).
   */
  interval?: string;
}

export const loyaltyPromotionTriggerLimitSchema: Schema<LoyaltyPromotionTriggerLimit> = object(
  { times: ['times', number()], interval: ['interval', optional(string())] }
);
