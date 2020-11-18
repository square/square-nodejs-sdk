import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyReward, loyaltyRewardSchema } from './loyaltyReward';

/** A response that includes the loyalty reward. */
export interface RetrieveLoyaltyRewardResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  reward?: LoyaltyReward;
}

export const retrieveLoyaltyRewardResponseSchema: Schema<RetrieveLoyaltyRewardResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    reward: ['reward', optional(lazy(() => loyaltyRewardSchema))],
  }
);
