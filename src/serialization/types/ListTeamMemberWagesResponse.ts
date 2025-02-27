/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TeamMemberWage } from "./TeamMemberWage";
import { Error_ } from "./Error_";

export const ListTeamMemberWagesResponse: core.serialization.ObjectSchema<
    serializers.ListTeamMemberWagesResponse.Raw,
    Square.ListTeamMemberWagesResponse
> = core.serialization.object({
    teamMemberWages: core.serialization.property(
        "team_member_wages",
        core.serialization.list(TeamMemberWage).optional(),
    ),
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace ListTeamMemberWagesResponse {
    export interface Raw {
        team_member_wages?: TeamMemberWage.Raw[] | null;
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
