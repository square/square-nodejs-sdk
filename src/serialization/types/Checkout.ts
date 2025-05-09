/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";
import { Order } from "./Order";
import { AdditionalRecipient } from "./AdditionalRecipient";

export const Checkout: core.serialization.ObjectSchema<serializers.Checkout.Raw, Square.Checkout> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        checkoutPageUrl: core.serialization.property(
            "checkout_page_url",
            core.serialization.string().optionalNullable(),
        ),
        askForShippingAddress: core.serialization.property(
            "ask_for_shipping_address",
            core.serialization.boolean().optionalNullable(),
        ),
        merchantSupportEmail: core.serialization.property(
            "merchant_support_email",
            core.serialization.string().optionalNullable(),
        ),
        prePopulateBuyerEmail: core.serialization.property(
            "pre_populate_buyer_email",
            core.serialization.string().optionalNullable(),
        ),
        prePopulateShippingAddress: core.serialization.property("pre_populate_shipping_address", Address.optional()),
        redirectUrl: core.serialization.property("redirect_url", core.serialization.string().optionalNullable()),
        order: Order.optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        additionalRecipients: core.serialization.property(
            "additional_recipients",
            core.serialization.list(AdditionalRecipient).optionalNullable(),
        ),
    });

export declare namespace Checkout {
    export interface Raw {
        id?: string | null;
        checkout_page_url?: (string | null) | null;
        ask_for_shipping_address?: (boolean | null) | null;
        merchant_support_email?: (string | null) | null;
        pre_populate_buyer_email?: (string | null) | null;
        pre_populate_shipping_address?: Address.Raw | null;
        redirect_url?: (string | null) | null;
        order?: Order.Raw | null;
        created_at?: string | null;
        additional_recipients?: (AdditionalRecipient.Raw[] | null) | null;
    }
}
