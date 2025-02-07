/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const BookingCustomAttributeDeleteRequest: core.serialization.ObjectSchema<
    serializers.BookingCustomAttributeDeleteRequest.Raw,
    Square.BookingCustomAttributeDeleteRequest
> = core.serialization.object({
    bookingId: core.serialization.property("booking_id", core.serialization.string()),
    key: core.serialization.string(),
});

export declare namespace BookingCustomAttributeDeleteRequest {
    export interface Raw {
        booking_id: string;
        key: string;
    }
}
