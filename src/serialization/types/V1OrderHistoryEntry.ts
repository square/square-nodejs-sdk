/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { V1OrderHistoryEntryAction } from "./V1OrderHistoryEntryAction";

export const V1OrderHistoryEntry: core.serialization.ObjectSchema<
    serializers.V1OrderHistoryEntry.Raw,
    Square.V1OrderHistoryEntry
> = core.serialization.object({
    action: V1OrderHistoryEntryAction.optional(),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
});

export declare namespace V1OrderHistoryEntry {
    export interface Raw {
        action?: V1OrderHistoryEntryAction.Raw | null;
        created_at?: string | null;
    }
}
