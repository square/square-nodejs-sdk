import { lazy, number, object, optional, Schema, string } from '../schema';
import { LoyaltyEventQuery, loyaltyEventQuerySchema } from './loyaltyEventQuery';

/** A request to search for loyalty events. */
export interface SearchLoyaltyEventsRequest {
  /** Represents a query used to search for loyalty events. */
  query?: LoyaltyEventQuery;
  /**
   * The maximum number of results to include in the response.
   * The last page might contain fewer events.
   * The default is 30 events.
   */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const searchLoyaltyEventsRequestSchema: Schema<SearchLoyaltyEventsRequest> = object(
  {
    query: ['query', optional(lazy(() => loyaltyEventQuerySchema))],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
