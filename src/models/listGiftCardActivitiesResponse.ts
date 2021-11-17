import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { GiftCardActivity, giftCardActivitySchema } from './giftCardActivity';

/**
 * A response that contains a list of `GiftCardActivity` objects. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface ListGiftCardActivitiesResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The requested gift card activities or an empty object if none are found. */
  giftCardActivities?: GiftCardActivity[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a
   * subsequent request to retrieve the next set of activities. If a cursor is not present, this is
   * the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
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
