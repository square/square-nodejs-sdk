import { number, object, optional, Schema, string } from '../schema';

export interface V1ListInventoryRequest {
  /** The maximum number of inventory entries to return in a single response. This value cannot exceed 1000. */
  limit?: number;
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string;
}

export const v1ListInventoryRequestSchema: Schema<V1ListInventoryRequest> = object(
  {
    limit: ['limit', optional(number())],
    batchToken: ['batch_token', optional(string())],
  }
);
