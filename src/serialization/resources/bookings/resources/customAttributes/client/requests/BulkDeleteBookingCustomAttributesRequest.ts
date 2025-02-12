/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Square from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { BookingCustomAttributeDeleteRequest } from "../../../../../../types/BookingCustomAttributeDeleteRequest";

export const BulkDeleteBookingCustomAttributesRequest: core.serialization.Schema<
    serializers.bookings.BulkDeleteBookingCustomAttributesRequest.Raw,
    Square.bookings.BulkDeleteBookingCustomAttributesRequest
> = core.serialization.object({
    values: core.serialization.record(core.serialization.string(), BookingCustomAttributeDeleteRequest),
});

export declare namespace BulkDeleteBookingCustomAttributesRequest {
    export interface Raw {
        values: Record<string, BookingCustomAttributeDeleteRequest.Raw>;
    }
}
