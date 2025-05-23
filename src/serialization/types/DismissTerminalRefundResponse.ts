/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { TerminalRefund } from "./TerminalRefund";

export const DismissTerminalRefundResponse: core.serialization.ObjectSchema<
    serializers.DismissTerminalRefundResponse.Raw,
    Square.DismissTerminalRefundResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    refund: TerminalRefund.optional(),
});

export declare namespace DismissTerminalRefundResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        refund?: TerminalRefund.Raw | null;
    }
}
