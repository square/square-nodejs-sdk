import { number, object, optional, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `ACCUMULATE_PROMOTION_POINTS`. */
export interface LoyaltyEventAccumulatePromotionPoints {
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId?: string;
  /** The Square-assigned ID of the [loyalty promotion](entity:LoyaltyPromotion). */
  loyaltyPromotionId?: string;
  /** The number of points earned by the event. */
  points: number;
  /**
   * The ID of the [order](entity:Order) for which the buyer earned the promotion points.
   * Only applications that use the Orders API to process orders can trigger this event.
   */
  orderId: string;
}

export const loyaltyEventAccumulatePromotionPointsSchema: Schema<LoyaltyEventAccumulatePromotionPoints> = object(
  {
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    loyaltyPromotionId: ['loyalty_promotion_id', optional(string())],
    points: ['points', number()],
    orderId: ['order_id', string()],
  }
);
