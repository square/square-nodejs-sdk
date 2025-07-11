/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface CardCreatedEventData {
    /** The type of the event data object. The value is `"card"`. */
    type?: string | null;
    /** The ID of the event data object. */
    id?: string;
    /** An object containing the created card. */
    object?: Square.CardCreatedEventObject;
}
