/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         rewardId: "reward_id",
 *         idempotencyKey: "98adc7f7-6963-473b-b29c-f3c9cdd7d994",
 *         locationId: "P034NEENMD09F"
 *     }
 */
export interface RedeemLoyaltyRewardRequest {
    /**
     * The ID of the [loyalty reward](entity:LoyaltyReward) to redeem.
     */
    rewardId: string;
    /**
     * A unique string that identifies this `RedeemLoyaltyReward` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
    /** The ID of the [location](entity:Location) where the reward is redeemed. */
    locationId: string;
}
