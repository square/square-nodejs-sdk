import { object, optional, Schema, string } from '../schema';

export interface V1ListItemsRequest {
  /**
   * A pagination cursor to retrieve the next set of results for your
   * original query to the endpoint.
   */
  batchToken?: string;
}

export const v1ListItemsRequestSchema: Schema<V1ListItemsRequest> = object({
  batchToken: ['batch_token', optional(string())],
});
