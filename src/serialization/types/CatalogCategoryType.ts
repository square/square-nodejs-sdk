/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogCategoryType: core.serialization.Schema<
    serializers.CatalogCategoryType.Raw,
    Square.CatalogCategoryType
> = core.serialization.enum_(["REGULAR_CATEGORY", "MENU_CATEGORY", "KITCHEN_CATEGORY"]);

export declare namespace CatalogCategoryType {
    export type Raw = "REGULAR_CATEGORY" | "MENU_CATEGORY" | "KITCHEN_CATEGORY";
}
