/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CollectedData: core.serialization.ObjectSchema<serializers.CollectedData.Raw, Square.CollectedData> =
    core.serialization.object({
        inputText: core.serialization.property("input_text", core.serialization.string().optional()),
    });

export declare namespace CollectedData {
    export interface Raw {
        input_text?: string | null;
    }
}
