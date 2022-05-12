import { boolean, number, object, optional, Schema, string } from '../schema';

/** Represents a [ListCustomerCustomAttributes]($e/CustomerCustomAttributes/ListCustomerCustomAttributes) request. */
export interface ListCustomerCustomAttributesRequest {
  /**
   * The maximum number of results to return in a single paged response. This limit is advisory.
   * The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.
   * The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number;
  /**
   * The cursor returned in the paged response from the previous call to this endpoint.
   * Provide this cursor to retrieve the next page of results for your original request. For more
   * information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /**
   * Indicates whether to return the [custom attribute definition]($m/CustomAttributeDefinition) in the `definition` field of each
   * custom attribute. Set this parameter to `true` to get the name and description of each custom
   * attribute, information about the data type, or other definition details. The default value is `false`.
   */
  withDefinitions?: boolean;
}

export const listCustomerCustomAttributesRequestSchema: Schema<ListCustomerCustomAttributesRequest> = object(
  {
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
    withDefinitions: ['with_definitions', optional(boolean())],
  }
);
