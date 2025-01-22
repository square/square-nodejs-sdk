/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * The response object returned by the [ListMerchant](api-endpoint:Merchants-ListMerchants) endpoint.
 */
export interface ListMerchantsResponse {
    /** Information on errors encountered during the request. */
    errors?: Square.Error_[];
    /** The requested `Merchant` entities. */
    merchant?: Square.Merchant[];
    /** If the  response is truncated, the cursor to use in next  request to fetch next set of objects. */
    cursor?: number;
}
