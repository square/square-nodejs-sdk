import { lazy, object, Schema, string } from '../schema';
import { LoyaltyPromotion, loyaltyPromotionSchema } from './loyaltyPromotion';

/** Represents a [CreateLoyaltyPromotion]($e/Loyalty/CreateLoyaltyPromotion) request. */
export interface CreateLoyaltyPromotionRequest {
  /**
   * Represents a promotion for a [loyalty program]($m/LoyaltyProgram). Loyalty promotions enable buyers
   * to earn extra points on top of those earned from the base program.
   * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.
   */
  loyaltyPromotion: LoyaltyPromotion;
  /**
   * A unique identifier for this request, which is used to ensure idempotency. For more information,
   * see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey: string;
}

export const createLoyaltyPromotionRequestSchema: Schema<CreateLoyaltyPromotionRequest> = object(
  {
    loyaltyPromotion: ['loyalty_promotion', lazy(() => loyaltyPromotionSchema)],
    idempotencyKey: ['idempotency_key', string()],
  }
);
