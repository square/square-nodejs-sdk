/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const SearchEventsSortField: core.serialization.Schema<
    serializers.SearchEventsSortField.Raw,
    Square.SearchEventsSortField
> = core.serialization.stringLiteral("DEFAULT");

export declare namespace SearchEventsSortField {
    export type Raw = "DEFAULT";
}
