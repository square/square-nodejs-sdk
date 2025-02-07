/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const Coordinates: core.serialization.ObjectSchema<serializers.Coordinates.Raw, Square.Coordinates> =
    core.serialization.object({
        latitude: core.serialization.number().optionalNullable(),
        longitude: core.serialization.number().optionalNullable(),
    });

export declare namespace Coordinates {
    export interface Raw {
        latitude?: (number | null) | null;
        longitude?: (number | null) | null;
    }
}
