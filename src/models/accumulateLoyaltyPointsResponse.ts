import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyEvent, loyaltyEventSchema } from './loyaltyEvent';

/** Represents an [AccumulateLoyaltyPoints]($e/Loyalty/AccumulateLoyaltyPoints) response. */
export interface AccumulateLoyaltyPointsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Provides information about a loyalty event.
   * For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
   */
  event?: LoyaltyEvent;
  /**
   * The resulting loyalty events. If the purchase qualifies for points, the `ACCUMULATE_POINTS` event
   * is always included. When using the Orders API, the `ACCUMULATE_PROMOTION_POINTS` event is included
   * if the purchase also qualifies for a loyalty promotion.
   */
  events?: LoyaltyEvent[];
}

export const accumulateLoyaltyPointsResponseSchema: Schema<AccumulateLoyaltyPointsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    event: ['event', optional(lazy(() => loyaltyEventSchema))],
    events: ['events', optional(array(lazy(() => loyaltyEventSchema)))],
  }
);
