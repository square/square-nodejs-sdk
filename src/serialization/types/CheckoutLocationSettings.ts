/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CheckoutLocationSettingsPolicy } from "./CheckoutLocationSettingsPolicy";
import { CheckoutLocationSettingsBranding } from "./CheckoutLocationSettingsBranding";
import { CheckoutLocationSettingsTipping } from "./CheckoutLocationSettingsTipping";
import { CheckoutLocationSettingsCoupons } from "./CheckoutLocationSettingsCoupons";

export const CheckoutLocationSettings: core.serialization.ObjectSchema<
    serializers.CheckoutLocationSettings.Raw,
    Square.CheckoutLocationSettings
> = core.serialization.object({
    locationId: core.serialization.property("location_id", core.serialization.string().optionalNullable()),
    customerNotesEnabled: core.serialization.property(
        "customer_notes_enabled",
        core.serialization.boolean().optionalNullable(),
    ),
    policies: core.serialization.list(CheckoutLocationSettingsPolicy).optionalNullable(),
    branding: CheckoutLocationSettingsBranding.optional(),
    tipping: CheckoutLocationSettingsTipping.optional(),
    coupons: CheckoutLocationSettingsCoupons.optional(),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace CheckoutLocationSettings {
    export interface Raw {
        location_id?: (string | null) | null;
        customer_notes_enabled?: (boolean | null) | null;
        policies?: (CheckoutLocationSettingsPolicy.Raw[] | null) | null;
        branding?: CheckoutLocationSettingsBranding.Raw | null;
        tipping?: CheckoutLocationSettingsTipping.Raw | null;
        coupons?: CheckoutLocationSettingsCoupons.Raw | null;
        updated_at?: string | null;
    }
}
