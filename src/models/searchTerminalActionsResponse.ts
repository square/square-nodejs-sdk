import { array, lazy, object, optional, Schema, string } from '../schema';
import { Error, errorSchema } from './error';
import { TerminalAction, terminalActionSchema } from './terminalAction';

export interface SearchTerminalActionsResponse {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested search result of `TerminalAction`s. */
  action?: TerminalAction[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more
   * information.
   */
  cursor?: string;
}

export const searchTerminalActionsResponseSchema: Schema<SearchTerminalActionsResponse> = object(
  {
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(array(lazy(() => terminalActionSchema)))],
    cursor: ['cursor', optional(string())],
  }
);
