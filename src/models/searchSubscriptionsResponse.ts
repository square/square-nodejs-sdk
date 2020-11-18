import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines the fields that are included in the response from the
 * [SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint.
 */
export interface SearchSubscriptionsResponse {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The search result. */
  subscriptions?: Subscription[];
  /**
   * When a response is truncated, it includes a cursor that you can
   * use in a subsequent request to fetch the next set of subscriptions.
   * If empty, this is the final response.
   * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
}

export const searchSubscriptionsResponseSchema: Schema<SearchSubscriptionsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptions: [
      'subscriptions',
      optional(array(lazy(() => subscriptionSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
