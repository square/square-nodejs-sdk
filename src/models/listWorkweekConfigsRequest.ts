import { number, object, optional, Schema, string } from '../schema';

/** A request for a set of `WorkweekConfig` objects. */
export interface ListWorkweekConfigsRequest {
  /** The maximum number of `WorkweekConfigs` results to return per page. */
  limit?: number;
  /** A pointer to the next page of `WorkweekConfig` results to fetch. */
  cursor?: string;
}

export const listWorkweekConfigsRequestSchema: Schema<ListWorkweekConfigsRequest> = object(
  {
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
