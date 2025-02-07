/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a response from a retrieve request containing a `TeamMember` object or error messages.
 */
export interface GetTeamMemberResponse {
    /** The successfully retrieved `TeamMember` object. */
    teamMember?: Square.TeamMember;
    /** The errors that occurred during the request. */
    errors?: Square.Error_[];
}
