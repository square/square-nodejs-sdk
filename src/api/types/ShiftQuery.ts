/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The parameters of a `Shift` search query, which includes filter and sort options.
 *
 * Deprecated at Square API version 2025-05-21. See the [migration notes](https://developer.squareup.com/docs/labor-api/what-it-does#migration-notes).
 */
export interface ShiftQuery {
    /** Query filter options. */
    filter?: Square.ShiftFilter;
    /** Sort order details. */
    sort?: Square.ShiftSort;
}
