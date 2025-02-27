/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Describes a `GetInvoice` response.
 */
export interface GetInvoiceResponse {
    /** The invoice requested. */
    invoice?: Square.Invoice;
    /** Information about errors encountered during the request. */
    errors?: Square.Error_[];
}
