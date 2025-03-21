/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { CashDrawerShiftSummary } from "./CashDrawerShiftSummary";

export const ListCashDrawerShiftsResponse: core.serialization.ObjectSchema<
    serializers.ListCashDrawerShiftsResponse.Raw,
    Square.ListCashDrawerShiftsResponse
> = core.serialization.object({
    cursor: core.serialization.string().optional(),
    errors: core.serialization.list(Error_).optional(),
    cashDrawerShifts: core.serialization.property(
        "cash_drawer_shifts",
        core.serialization.list(CashDrawerShiftSummary).optional(),
    ),
});

export declare namespace ListCashDrawerShiftsResponse {
    export interface Raw {
        cursor?: string | null;
        errors?: Error_.Raw[] | null;
        cash_drawer_shifts?: CashDrawerShiftSummary.Raw[] | null;
    }
}
