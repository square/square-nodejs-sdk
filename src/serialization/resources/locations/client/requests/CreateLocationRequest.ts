/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Location } from "../../../../types/Location";

export const CreateLocationRequest: core.serialization.Schema<
    serializers.CreateLocationRequest.Raw,
    Square.CreateLocationRequest
> = core.serialization.object({
    location: Location.optional(),
});

export declare namespace CreateLocationRequest {
    export interface Raw {
        location?: Location.Raw | null;
    }
}
