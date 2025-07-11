/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface CustomAttributeEventData {
    /** The type of the event data object. The value is `"custom_attribute"`. */
    type?: string | null;
    /** The ID of the event data object. */
    id?: string;
    /** An object containing the custom attribute. */
    object?: Square.CustomAttributeEventDataObject;
}
