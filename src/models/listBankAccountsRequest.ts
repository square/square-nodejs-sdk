import { nullable, number, object, optional, Schema, string } from '../schema';

/**
 * Request object for fetching all `BankAccount`
 * objects linked to a account.
 */
export interface ListBankAccountsRequest {
  /**
   * The pagination cursor returned by a previous call to this endpoint.
   * Use it in the next `ListBankAccounts` request to retrieve the next set
   * of results.
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
   */
  cursor?: string | null;
  /**
   * Upper limit on the number of bank accounts to return in the response.
   * Currently, 1000 is the largest supported limit. You can specify a limit
   * of up to 1000 bank accounts. This is also the default limit.
   */
  limit?: number | null;
  /**
   * Location ID. You can specify this optional filter
   * to retrieve only the linked bank accounts belonging to a specific location.
   */
  locationId?: string | null;
}

export const listBankAccountsRequestSchema: Schema<ListBankAccountsRequest> = object(
  {
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    locationId: ['location_id', optional(nullable(string()))],
  }
);
