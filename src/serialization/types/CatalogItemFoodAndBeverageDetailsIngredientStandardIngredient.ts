/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient: core.serialization.Schema<
    serializers.CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient.Raw,
    Square.CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient
> = core.serialization.enum_([
    "CELERY",
    "CRUSTACEANS",
    "EGGS",
    "FISH",
    "GLUTEN",
    "LUPIN",
    "MILK",
    "MOLLUSCS",
    "MUSTARD",
    "PEANUTS",
    "SESAME",
    "SOY",
    "SULPHITES",
    "TREE_NUTS",
]);

export declare namespace CatalogItemFoodAndBeverageDetailsIngredientStandardIngredient {
    export type Raw =
        | "CELERY"
        | "CRUSTACEANS"
        | "EGGS"
        | "FISH"
        | "GLUTEN"
        | "LUPIN"
        | "MILK"
        | "MOLLUSCS"
        | "MUSTARD"
        | "PEANUTS"
        | "SESAME"
        | "SOY"
        | "SULPHITES"
        | "TREE_NUTS";
}
