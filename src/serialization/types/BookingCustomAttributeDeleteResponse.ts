/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";

export const BookingCustomAttributeDeleteResponse: core.serialization.ObjectSchema<
    serializers.BookingCustomAttributeDeleteResponse.Raw,
    Square.BookingCustomAttributeDeleteResponse
> = core.serialization.object({
    bookingId: core.serialization.property("booking_id", core.serialization.string().optional()),
    errors: core.serialization.list(Error_).optional(),
});

export declare namespace BookingCustomAttributeDeleteResponse {
    export interface Raw {
        booking_id?: string | null;
        errors?: Error_.Raw[] | null;
    }
}
