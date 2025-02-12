/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CustomerSortField: core.serialization.Schema<serializers.CustomerSortField.Raw, Square.CustomerSortField> =
    core.serialization.enum_(["DEFAULT", "CREATED_AT"]);

export declare namespace CustomerSortField {
    export type Raw = "DEFAULT" | "CREATED_AT";
}
