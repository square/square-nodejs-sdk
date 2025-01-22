/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const InvoicePaymentReminderStatus: core.serialization.Schema<
    serializers.InvoicePaymentReminderStatus.Raw,
    Square.InvoicePaymentReminderStatus
> = core.serialization.enum_(["PENDING", "NOT_APPLICABLE", "SENT"]);

export declare namespace InvoicePaymentReminderStatus {
    export type Raw = "PENDING" | "NOT_APPLICABLE" | "SENT";
}
