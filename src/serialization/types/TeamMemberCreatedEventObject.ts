/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TeamMember } from "./TeamMember";

export const TeamMemberCreatedEventObject: core.serialization.ObjectSchema<
    serializers.TeamMemberCreatedEventObject.Raw,
    Square.TeamMemberCreatedEventObject
> = core.serialization.object({
    teamMember: core.serialization.property("team_member", TeamMember.optional()),
});

export declare namespace TeamMemberCreatedEventObject {
    export interface Raw {
        team_member?: TeamMember.Raw | null;
    }
}
