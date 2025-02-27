/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { InvoiceAttachment } from "./InvoiceAttachment";
import { Error_ } from "./Error_";

export const CreateInvoiceAttachmentResponse: core.serialization.ObjectSchema<
    serializers.CreateInvoiceAttachmentResponse.Raw,
    Square.CreateInvoiceAttachmentResponse
> = core.serialization.object({
    attachment: InvoiceAttachment.optional(),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace CreateInvoiceAttachmentResponse {
    export interface Raw {
        attachment?: InvoiceAttachment.Raw | null;
        errors?: Error_.Raw[] | null;
    }
}
