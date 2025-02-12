/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response from upserting order custom attribute definitions.
 */
export interface UpsertOrderCustomAttributeResponse {
    /** The order custom attribute that was created or modified. */
    customAttribute?: Square.CustomAttribute;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
