/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface InvoiceCreatedEventData {
    /** Name of the affected object’s type, `"invoice"`. */
    type?: string | null;
    /** ID of the affected invoice. */
    id?: string;
    /** An object containing the created invoice. */
    object?: Square.InvoiceCreatedEventObject;
}
