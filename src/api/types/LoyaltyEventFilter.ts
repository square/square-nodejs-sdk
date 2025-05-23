/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The filtering criteria. If the request specifies multiple filters,
 * the endpoint uses a logical AND to evaluate them.
 */
export interface LoyaltyEventFilter {
    /** Filter events by loyalty account. */
    loyaltyAccountFilter?: Square.LoyaltyEventLoyaltyAccountFilter;
    /** Filter events by event type. */
    typeFilter?: Square.LoyaltyEventTypeFilter;
    /**
     * Filter events by date time range.
     * For each range, the start time is inclusive and the end time
     * is exclusive.
     */
    dateTimeFilter?: Square.LoyaltyEventDateTimeFilter;
    /** Filter events by location. */
    locationFilter?: Square.LoyaltyEventLocationFilter;
    /** Filter events by the order associated with the event. */
    orderFilter?: Square.LoyaltyEventOrderFilter;
}
