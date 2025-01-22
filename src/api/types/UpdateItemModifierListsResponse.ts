/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface UpdateItemModifierListsResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The database [timestamp](https://developer.squareup.com/docs/build-basics/common-data-types/working-with-dates) of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. */
    updatedAt?: string;
}
