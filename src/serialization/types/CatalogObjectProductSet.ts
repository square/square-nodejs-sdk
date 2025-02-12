/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogProductSet } from "./CatalogProductSet";
import { CatalogObjectBase } from "./CatalogObjectBase";

export const CatalogObjectProductSet: core.serialization.ObjectSchema<
    serializers.CatalogObjectProductSet.Raw,
    Square.CatalogObjectProductSet
> = core.serialization
    .object({
        productSetData: core.serialization.property("product_set_data", CatalogProductSet.optional()),
    })
    .extend(CatalogObjectBase);

export declare namespace CatalogObjectProductSet {
    export interface Raw extends CatalogObjectBase.Raw {
        product_set_data?: CatalogProductSet.Raw | null;
    }
}
