/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { Booking } from "../../../../types/Booking";

export const CreateBookingRequest: core.serialization.Schema<
    serializers.CreateBookingRequest.Raw,
    Square.CreateBookingRequest
> = core.serialization.object({
    idempotencyKey: core.serialization.property("idempotency_key", core.serialization.string().optional()),
    booking: Booking,
});

export declare namespace CreateBookingRequest {
    export interface Raw {
        idempotency_key?: string | null;
        booking: Booking.Raw;
    }
}
