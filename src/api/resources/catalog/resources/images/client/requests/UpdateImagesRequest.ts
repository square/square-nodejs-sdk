/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";
import * as fs from "fs";

/**
 * @example
 *     {
 *         imageId: "image_id"
 *     }
 */
export interface UpdateImagesRequest {
    /**
     * The ID of the `CatalogImage` object to update the encapsulated image file.
     */
    imageId: string;
    request?: Square.UpdateCatalogImageRequest;
    imageFile?: File | fs.ReadStream | Blob | undefined;
}
