import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { LoyaltyAccount, loyaltyAccountSchema } from './loyaltyAccount';

/** A response that includes loyalty accounts that satisfy the search criteria. */
export interface SearchLoyaltyAccountsResponse {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The loyalty accounts that met the search criteria,
   * in order of creation date.
   */
  loyaltyAccounts?: LoyaltyAccount[];
  /**
   * The pagination cursor to use in a subsequent
   * request. If empty, this is the final response.
   * For more information,
   * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
}

export const searchLoyaltyAccountsResponseSchema: Schema<SearchLoyaltyAccountsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyAccounts: [
      'loyalty_accounts',
      optional(array(lazy(() => loyaltyAccountSchema))),
    ],
    cursor: ['cursor', optional(string())],
  }
);
