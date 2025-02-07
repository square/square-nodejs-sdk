/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the fields that are included in the response body of
 * a request to the [RetrieveCustomerGroup](api-endpoint:CustomerGroups-RetrieveCustomerGroup) endpoint.
 *
 * Either `errors` or `group` is present in a given response (never both).
 */
export interface GetCustomerGroupResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The retrieved customer group. */
    group?: Square.CustomerGroup;
}
