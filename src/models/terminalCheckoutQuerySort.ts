import { object, optional, Schema, string } from '../schema';

export interface TerminalCheckoutQuerySort {
  /**
   * The order in which results are listed.
   * - `ASC` - oldest to newest
   * - `DESC` - newest to oldest (default).
   */
  sortOrder?: string;
}

export const terminalCheckoutQuerySortSchema: Schema<TerminalCheckoutQuerySort> = object(
  { sortOrder: ['sort_order', optional(string())] }
);
