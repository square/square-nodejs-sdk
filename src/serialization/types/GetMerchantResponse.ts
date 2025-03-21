/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { Error_ } from "./Error_";
import { Merchant } from "./Merchant";

export const GetMerchantResponse: core.serialization.ObjectSchema<
    serializers.GetMerchantResponse.Raw,
    Square.GetMerchantResponse
> = core.serialization.object({
    errors: core.serialization.list(Error_).optional(),
    merchant: Merchant.optional(),
});

export declare namespace GetMerchantResponse {
    export interface Raw {
        errors?: Error_.Raw[] | null;
        merchant?: Merchant.Raw | null;
    }
}
