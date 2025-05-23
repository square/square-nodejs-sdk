/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface GetOrderResponse {
    /** The requested order. */
    order?: Square.Order;
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
}
