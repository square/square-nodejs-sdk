import { lazy, object, optional, Schema } from '../schema';
import {
  LoyaltyEventDateTimeFilter,
  loyaltyEventDateTimeFilterSchema,
} from './loyaltyEventDateTimeFilter';
import {
  LoyaltyEventLocationFilter,
  loyaltyEventLocationFilterSchema,
} from './loyaltyEventLocationFilter';
import {
  LoyaltyEventLoyaltyAccountFilter,
  loyaltyEventLoyaltyAccountFilterSchema,
} from './loyaltyEventLoyaltyAccountFilter';
import {
  LoyaltyEventOrderFilter,
  loyaltyEventOrderFilterSchema,
} from './loyaltyEventOrderFilter';
import {
  LoyaltyEventTypeFilter,
  loyaltyEventTypeFilterSchema,
} from './loyaltyEventTypeFilter';

/**
 * The filtering criteria. If the request specifies multiple filters,
 * the endpoint uses a logical AND to evaluate them.
 */
export interface LoyaltyEventFilter {
  /** Filter events by loyalty account. */
  loyaltyAccountFilter?: LoyaltyEventLoyaltyAccountFilter;
  /** Filter events by event type. */
  typeFilter?: LoyaltyEventTypeFilter;
  /** Filter events by date time range. */
  dateTimeFilter?: LoyaltyEventDateTimeFilter;
  /** Filter events by location. */
  locationFilter?: LoyaltyEventLocationFilter;
  /** Filter events by the order associated with the event. */
  orderFilter?: LoyaltyEventOrderFilter;
}

export const loyaltyEventFilterSchema: Schema<LoyaltyEventFilter> = object({
  loyaltyAccountFilter: [
    'loyalty_account_filter',
    optional(lazy(() => loyaltyEventLoyaltyAccountFilterSchema)),
  ],
  typeFilter: [
    'type_filter',
    optional(lazy(() => loyaltyEventTypeFilterSchema)),
  ],
  dateTimeFilter: [
    'date_time_filter',
    optional(lazy(() => loyaltyEventDateTimeFilterSchema)),
  ],
  locationFilter: [
    'location_filter',
    optional(lazy(() => loyaltyEventLocationFilterSchema)),
  ],
  orderFilter: [
    'order_filter',
    optional(lazy(() => loyaltyEventOrderFilterSchema)),
  ],
});
