/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { TimeRange } from "./TimeRange";

export const TerminalRefundQueryFilter: core.serialization.ObjectSchema<
    serializers.TerminalRefundQueryFilter.Raw,
    Square.TerminalRefundQueryFilter
> = core.serialization.object({
    deviceId: core.serialization.property("device_id", core.serialization.string().optionalNullable()),
    createdAt: core.serialization.property("created_at", TimeRange.optional()),
    status: core.serialization.string().optionalNullable(),
});

export declare namespace TerminalRefundQueryFilter {
    export interface Raw {
        device_id?: (string | null) | null;
        created_at?: TimeRange.Raw | null;
        status?: (string | null) | null;
    }
}
