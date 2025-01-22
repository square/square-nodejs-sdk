/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A query filter to search for buyer-accessible availabilities by.
 */
export interface SearchAvailabilityFilter {
    /**
     * The query expression to search for buy-accessible availabilities with their starting times falling within the specified time range.
     * The time range must be at least 24 hours and at most 32 days long.
     * For waitlist availabilities, the time range can be 0 or more up to 367 days long.
     */
    startAtRange: Square.TimeRange;
    /**
     * The query expression to search for buyer-accessible availabilities with their location IDs matching the specified location ID.
     * This query expression cannot be set if `booking_id` is set.
     */
    locationId?: string | null;
    /**
     * The query expression to search for buyer-accessible availabilities matching the specified list of segment filters.
     * If the size of the `segment_filters` list is `n`, the search returns availabilities with `n` segments per availability.
     *
     * This query expression cannot be set if `booking_id` is set.
     */
    segmentFilters?: Square.SegmentFilter[] | null;
    /**
     * The query expression to search for buyer-accessible availabilities for an existing booking by matching the specified `booking_id` value.
     * This is commonly used to reschedule an appointment.
     * If this expression is set, the `location_id` and `segment_filters` expressions cannot be set.
     */
    bookingId?: string | null;
}
