import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyEvent, loyaltyEventSchema } from './loyaltyEvent';

/**
 * A response that contains loyalty events that satisfy the search
 * criteria, in order by the `created_at` date.
 */
export interface SearchLoyaltyEventsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The loyalty events that satisfy the search criteria. */
  events?: LoyaltyEvent[];
  /**
   * The pagination cursor to be used in a subsequent
   * request. If empty, this is the final response.
   * For more information,
   * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const searchLoyaltyEventsResponseSchema: Schema<SearchLoyaltyEventsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    events: ['events', optional(array(lazy(() => loyaltyEventSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
