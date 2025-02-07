/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CheckoutMerchantSettingsPaymentMethods } from "./CheckoutMerchantSettingsPaymentMethods";

export const CheckoutMerchantSettings: core.serialization.ObjectSchema<
    serializers.CheckoutMerchantSettings.Raw,
    Square.CheckoutMerchantSettings
> = core.serialization.object({
    paymentMethods: core.serialization.property("payment_methods", CheckoutMerchantSettingsPaymentMethods.optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace CheckoutMerchantSettings {
    export interface Raw {
        payment_methods?: CheckoutMerchantSettingsPaymentMethods.Raw | null;
        updated_at?: string | null;
    }
}
