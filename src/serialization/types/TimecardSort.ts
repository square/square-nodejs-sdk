/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TimecardSortField } from "./TimecardSortField";
import { SortOrder } from "./SortOrder";

export const TimecardSort: core.serialization.ObjectSchema<serializers.TimecardSort.Raw, Square.TimecardSort> =
    core.serialization.object({
        field: TimecardSortField.optional(),
        order: SortOrder.optional(),
    });

export declare namespace TimecardSort {
    export interface Raw {
        field?: TimecardSortField.Raw | null;
        order?: SortOrder.Raw | null;
    }
}
