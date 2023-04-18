import { object, Schema, string } from '../schema';

/** Filter events by loyalty account. */
export interface LoyaltyEventLoyaltyAccountFilter {
  /** The ID of the [loyalty account](entity:LoyaltyAccount) associated with loyalty events. */
  loyaltyAccountId: string;
}

export const loyaltyEventLoyaltyAccountFilterSchema: Schema<LoyaltyEventLoyaltyAccountFilter> = object(
  { loyaltyAccountId: ['loyalty_account_id', string()] }
);
