/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TeamMemberStatus: core.serialization.Schema<serializers.TeamMemberStatus.Raw, Square.TeamMemberStatus> =
    core.serialization.enum_(["ACTIVE", "INACTIVE"]);

export declare namespace TeamMemberStatus {
    export type Raw = "ACTIVE" | "INACTIVE";
}
