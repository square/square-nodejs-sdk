/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The response to a request for a set of `EmployeeWage` objects. The response contains
 * a set of `EmployeeWage` objects.
 */
export interface ListEmployeeWagesResponse {
    /** A page of `EmployeeWage` results. */
    employeeWages?: Square.EmployeeWage[];
    /**
     * The value supplied in the subsequent request to fetch the next page
     * of `EmployeeWage` results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
