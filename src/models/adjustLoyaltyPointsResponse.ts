import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyEvent, loyaltyEventSchema } from './loyaltyEvent';

/**
 * A response that includes the loyalty event that
 * resulted from the successful API call.
 */
export interface AdjustLoyaltyPointsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Provides information about a loyalty event.
   * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
   */
  event?: LoyaltyEvent;
}

export const adjustLoyaltyPointsResponseSchema: Schema<AdjustLoyaltyPointsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    event: ['event', optional(lazy(() => loyaltyEventSchema))],
  }
);
