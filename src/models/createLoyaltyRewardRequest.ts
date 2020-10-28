import { lazy, object, Schema, string } from '../schema';
import { LoyaltyReward, loyaltyRewardSchema } from './loyaltyReward';

/** A request to create a loyalty reward. */
export interface CreateLoyaltyRewardRequest {
  reward: LoyaltyReward;
  /**
   * A unique string that identifies this `CreateLoyaltyReward` request.
   * Keys can be any valid string, but must be unique for every request.
   */
  idempotencyKey: string;
}

export const createLoyaltyRewardRequestSchema: Schema<CreateLoyaltyRewardRequest> = object(
  {
    reward: ['reward', lazy(() => loyaltyRewardSchema)],
    idempotencyKey: ['idempotency_key', string()],
  }
);
