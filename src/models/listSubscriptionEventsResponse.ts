import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import {
  SubscriptionEvent,
  subscriptionEventSchema,
} from './subscriptionEvent';

/**
 * Defines the fields that are included in the response from the
 * [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents)
 * endpoint.
 */
export interface ListSubscriptionEventsResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The `SubscriptionEvents` retrieved. */
  subscriptionEvents?: SubscriptionEvent[];
  /**
   * When a response is truncated, it includes a cursor that you can
   * use in a subsequent request to fetch the next set of events.
   * If empty, this is the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
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
