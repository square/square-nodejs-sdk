/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Defines the parameters for a `CreateDisputeEvidenceFile` request.
 */
export interface CreateDisputeEvidenceFileRequest {
    /** A unique key identifying the request. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
    idempotencyKey: string;
    /**
     * The type of evidence you are uploading.
     * See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     */
    evidenceType?: Square.DisputeEvidenceType;
    /**
     * The MIME type of the uploaded file.
     * The type can be image/heic, image/heif, image/jpeg, application/pdf, image/png, or image/tiff.
     */
    contentType?: string;
}
