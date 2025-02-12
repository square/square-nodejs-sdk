/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the fields that are included in the response body of
 * a request to the [CreateCard](api-endpoint:Cards-CreateCard) endpoint.
 *
 * Note: if there are errors processing the request, the card field will not be
 * present.
 */
export interface CreateCardResponse {
    /** Errors resulting from the request. */
    errors?: Square.Error_[];
    /** The card created by the request. */
    card?: Square.Card;
}
