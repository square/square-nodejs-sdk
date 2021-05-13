import { object, Schema, string } from '../schema';

/**
 * Represents a reward that can be applied to an order if the necessary
 * reward tier criteria are met. Rewards are created through the Loyalty API.
 */
export interface OrderReward {
  /** The identifier of the reward. */
  id: string;
  /** The identifier of the reward tier corresponding to this reward. */
  rewardTierId: string;
}

export const orderRewardSchema: Schema<OrderReward> = object({
  id: ['id', string()],
  rewardTierId: ['reward_tier_id', string()],
});
