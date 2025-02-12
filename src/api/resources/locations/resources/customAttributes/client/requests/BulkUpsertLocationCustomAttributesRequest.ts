/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../../../../../../index";

/**
 * @example
 *     {
 *         values: {
 *             "id1": {
 *                 locationId: "L0TBCBTB7P8RQ",
 *                 customAttribute: {
 *                     key: "bestseller",
 *                     value: "hot cocoa"
 *                 }
 *             },
 *             "id2": {
 *                 locationId: "L9XMD04V3STJX",
 *                 customAttribute: {
 *                     key: "bestseller",
 *                     value: "berry smoothie"
 *                 }
 *             },
 *             "id3": {
 *                 locationId: "L0TBCBTB7P8RQ",
 *                 customAttribute: {
 *                     key: "phone-number",
 *                     value: "+12223334444"
 *                 }
 *             }
 *         }
 *     }
 */
export interface BulkUpsertLocationCustomAttributesRequest {
    /**
     * A map containing 1 to 25 individual upsert requests. For each request, provide an
     * arbitrary ID that is unique for this `BulkUpsertLocationCustomAttributes` request and the
     * information needed to create or update a custom attribute.
     */
    values: Record<string, Square.BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>;
}
