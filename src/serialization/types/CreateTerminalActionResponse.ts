/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { TerminalAction } from "./TerminalAction";

export const CreateTerminalActionResponse: core.serialization.ObjectSchema<
    serializers.CreateTerminalActionResponse.Raw,
    Square.CreateTerminalActionResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    action: TerminalAction.optional(),
});

export declare namespace CreateTerminalActionResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        action?: TerminalAction.Raw | null;
    }
}
