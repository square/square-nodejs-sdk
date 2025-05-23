/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CustomerTextFilter } from "./CustomerTextFilter";
import { FilterValue } from "./FilterValue";
import { TimeRange } from "./TimeRange";
import { FloatNumberRange } from "./FloatNumberRange";
import { CustomerAddressFilter } from "./CustomerAddressFilter";

export const CustomerCustomAttributeFilterValue: core.serialization.ObjectSchema<
    serializers.CustomerCustomAttributeFilterValue.Raw,
    Square.CustomerCustomAttributeFilterValue
> = core.serialization.object({
    email: CustomerTextFilter.optional(),
    phone: CustomerTextFilter.optional(),
    text: CustomerTextFilter.optional(),
    selection: FilterValue.optional(),
    date: TimeRange.optional(),
    number: FloatNumberRange.optional(),
    boolean: core.serialization.boolean().optionalNullable(),
    address: CustomerAddressFilter.optional(),
});

export declare namespace CustomerCustomAttributeFilterValue {
    export interface Raw {
        email?: CustomerTextFilter.Raw | null;
        phone?: CustomerTextFilter.Raw | null;
        text?: CustomerTextFilter.Raw | null;
        selection?: FilterValue.Raw | null;
        date?: TimeRange.Raw | null;
        number?: FloatNumberRange.Raw | null;
        boolean?: (boolean | null) | null;
        address?: CustomerAddressFilter.Raw | null;
    }
}
