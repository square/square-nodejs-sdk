/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response from a retrieve request containing the specified `WageSetting` object or error messages.
 */
export interface GetWageSettingResponse {
    /** The successfully retrieved `WageSetting` object. */
    wageSetting?: Square.WageSetting;
    /** The errors that occurred during the request. */
    errors?: Square.Error_[];
}
