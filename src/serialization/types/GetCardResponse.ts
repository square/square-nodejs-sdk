/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Card } from "./Card";

export const GetCardResponse: core.serialization.ObjectSchema<serializers.GetCardResponse.Raw, Square.GetCardResponse> =
    core.serialization.object({
        errors: core.serialization.list(Error_).optional(),
        card: Card.optional(),
    });

export declare namespace GetCardResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        card?: Card.Raw | null;
    }
}
