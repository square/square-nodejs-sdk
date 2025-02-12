/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         customerIds: ["8DDA5NZVBZFGAX0V3HPF81HHE0", "N18CPRVXR5214XPBBA6BZQWF3C", "2GYD7WNXF7BJZW1PMGNXZ3Y8M8"]
 *     }
 */
export interface BulkDeleteCustomersRequest {
    /** The IDs of the [customer profiles](entity:Customer) to delete. */
    customerIds: string[];
}
