/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { ShiftQuery } from "../../../../../../types/ShiftQuery";

export const SearchShiftsRequest: core.serialization.Schema<
    serializers.labor.SearchShiftsRequest.Raw,
    Square.labor.SearchShiftsRequest
> = core.serialization.object({
    query: ShiftQuery.optional(),
    limit: core.serialization.number().optional(),
    cursor: core.serialization.string().optional(),
});

export declare namespace SearchShiftsRequest {
    export interface Raw {
        query?: ShiftQuery.Raw | null;
        limit?: number | null;
        cursor?: string | null;
    }
}
