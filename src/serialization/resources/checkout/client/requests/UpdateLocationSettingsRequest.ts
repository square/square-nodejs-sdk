/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";
import { CheckoutLocationSettings } from "../../../../types/CheckoutLocationSettings";

export const UpdateLocationSettingsRequest: core.serialization.Schema<
    serializers.UpdateLocationSettingsRequest.Raw,
    Omit<Square.UpdateLocationSettingsRequest, "locationId">
> = core.serialization.object({
    locationSettings: core.serialization.property("location_settings", CheckoutLocationSettings),
});

export declare namespace UpdateLocationSettingsRequest {
    export interface Raw {
        location_settings: CheckoutLocationSettings.Raw;
    }
}
