/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TeamMemberBookingProfile } from "./TeamMemberBookingProfile";
import { Error_ } from "./Error_";

export const ListTeamMemberBookingProfilesResponse: core.serialization.ObjectSchema<
    serializers.ListTeamMemberBookingProfilesResponse.Raw,
    Square.ListTeamMemberBookingProfilesResponse
> = core.serialization.object({
    teamMemberBookingProfiles: core.serialization.property(
        "team_member_booking_profiles",
        core.serialization.list(TeamMemberBookingProfile).optional(),
    ),
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace ListTeamMemberBookingProfilesResponse {
    export interface Raw {
        team_member_booking_profiles?: TeamMemberBookingProfile.Raw[] | null;
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
