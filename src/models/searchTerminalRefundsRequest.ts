import { lazy, number, object, optional, Schema, string } from '../schema';
import {
  TerminalRefundQuery,
  terminalRefundQuerySchema,
} from './terminalRefundQuery';

export interface SearchTerminalRefundsRequest {
  query?: TerminalRefundQuery;
  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this cursor to retrieve the next set of results for the original query.
   */
  cursor?: string;
  /** Limits the number of results returned for a single request. */
  limit?: number;
}

export const searchTerminalRefundsRequestSchema: Schema<SearchTerminalRefundsRequest> = object(
  {
    query: ['query', optional(lazy(() => terminalRefundQuerySchema))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
  }
);
