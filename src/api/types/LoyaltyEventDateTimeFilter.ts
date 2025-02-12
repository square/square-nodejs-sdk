/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Filter events by date time range.
 */
export interface LoyaltyEventDateTimeFilter {
    /** The `created_at` date time range used to filter the result. */
    createdAt: Square.TimeRange;
}
