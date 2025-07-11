/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface BookingCreatedEventData {
    /** The type of the event data object. The value is `"booking"`. */
    type?: string | null;
    /** The ID of the event data object. */
    id?: string;
    /** An object containing the created booking. */
    object?: Square.BookingCreatedEventObject;
}
