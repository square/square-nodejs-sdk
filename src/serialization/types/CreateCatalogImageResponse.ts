/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const CreateCatalogImageResponse: core.serialization.ObjectSchema<
    serializers.CreateCatalogImageResponse.Raw,
    Square.CreateCatalogImageResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    image: core.serialization.lazy(() => serializers.CatalogObject).optional(),
});

export declare namespace CreateCatalogImageResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        image?: serializers.CatalogObject.Raw | null;
    }
}
