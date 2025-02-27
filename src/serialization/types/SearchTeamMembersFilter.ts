/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TeamMemberStatus } from "./TeamMemberStatus";

export const SearchTeamMembersFilter: core.serialization.ObjectSchema<
    serializers.SearchTeamMembersFilter.Raw,
    Square.SearchTeamMembersFilter
> = core.serialization.object({
    locationIds: core.serialization.property(
        "location_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    status: TeamMemberStatus.optional(),
    isOwner: core.serialization.property("is_owner", core.serialization.boolean().optionalNullable()),
});

export declare namespace SearchTeamMembersFilter {
    export interface Raw {
        location_ids?: (string[] | null) | null;
        status?: TeamMemberStatus.Raw | null;
        is_owner?: (boolean | null) | null;
    }
}
