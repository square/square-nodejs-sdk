import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/** Represents a [ListBookingCustomAttributes]($e/BookingCustomAttributes/ListBookingCustomAttributes) request. */
export interface ListBookingCustomAttributesRequest {
  /**
   * The maximum number of results to return in a single paged response. This limit is advisory.
   * The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.
   * The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  limit?: number | null;
  /**
   * The cursor returned in the paged response from the previous call to this endpoint.
   * Provide this cursor to retrieve the next page of results for your original request. For more
   * information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string | null;
  /**
   * Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each
   * custom attribute. Set this parameter to `true` to get the name and description of each custom
   * attribute, information about the data type, or other definition details. The default value is `false`.
   */
  withDefinitions?: boolean | null;
}

export const listBookingCustomAttributesRequestSchema: Schema<ListBookingCustomAttributesRequest> = object(
  {
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    withDefinitions: ['with_definitions', optional(nullable(boolean()))],
  }
);
