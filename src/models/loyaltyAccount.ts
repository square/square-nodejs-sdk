import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  LoyaltyAccountExpiringPointDeadline,
  loyaltyAccountExpiringPointDeadlineSchema,
} from './loyaltyAccountExpiringPointDeadline';
import {
  LoyaltyAccountMapping,
  loyaltyAccountMappingSchema,
} from './loyaltyAccountMapping';

/**
 * Describes a loyalty account in a [loyalty program]($m/LoyaltyProgram). For more information, see
 * [Create and Retrieve Loyalty Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
 */
export interface LoyaltyAccount {
  /** The Square-assigned ID of the loyalty account. */
  id?: string;
  /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram) to which the account belongs. */
  programId: string;
  /**
   * The available point balance in the loyalty account. If points are scheduled to expire, they are listed in the `expiring_point_deadlines` field.
   * Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange.
   */
  balance?: number;
  /** The total points accrued during the lifetime of the account. */
  lifetimePoints?: number;
  /** The Square-assigned ID of the [customer](entity:Customer) that is associated with the account. */
  customerId?: string | null;
  /**
   * The timestamp when the buyer joined the loyalty program, in RFC 3339 format. This field is used to display the **Enrolled On** or **Member Since** date in first-party Square products.
   * If this field is not set in a `CreateLoyaltyAccount` request, Square populates it after the buyer's first action on their account
   * (when `AccumulateLoyaltyPoints` or `CreateLoyaltyReward` is called). In first-party flows, Square populates the field when the buyer agrees to the terms of service in Square Point of Sale.
   * This field is typically specified in a `CreateLoyaltyAccount` request when creating a loyalty account for a buyer who already interacted with their account.
   * For example, you would set this field when migrating accounts from an external system. The timestamp in the request can represent a current or previous date and time, but it cannot be set for the future.
   */
  enrolledAt?: string | null;
  /** The timestamp when the loyalty account was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the loyalty account was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Represents the mapping that associates a loyalty account with a buyer.
   * Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
   * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  mapping?: LoyaltyAccountMapping;
  /**
   * The schedule for when points expire in the loyalty account balance. This field is present only if the account has points that are scheduled to expire.
   * The total number of points in this field equals the number of points in the `balance` field.
   */
  expiringPointDeadlines?: LoyaltyAccountExpiringPointDeadline[] | null;
}

export const loyaltyAccountSchema: Schema<LoyaltyAccount> = object({
  id: ['id', optional(string())],
  programId: ['program_id', string()],
  balance: ['balance', optional(number())],
  lifetimePoints: ['lifetime_points', optional(number())],
  customerId: ['customer_id', optional(nullable(string()))],
  enrolledAt: ['enrolled_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  mapping: ['mapping', optional(lazy(() => loyaltyAccountMappingSchema))],
  expiringPointDeadlines: [
    'expiring_point_deadlines',
    optional(
      nullable(array(lazy(() => loyaltyAccountExpiringPointDeadlineSchema)))
    ),
  ],
});
