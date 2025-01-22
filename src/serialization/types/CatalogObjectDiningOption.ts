/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogObjectBase } from "./CatalogObjectBase";

export const CatalogObjectDiningOption: core.serialization.ObjectSchema<
    serializers.CatalogObjectDiningOption.Raw,
    Square.CatalogObjectDiningOption
> = core.serialization.object({}).extend(CatalogObjectBase);

export declare namespace CatalogObjectDiningOption {
    export interface Raw extends CatalogObjectBase.Raw {}
}
