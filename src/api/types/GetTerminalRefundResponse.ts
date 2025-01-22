/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface GetTerminalRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Square.Error_[];
    /** The requested `Refund`. */
    refund?: Square.TerminalRefund;
}
