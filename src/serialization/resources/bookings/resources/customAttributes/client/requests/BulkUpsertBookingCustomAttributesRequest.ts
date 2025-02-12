/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { BookingCustomAttributeUpsertRequest } from "../../../../../../types/BookingCustomAttributeUpsertRequest";

export const BulkUpsertBookingCustomAttributesRequest: core.serialization.Schema<
    serializers.bookings.BulkUpsertBookingCustomAttributesRequest.Raw,
    Square.bookings.BulkUpsertBookingCustomAttributesRequest
> = core.serialization.object({
    values: core.serialization.record(core.serialization.string(), BookingCustomAttributeUpsertRequest),
});

export declare namespace BulkUpsertBookingCustomAttributesRequest {
    export interface Raw {
        values: Record<string, BookingCustomAttributeUpsertRequest.Raw>;
    }
}
