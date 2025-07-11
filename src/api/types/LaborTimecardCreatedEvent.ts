/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Published when a worker starts a [Timecard](entity:Timecard).
 */
export interface LaborTimecardCreatedEvent {
    /** The ID of the target merchant associated with the event. */
    merchantId?: string | null;
    /** The type of event. For this event, the value is `labor.timecard.created`. */
    type?: string | null;
    /** The unique ID for the event. */
    eventId?: string | null;
    /** The timestamp of when the event was created, in RFC 3339 format. */
    createdAt?: string;
    /** The data associated with the event. */
    data?: Square.LaborTimecardCreatedEventData;
}
