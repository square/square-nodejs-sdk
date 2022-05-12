import { lazy, object, optional, Schema } from '../schema';
import {
  TerminalActionQueryFilter,
  terminalActionQueryFilterSchema,
} from './terminalActionQueryFilter';
import {
  TerminalActionQuerySort,
  terminalActionQuerySortSchema,
} from './terminalActionQuerySort';

export interface TerminalActionQuery {
  filter?: TerminalActionQueryFilter;
  sort?: TerminalActionQuerySort;
}

export const terminalActionQuerySchema: Schema<TerminalActionQuery> = object({
  filter: ['filter', optional(lazy(() => terminalActionQueryFilterSchema))],
  sort: ['sort', optional(lazy(() => terminalActionQuerySortSchema))],
});
