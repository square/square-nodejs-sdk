/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { InvoicePaymentReminderStatus } from "./InvoicePaymentReminderStatus";

export const InvoicePaymentReminder: core.serialization.ObjectSchema<
    serializers.InvoicePaymentReminder.Raw,
    Square.InvoicePaymentReminder
> = core.serialization.object({
    uid: core.serialization.string().optional(),
    relativeScheduledDays: core.serialization.property(
        "relative_scheduled_days",
        core.serialization.number().optionalNullable(),
    ),
    message: core.serialization.string().optionalNullable(),
    status: InvoicePaymentReminderStatus.optional(),
    sentAt: core.serialization.property("sent_at", core.serialization.string().optional()),
});

export declare namespace InvoicePaymentReminder {
    export interface Raw {
        uid?: string | null;
        relative_scheduled_days?: (number | null) | null;
        message?: (string | null) | null;
        status?: InvoicePaymentReminderStatus.Raw | null;
        sent_at?: string | null;
    }
}
