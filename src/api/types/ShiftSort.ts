/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Sets the sort order of search results.
 */
export interface ShiftSort {
    /**
     * The field to sort on.
     * See [ShiftSortField](#type-shiftsortfield) for possible values
     */
    field?: Square.ShiftSortField;
    /**
     * The order in which results are returned. Defaults to DESC.
     * See [SortOrder](#type-sortorder) for possible values
     */
    order?: Square.SortOrder;
}
