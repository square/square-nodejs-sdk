import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCardActivity, giftCardActivitySchema } from './giftCardActivity';

/**
 * A response that contains one or more `GiftCardActivity`. The response might contain a set of `Error` objects
 * if the request resulted in errors.
 */
export interface ListGiftCardActivitiesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** Gift card activities retrieved. */
  giftCardActivities?: GiftCardActivity[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a
   * subsequent request to fetch the next set of activities. If empty, this is
   * the final response.
   */
  cursor?: string;
}

export const listGiftCardActivitiesResponseSchema: Schema<ListGiftCardActivitiesResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCardActivities: [
      'gift_card_activities',
      optional(array(lazy(() => giftCardActivitySchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
