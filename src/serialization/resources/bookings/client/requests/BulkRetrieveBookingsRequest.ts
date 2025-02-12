/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";

export const BulkRetrieveBookingsRequest: core.serialization.Schema<
    serializers.BulkRetrieveBookingsRequest.Raw,
    Square.BulkRetrieveBookingsRequest
> = core.serialization.object({
    bookingIds: core.serialization.property("booking_ids", core.serialization.list(core.serialization.string())),
});

export declare namespace BulkRetrieveBookingsRequest {
    export interface Raw {
        booking_ids: string[];
    }
}
