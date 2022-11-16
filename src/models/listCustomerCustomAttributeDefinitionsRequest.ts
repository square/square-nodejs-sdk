import { nullable, number, object, optional, Schema, string } from '../schema';

/** Represents a [ListCustomerCustomAttributeDefinitions]($e/CustomerCustomAttributes/ListCustomerCustomAttributeDefinitions) request. */
export interface ListCustomerCustomAttributeDefinitionsRequest {
  /**
   * The maximum number of results to return in a single paged response. This limit is advisory.
   * The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.
   * The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number | null;
  /**
   * The cursor returned in the paged response from the previous call to this endpoint.
   * Provide this cursor to retrieve the next page of results for your original request.
   * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
}

export const listCustomerCustomAttributeDefinitionsRequestSchema: Schema<ListCustomerCustomAttributeDefinitionsRequest> = object(
  {
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
  }
);
