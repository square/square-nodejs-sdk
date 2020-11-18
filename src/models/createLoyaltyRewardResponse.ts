import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyReward, loyaltyRewardSchema } from './loyaltyReward';

/** A response that includes the loyalty reward created. */
export interface CreateLoyaltyRewardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  reward?: LoyaltyReward;
}

export const createLoyaltyRewardResponseSchema: Schema<CreateLoyaltyRewardResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    reward: ['reward', optional(lazy(() => loyaltyRewardSchema))],
  }
);
