/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { ErrorCategory } from "./ErrorCategory";
import { ErrorCode } from "./ErrorCode";

export const Error_: core.serialization.ObjectSchema<serializers.Error_.Raw, Square.Error_> = core.serialization.object(
    {
        category: ErrorCategory,
        code: ErrorCode,
        detail: core.serialization.string().optional(),
        field: core.serialization.string().optional(),
    },
);

export declare namespace Error_ {
    export interface Raw {
        category: ErrorCategory.Raw;
        code: ErrorCode.Raw;
        detail?: string | null;
        field?: string | null;
    }
}
