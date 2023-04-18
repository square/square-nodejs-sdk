import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
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
  id?: string;
  /** Indicates whether the program is currently active. */
  status?: string;
  /** The list of rewards for buyers, sorted by ascending points. */
  rewardTiers?: LoyaltyProgramRewardTier[] | null;
  /** Describes when the loyalty program expires. */
  expirationPolicy?: LoyaltyProgramExpirationPolicy;
  /** Represents the naming used for loyalty points. */
  terminology?: LoyaltyProgramTerminology;
  /** The [locations](entity:Location) at which the program is active. */
  locationIds?: string[] | null;
  /** The timestamp when the program was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the reward was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Defines how buyers can earn loyalty points from the base loyalty program.
   * To check for associated [loyalty promotions](entity:LoyaltyPromotion) that enable
   * buyers to earn extra points, call [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions).
   */
  accrualRules?: LoyaltyProgramAccrualRule[] | null;
}

export const loyaltyProgramSchema: Schema<LoyaltyProgram> = object({
  id: ['id', optional(string())],
  status: ['status', optional(string())],
  rewardTiers: [
    'reward_tiers',
    optional(nullable(array(lazy(() => loyaltyProgramRewardTierSchema)))),
  ],
  expirationPolicy: [
    'expiration_policy',
    optional(lazy(() => loyaltyProgramExpirationPolicySchema)),
  ],
  terminology: [
    'terminology',
    optional(lazy(() => loyaltyProgramTerminologySchema)),
  ],
  locationIds: ['location_ids', optional(nullable(array(string())))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  accrualRules: [
    'accrual_rules',
    optional(nullable(array(lazy(() => loyaltyProgramAccrualRuleSchema)))),
  ],
});
