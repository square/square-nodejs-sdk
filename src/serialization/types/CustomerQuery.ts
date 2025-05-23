/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomerFilter } from "./CustomerFilter";
import { CustomerSort } from "./CustomerSort";

export const CustomerQuery: core.serialization.ObjectSchema<serializers.CustomerQuery.Raw, Square.CustomerQuery> =
    core.serialization.object({
        filter: CustomerFilter.optional(),
        sort: CustomerSort.optional(),
    });

export declare namespace CustomerQuery {
    export interface Raw {
        filter?: CustomerFilter.Raw | null;
        sort?: CustomerSort.Raw | null;
    }
}
