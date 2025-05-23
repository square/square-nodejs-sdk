/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Dispute } from "./Dispute";

export const SubmitEvidenceResponse: core.serialization.ObjectSchema<
    serializers.SubmitEvidenceResponse.Raw,
    Square.SubmitEvidenceResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    dispute: Dispute.optional(),
});

export declare namespace SubmitEvidenceResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        dispute?: Dispute.Raw | null;
    }
}
