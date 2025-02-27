/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Payout } from "./Payout";
import { Error_ } from "./Error_";

export const GetPayoutResponse: core.serialization.ObjectSchema<
    serializers.GetPayoutResponse.Raw,
    Square.GetPayoutResponse
> = core.serialization.object({
    payout: Payout.optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace GetPayoutResponse {
    export interface Raw {
        payout?: Payout.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
