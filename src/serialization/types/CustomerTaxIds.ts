/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";

export const CustomerTaxIds: core.serialization.ObjectSchema<serializers.CustomerTaxIds.Raw, Square.CustomerTaxIds> =
    core.serialization.object({
        euVat: core.serialization.property("eu_vat", core.serialization.string().optionalNullable()),
    });

export declare namespace CustomerTaxIds {
    export interface Raw {
        eu_vat?: (string | null) | null;
    }
}
