/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { ProductType } from "./ProductType";
import { DeviceCodeStatus } from "./DeviceCodeStatus";

export const DeviceCode: core.serialization.ObjectSchema<serializers.DeviceCode.Raw, Square.DeviceCode> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        name: core.serialization.string().optionalNullable(),
        code: core.serialization.string().optional(),
        deviceId: core.serialization.property("device_id", core.serialization.string().optional()),
        productType: core.serialization.property("product_type", ProductType),
        locationId: core.serialization.property("location_id", core.serialization.string().optionalNullable()),
        status: DeviceCodeStatus.optional(),
        pairBy: core.serialization.property("pair_by", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        statusChangedAt: core.serialization.property("status_changed_at", core.serialization.string().optional()),
        pairedAt: core.serialization.property("paired_at", core.serialization.string().optional()),
    });

export declare namespace DeviceCode {
    export interface Raw {
        id?: string | null;
        name?: (string | null) | null;
        code?: string | null;
        device_id?: string | null;
        product_type: ProductType.Raw;
        location_id?: (string | null) | null;
        status?: DeviceCodeStatus.Raw | null;
        pair_by?: string | null;
        created_at?: string | null;
        status_changed_at?: string | null;
        paired_at?: string | null;
    }
}
