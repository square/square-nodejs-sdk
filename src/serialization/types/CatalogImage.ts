/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CatalogImage: core.serialization.ObjectSchema<serializers.CatalogImage.Raw, Square.CatalogImage> =
    core.serialization.object({
        name: core.serialization.string().optionalNullable(),
        url: core.serialization.string().optionalNullable(),
        caption: core.serialization.string().optionalNullable(),
        photoStudioOrderId: core.serialization.property(
            "photo_studio_order_id",
            core.serialization.string().optionalNullable(),
        ),
    });

export declare namespace CatalogImage {
    export interface Raw {
        name?: (string | null) | null;
        url?: (string | null) | null;
        caption?: (string | null) | null;
        photo_studio_order_id?: (string | null) | null;
    }
}
