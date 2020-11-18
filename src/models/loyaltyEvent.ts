import { lazy, object, optional, Schema, string } from '../schema';
import {
  LoyaltyEventAccumulatePoints,
  loyaltyEventAccumulatePointsSchema,
} from './loyaltyEventAccumulatePoints';
import {
  LoyaltyEventAdjustPoints,
  loyaltyEventAdjustPointsSchema,
} from './loyaltyEventAdjustPoints';
import {
  LoyaltyEventCreateReward,
  loyaltyEventCreateRewardSchema,
} from './loyaltyEventCreateReward';
import {
  LoyaltyEventDeleteReward,
  loyaltyEventDeleteRewardSchema,
} from './loyaltyEventDeleteReward';
import {
  LoyaltyEventExpirePoints,
  loyaltyEventExpirePointsSchema,
} from './loyaltyEventExpirePoints';
import {
  LoyaltyEventOther,
  loyaltyEventOtherSchema,
} from './loyaltyEventOther';
import {
  LoyaltyEventRedeemReward,
  loyaltyEventRedeemRewardSchema,
} from './loyaltyEventRedeemReward';

/**
 * Provides information about a loyalty event.
 * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
 */
export interface LoyaltyEvent {
  /** The Square-assigned ID of the loyalty event. */
  id: string;
  /** The type of the loyalty event. */
  type: string;
  /** The timestamp when the event was created, in RFC 3339 format. */
  createdAt: string;
  /** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
  accumulatePoints?: LoyaltyEventAccumulatePoints;
  /** Provides metadata when the event `type` is `CREATE_REWARD`. */
  createReward?: LoyaltyEventCreateReward;
  /** Provides metadata when the event `type` is `REDEEM_REWARD`. */
  redeemReward?: LoyaltyEventRedeemReward;
  /** Provides metadata when the event `type` is `DELETE_REWARD`. */
  deleteReward?: LoyaltyEventDeleteReward;
  /** Provides metadata when the event `type` is `ADJUST_POINTS`. */
  adjustPoints?: LoyaltyEventAdjustPoints;
  /** The ID of the [loyalty account](#type-LoyaltyAccount) in which the event occurred. */
  loyaltyAccountId: string;
  /** The ID of the [location](#type-Location) where the event occurred. */
  locationId?: string;
  /** Defines whether the event was generated by the Square Point of Sale. */
  source: string;
  /** Provides metadata when the event `type` is `EXPIRE_POINTS`. */
  expirePoints?: LoyaltyEventExpirePoints;
  /** Provides metadata when the event `type` is `OTHER`. */
  otherEvent?: LoyaltyEventOther;
}

export const loyaltyEventSchema: Schema<LoyaltyEvent> = object({
  id: ['id', string()],
  type: ['type', string()],
  createdAt: ['created_at', string()],
  accumulatePoints: [
    'accumulate_points',
    optional(lazy(() => loyaltyEventAccumulatePointsSchema)),
  ],
  createReward: [
    'create_reward',
    optional(lazy(() => loyaltyEventCreateRewardSchema)),
  ],
  redeemReward: [
    'redeem_reward',
    optional(lazy(() => loyaltyEventRedeemRewardSchema)),
  ],
  deleteReward: [
    'delete_reward',
    optional(lazy(() => loyaltyEventDeleteRewardSchema)),
  ],
  adjustPoints: [
    'adjust_points',
    optional(lazy(() => loyaltyEventAdjustPointsSchema)),
  ],
  loyaltyAccountId: ['loyalty_account_id', string()],
  locationId: ['location_id', optional(string())],
  source: ['source', string()],
  expirePoints: [
    'expire_points',
    optional(lazy(() => loyaltyEventExpirePointsSchema)),
  ],
  otherEvent: ['other_event', optional(lazy(() => loyaltyEventOtherSchema))],
});
