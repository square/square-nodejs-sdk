/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const BookingBookingSource: core.serialization.Schema<
    serializers.BookingBookingSource.Raw,
    Square.BookingBookingSource
> = core.serialization.enum_(["FIRST_PARTY_MERCHANT", "FIRST_PARTY_BUYER", "THIRD_PARTY_BUYER", "API"]);

export declare namespace BookingBookingSource {
    export type Raw = "FIRST_PARTY_MERCHANT" | "FIRST_PARTY_BUYER" | "THIRD_PARTY_BUYER" | "API";
}
