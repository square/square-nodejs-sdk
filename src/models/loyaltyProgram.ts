import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  LoyaltyProgramAccrualRule,
  loyaltyProgramAccrualRuleSchema,
} from './loyaltyProgramAccrualRule';
import {
  LoyaltyProgramExpirationPolicy,
  loyaltyProgramExpirationPolicySchema,
} from './loyaltyProgramExpirationPolicy';
import {
  LoyaltyProgramRewardTier,
  loyaltyProgramRewardTierSchema,
} from './loyaltyProgramRewardTier';
import {
  LoyaltyProgramTerminology,
  loyaltyProgramTerminologySchema,
} from './loyaltyProgramTerminology';

/**
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export interface LoyaltyProgram {
  /**
   * The Square-assigned ID of the loyalty program. Updates to
   * the loyalty program do not modify the identifier.
   */
  id: string;
  /** Indicates whether the program is currently active. */
  status: string;
  /** The list of rewards for buyers, sorted by ascending points. */
  rewardTiers: LoyaltyProgramRewardTier[];
  /** Describes when the loyalty program expires. */
  expirationPolicy?: LoyaltyProgramExpirationPolicy;
  /** Represents the naming used for loyalty points. */
  terminology: LoyaltyProgramTerminology;
  /** The [locations]($m/Location) at which the program is active. */
  locationIds: string[];
  /** The timestamp when the program was created, in RFC 3339 format. */
  createdAt: string;
  /** The timestamp when the reward was last updated, in RFC 3339 format. */
  updatedAt: string;
  /** Defines how buyers can earn loyalty points. */
  accrualRules: LoyaltyProgramAccrualRule[];
}

export const loyaltyProgramSchema: Schema<LoyaltyProgram> = object({
  id: ['id', string()],
  status: ['status', string()],
  rewardTiers: [
    'reward_tiers',
    array(lazy(() => loyaltyProgramRewardTierSchema)),
  ],
  expirationPolicy: [
    'expiration_policy',
    optional(lazy(() => loyaltyProgramExpirationPolicySchema)),
  ],
  terminology: ['terminology', lazy(() => loyaltyProgramTerminologySchema)],
  locationIds: ['location_ids', array(string())],
  createdAt: ['created_at', string()],
  updatedAt: ['updated_at', string()],
  accrualRules: [
    'accrual_rules',
    array(lazy(() => loyaltyProgramAccrualRuleSchema)),
  ],
});
