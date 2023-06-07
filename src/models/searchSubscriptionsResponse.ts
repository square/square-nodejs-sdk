import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { Subscription, subscriptionSchema } from './subscription';

/**
 * Defines output parameters in a response from the
 * [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
 */
export interface SearchSubscriptionsResponse {
  /** Errors encountered during the request. */
  errors?: Error[];
  /** The subscriptions matching the specified query expressions. */
  subscriptions?: Subscription[];
  /**
   * When the total number of resulting subscription exceeds the limit of a paged response,
   * the response includes a cursor for you to use in a subsequent request to fetch the next set of results.
   * If the cursor is unset, the response contains the last page of the results.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
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
