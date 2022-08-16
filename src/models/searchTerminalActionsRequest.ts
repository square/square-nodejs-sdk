import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  TerminalActionQuery,
  terminalActionQuerySchema,
} from './terminalActionQuery';

export interface SearchTerminalActionsRequest {
  query?: TerminalActionQuery;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for the original query.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more
   * information.
   */
  cursor?: string;
  /** Limit the number of results returned for a single request. */
  limit?: number;
}

export const searchTerminalActionsRequestSchema: Schema<SearchTerminalActionsRequest> = object(
  {
    query: ['query', optional(lazy(() => terminalActionQuerySchema))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
