/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const TimecardSortField: core.serialization.Schema<serializers.TimecardSortField.Raw, Square.TimecardSortField> =
    core.serialization.enum_(["START_AT", "END_AT", "CREATED_AT", "UPDATED_AT"]);

export declare namespace TimecardSortField {
    export type Raw = "START_AT" | "END_AT" | "CREATED_AT" | "UPDATED_AT";
}
