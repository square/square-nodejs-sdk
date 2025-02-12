/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { CustomerGroup } from "./CustomerGroup";

export const UpdateCustomerGroupResponse: core.serialization.ObjectSchema<
    serializers.UpdateCustomerGroupResponse.Raw,
    Square.UpdateCustomerGroupResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    group: CustomerGroup.optional(),
});

export declare namespace UpdateCustomerGroupResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        group?: CustomerGroup.Raw | null;
    }
}
