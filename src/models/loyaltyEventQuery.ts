import { lazy, object, optional, Schema } from '../schema';
import {
  LoyaltyEventFilter,
  loyaltyEventFilterSchema,
} from './loyaltyEventFilter';

/** Represents a query used to search for loyalty events. */
export interface LoyaltyEventQuery {
  /**
   * The filtering criteria. If the request specifies multiple filters,
   * the endpoint uses a logical AND to evaluate them.
   */
  filter?: LoyaltyEventFilter;
}

export const loyaltyEventQuerySchema: Schema<LoyaltyEventQuery> = object({
  filter: ['filter', optional(lazy(() => loyaltyEventFilterSchema))],
});
