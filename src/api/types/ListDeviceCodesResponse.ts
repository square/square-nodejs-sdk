/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface ListDeviceCodesResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The queried DeviceCode. */
    deviceCodes?: Square.DeviceCode[];
    /**
     * A pagination cursor to retrieve the next set of results for your
     * original query to the endpoint. This value is present only if the request
     * succeeded and additional results are available.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
}
