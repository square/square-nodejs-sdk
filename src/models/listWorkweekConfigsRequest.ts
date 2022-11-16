import { nullable, number, object, optional, Schema, string } from '../schema';

/** A request for a set of `WorkweekConfig` objects. */
export interface ListWorkweekConfigsRequest {
  /** The maximum number of `WorkweekConfigs` results to return per page. */
  limit?: number | null;
  /** A pointer to the next page of `WorkweekConfig` results to fetch. */
  cursor?: string | null;
}

export const listWorkweekConfigsRequestSchema: Schema<ListWorkweekConfigsRequest> = object(
  {
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
  }
);
