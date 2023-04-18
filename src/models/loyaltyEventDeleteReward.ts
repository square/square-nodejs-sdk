import { number, object, optional, Schema, string } from '../schema';

/** Provides metadata when the event `type` is `DELETE_REWARD`. */
export interface LoyaltyEventDeleteReward {
  /** The ID of the [loyalty program](entity:LoyaltyProgram). */
  loyaltyProgramId: string;
  /**
   * The ID of the deleted [loyalty reward](entity:LoyaltyReward).
   * This field is returned only if the event source is `LOYALTY_API`.
   */
  rewardId?: string;
  /** The number of points returned to the loyalty account. */
  points: number;
}

export const loyaltyEventDeleteRewardSchema: Schema<LoyaltyEventDeleteReward> = object(
  {
    loyaltyProgramId: ['loyalty_program_id', string()],
    rewardId: ['reward_id', optional(string())],
    points: ['points', number()],
  }
);
