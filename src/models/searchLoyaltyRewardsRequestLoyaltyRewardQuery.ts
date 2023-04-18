import { object, optional, Schema, string } from '../schema';

/** The set of search requirements. */
export interface SearchLoyaltyRewardsRequestLoyaltyRewardQuery {
  /** The ID of the [loyalty account](entity:LoyaltyAccount) to which the loyalty reward belongs. */
  loyaltyAccountId: string;
  /** The status of the loyalty reward. */
  status?: string;
}

export const searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema: Schema<SearchLoyaltyRewardsRequestLoyaltyRewardQuery> = object(
  {
    loyaltyAccountId: ['loyalty_account_id', string()],
    status: ['status', optional(string())],
  }
);
