import { lazy, object, optional, Schema } from '../schema';
import {
  TerminalRefundQueryFilter,
  terminalRefundQueryFilterSchema,
} from './terminalRefundQueryFilter';
import {
  TerminalRefundQuerySort,
  terminalRefundQuerySortSchema,
} from './terminalRefundQuerySort';

export interface TerminalRefundQuery {
  filter?: TerminalRefundQueryFilter;
  sort?: TerminalRefundQuerySort;
}

export const terminalRefundQuerySchema: Schema<TerminalRefundQuery> = object({
  filter: ['filter', optional(lazy(() => terminalRefundQueryFilterSchema))],
  sort: ['sort', optional(lazy(() => terminalRefundQuerySortSchema))],
});
