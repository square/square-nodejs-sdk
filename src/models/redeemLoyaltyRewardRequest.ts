import { object, Schema, string } from '../schema';

/** A request to redeem a loyalty reward. */
export interface RedeemLoyaltyRewardRequest {
  /**
   * A unique string that identifies this `RedeemLoyaltyReward` request.
   * Keys can be any valid string, but must be unique for every request.
   */
  idempotencyKey: string;
  /** The ID of the [location](entity:Location) where the reward is redeemed. */
  locationId: string;
}

export const redeemLoyaltyRewardRequestSchema: Schema<RedeemLoyaltyRewardRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    locationId: ['location_id', string()],
  }
);
