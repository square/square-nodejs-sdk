import {
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  LoyaltyEventAdjustPoints,
  loyaltyEventAdjustPointsSchema,
} from './loyaltyEventAdjustPoints';

/** Represents an [AdjustLoyaltyPoints]($e/Loyalty/AdjustLoyaltyPoints) request. */
export interface AdjustLoyaltyPointsRequest {
  /**
   * A unique string that identifies this `AdjustLoyaltyPoints` request.
   * Keys can be any valid string, but must be unique for every request.
   */
  idempotencyKey: string;
  /** Provides metadata when the event `type` is `ADJUST_POINTS`. */
  adjustPoints: LoyaltyEventAdjustPoints;
  /**
   * Indicates whether to allow a negative adjustment to result in a negative balance. If `true`, a negative
   * balance is allowed when subtracting points. If `false`, Square returns a `BAD_REQUEST` error when subtracting
   * the specified number of points would result in a negative balance. The default value is `false`.
   */
  allowNegativeBalance?: boolean | null;
}

export const adjustLoyaltyPointsRequestSchema: Schema<AdjustLoyaltyPointsRequest> = object(
  {
    idempotencyKey: ['idempotency_key', string()],
    adjustPoints: ['adjust_points', lazy(() => loyaltyEventAdjustPointsSchema)],
    allowNegativeBalance: [
      'allow_negative_balance',
      optional(nullable(boolean())),
    ],
  }
);
