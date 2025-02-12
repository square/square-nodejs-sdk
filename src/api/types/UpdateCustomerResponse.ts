/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateCustomer](api-endpoint:Customers-UpdateCustomer) or
 * [BulkUpdateCustomers](api-endpoint:Customers-BulkUpdateCustomers) endpoint.
 *
 * Either `errors` or `customer` is present in a given response (never both).
 */
export interface UpdateCustomerResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The updated customer. */
    customer?: Square.Customer;
}
