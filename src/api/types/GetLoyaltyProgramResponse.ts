/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A response that contains the loyalty program.
 */
export interface GetLoyaltyProgramResponse {
    /** Any errors that occurred during the request. */
    errors?: Square.Error_[];
    /** The loyalty program that was requested. */
    program?: Square.LoyaltyProgram;
}
