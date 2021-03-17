import { object, optional, Schema, string } from '../schema';

export interface TerminalCheckoutQuerySort {
  /**
   * The order in which results are listed.
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string;
}

export const terminalCheckoutQuerySortSchema: Schema<TerminalCheckoutQuerySort> = object(
  { sortOrder: ['sort_order', optional(string())] }
);
