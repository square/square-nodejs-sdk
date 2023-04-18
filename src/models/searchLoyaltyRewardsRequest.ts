import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  SearchLoyaltyRewardsRequestLoyaltyRewardQuery,
  searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema,
} from './searchLoyaltyRewardsRequestLoyaltyRewardQuery';

/** A request to search for loyalty rewards. */
export interface SearchLoyaltyRewardsRequest {
  /** The set of search requirements. */
  query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
  /** The maximum number of results to return in the response. The default value is 30. */
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

export const searchLoyaltyRewardsRequestSchema: Schema<SearchLoyaltyRewardsRequest> = object(
  {
    query: [
      'query',
      optional(lazy(() => searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema)),
    ],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
