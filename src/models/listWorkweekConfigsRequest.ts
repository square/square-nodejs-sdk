import { number, object, optional, Schema, string } from '../schema';

/** A request for a set of `WorkweekConfig` objects */
export interface ListWorkweekConfigsRequest {
  /** Maximum number of Workweek Configs to return per page. */
  limit?: number;
  /** Pointer to the next page of Workweek Config results to fetch. */
  cursor?: string;
}

export const listWorkweekConfigsRequestSchema: Schema<ListWorkweekConfigsRequest> = object(
  {
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
  }
);
