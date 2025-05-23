/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface SearchAvailabilityResponse {
    /** List of appointment slots available for booking. */
    availabilities?: Square.Availability[];
    /** Errors that occurred during the request. */
    errors?: Square.Error_[];
}
