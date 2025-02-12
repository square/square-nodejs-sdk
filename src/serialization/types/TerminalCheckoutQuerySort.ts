/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { SortOrder } from "./SortOrder";

export const TerminalCheckoutQuerySort: core.serialization.ObjectSchema<
    serializers.TerminalCheckoutQuerySort.Raw,
    Square.TerminalCheckoutQuerySort
> = core.serialization.object({
    sortOrder: core.serialization.property("sort_order", SortOrder.optional()),
});

export declare namespace TerminalCheckoutQuerySort {
    export interface Raw {
        sort_order?: SortOrder.Raw | null;
    }
}
