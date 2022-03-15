import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyReward, loyaltyRewardSchema } from './loyaltyReward';

/** A response that includes the loyalty reward created. */
export interface CreateLoyaltyRewardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a contract to redeem loyalty points for a [reward tier]($m/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
   * For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
   */
  reward?: LoyaltyReward;
}

export const createLoyaltyRewardResponseSchema: Schema<CreateLoyaltyRewardResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    reward: ['reward', optional(lazy(() => loyaltyRewardSchema))],
  }
);
