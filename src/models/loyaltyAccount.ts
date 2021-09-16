import {
  array,
  lazy,
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
 * Describes a loyalty account. For more information, see
 * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
 */
export interface LoyaltyAccount {
  /** The Square-assigned ID of the loyalty account. */
  id?: string;
  /** The Square-assigned ID of the [loyalty program]($m/LoyaltyProgram) to which the account belongs. */
  programId: string;
  /**
   * The available point balance in the loyalty account. If points are scheduled to expire, they are listed in the `expiring_point_deadlines` field.
   * Your application should be able to handle loyalty accounts that have a negative point balance (`balance` is less than 0). This might occur if a seller makes a manual adjustment or as a result of a refund or exchange.
   */
  balance?: number;
  /** The total points accrued during the lifetime of the account. */
  lifetimePoints?: number;
  /** The Square-assigned ID of the [customer]($m/Customer) that is associated with the account. */
  customerId?: string;
  /** The timestamp when enrollment occurred, in RFC 3339 format. */
  enrolledAt?: string;
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
  expiringPointDeadlines?: LoyaltyAccountExpiringPointDeadline[];
}

export const loyaltyAccountSchema: Schema<LoyaltyAccount> = object({
  id: ['id', optional(string())],
  programId: ['program_id', string()],
  balance: ['balance', optional(number())],
  lifetimePoints: ['lifetime_points', optional(number())],
  customerId: ['customer_id', optional(string())],
  enrolledAt: ['enrolled_at', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  mapping: ['mapping', optional(lazy(() => loyaltyAccountMappingSchema))],
  expiringPointDeadlines: [
    'expiring_point_deadlines',
    optional(array(lazy(() => loyaltyAccountExpiringPointDeadlineSchema))),
  ],
});
