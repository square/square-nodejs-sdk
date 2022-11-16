import { nullable, number, object, optional, Schema, string } from '../schema';

export interface V1ListOrdersRequest {
  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  order?: string;
  /** The maximum number of payments to return in a single response. This value cannot exceed 200. */
  limit?: number | null;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string | null;
}

export const v1ListOrdersRequestSchema: Schema<V1ListOrdersRequest> = object({
  order: ['order', optional(string())],
  limit: ['limit', optional(nullable(number()))],
  batchToken: ['batch_token', optional(nullable(string()))],
});
