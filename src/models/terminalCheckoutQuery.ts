import { lazy, object, optional, Schema } from '../schema';
import {
  TerminalCheckoutQueryFilter,
  terminalCheckoutQueryFilterSchema,
} from './terminalCheckoutQueryFilter';
import {
  TerminalCheckoutQuerySort,
  terminalCheckoutQuerySortSchema,
} from './terminalCheckoutQuerySort';

export interface TerminalCheckoutQuery {
  filter?: TerminalCheckoutQueryFilter;
  sort?: TerminalCheckoutQuerySort;
}

export const terminalCheckoutQuerySchema: Schema<TerminalCheckoutQuery> = object(
  {
    filter: ['filter', optional(lazy(() => terminalCheckoutQueryFilterSchema))],
    sort: ['sort', optional(lazy(() => terminalCheckoutQuerySortSchema))],
  }
);
