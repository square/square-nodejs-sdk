import { number, object, optional, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `CREATE_REWARD`. */
export interface LoyaltyEventCreateReward {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /**
   * The Square-assigned ID of the created [loyalty reward](entity:LoyaltyReward).
   * This field is returned only if the event source is `LOYALTY_API`.
   */
  rewardId?: string;
  /** The loyalty points used to create the reward. */
  points: number;
}

export const loyaltyEventCreateRewardSchema: Schema<LoyaltyEventCreateReward> = object(
  {
    loyaltyProgramId: ['loyalty_program_id', string()],
    rewardId: ['reward_id', optional(string())],
    points: ['points', number()],
  }
);
