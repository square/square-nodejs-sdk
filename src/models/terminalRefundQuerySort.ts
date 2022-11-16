import { nullable, object, optional, Schema, string } from '../schema';

export interface TerminalRefundQuerySort {
  /**
   * The order in which results are listed.
   * - `ASC` - Oldest to newest.
   * - `DESC` - Newest to oldest (default).
   */
  sortOrder?: string | null;
}

export const terminalRefundQuerySortSchema: Schema<TerminalRefundQuerySort> = object(
  { sortOrder: ['sort_order', optional(nullable(string()))] }
);
