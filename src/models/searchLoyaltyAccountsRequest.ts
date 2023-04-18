import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  SearchLoyaltyAccountsRequestLoyaltyAccountQuery,
  searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema,
} from './searchLoyaltyAccountsRequestLoyaltyAccountQuery';

/** A request to search for loyalty accounts. */
export interface SearchLoyaltyAccountsRequest {
  /** The search criteria for the loyalty accounts. */
  query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
  /** The maximum number of results to include in the response. The default value is 30. */
  limit?: number;
  /**
   * A pagination cursor returned by a previous call to
   * this endpoint. Provide this to retrieve the next set of
   * results for the original query.
   * For more information,
   * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const searchLoyaltyAccountsRequestSchema: Schema<SearchLoyaltyAccountsRequest> = object(
  {
    query: [
      'query',
      optional(
        lazy(() => searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema)
      ),
    ],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
