import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import {
  SubscriptionEvent,
  subscriptionEventSchema,
} from './subscriptionEvent';

/**
 * Defines output parameters in a response from the
 * [ListSubscriptionEvents]($e/Subscriptions/ListSubscriptionEvents).
 */
export interface ListSubscriptionEventsResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The retrieved subscription events. */
  subscriptionEvents?: SubscriptionEvent[];
  /**
   * When the total number of resulting subscription events exceeds the limit of a paged response,
   * the response includes a cursor for you to use in a subsequent request to fetch the next set of events.
   * If the cursor is unset, the response contains the last page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const listSubscriptionEventsResponseSchema: Schema<ListSubscriptionEventsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptionEvents: [
      'subscription_events',
      optional(array(lazy(() => subscriptionEventSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
