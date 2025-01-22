/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Square from "../../api/index";
import * as core from "../../core";
import { CatalogPricingType } from "./CatalogPricingType";
import { Money } from "./Money";
import { ItemVariationLocationOverrides } from "./ItemVariationLocationOverrides";
import { InventoryAlertType } from "./InventoryAlertType";
import { CatalogItemOptionValueForItemVariation } from "./CatalogItemOptionValueForItemVariation";
import { CatalogStockConversion } from "./CatalogStockConversion";

export const CatalogItemVariation: core.serialization.ObjectSchema<
    serializers.CatalogItemVariation.Raw,
    Square.CatalogItemVariation
> = core.serialization.object({
    itemId: core.serialization.property("item_id", core.serialization.string().optionalNullable()),
    name: core.serialization.string().optionalNullable(),
    sku: core.serialization.string().optionalNullable(),
    upc: core.serialization.string().optionalNullable(),
    ordinal: core.serialization.number().optional(),
    pricingType: core.serialization.property("pricing_type", CatalogPricingType.optional()),
    priceMoney: core.serialization.property("price_money", Money.optional()),
    locationOverrides: core.serialization.property(
        "location_overrides",
        core.serialization.list(ItemVariationLocationOverrides).optionalNullable(),
    ),
    trackInventory: core.serialization.property("track_inventory", core.serialization.boolean().optionalNullable()),
    inventoryAlertType: core.serialization.property("inventory_alert_type", InventoryAlertType.optional()),
    inventoryAlertThreshold: core.serialization.property(
        "inventory_alert_threshold",
        core.serialization.bigint().optionalNullable(),
    ),
    userData: core.serialization.property("user_data", core.serialization.string().optionalNullable()),
    serviceDuration: core.serialization.property("service_duration", core.serialization.bigint().optionalNullable()),
    availableForBooking: core.serialization.property(
        "available_for_booking",
        core.serialization.boolean().optionalNullable(),
    ),
    itemOptionValues: core.serialization.property(
        "item_option_values",
        core.serialization.list(CatalogItemOptionValueForItemVariation).optionalNullable(),
    ),
    measurementUnitId: core.serialization.property(
        "measurement_unit_id",
        core.serialization.string().optionalNullable(),
    ),
    sellable: core.serialization.boolean().optionalNullable(),
    stockable: core.serialization.boolean().optionalNullable(),
    imageIds: core.serialization.property(
        "image_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    teamMemberIds: core.serialization.property(
        "team_member_ids",
        core.serialization.list(core.serialization.string()).optionalNullable(),
    ),
    stockableConversion: core.serialization.property("stockable_conversion", CatalogStockConversion.optional()),
});

export declare namespace CatalogItemVariation {
    export interface Raw {
        item_id?: (string | null) | null;
        name?: (string | null) | null;
        sku?: (string | null) | null;
        upc?: (string | null) | null;
        ordinal?: number | null;
        pricing_type?: CatalogPricingType.Raw | null;
        price_money?: Money.Raw | null;
        location_overrides?: (ItemVariationLocationOverrides.Raw[] | null) | null;
        track_inventory?: (boolean | null) | null;
        inventory_alert_type?: InventoryAlertType.Raw | null;
        inventory_alert_threshold?: ((bigint | number) | null) | null;
        user_data?: (string | null) | null;
        service_duration?: ((bigint | number) | null) | null;
        available_for_booking?: (boolean | null) | null;
        item_option_values?: (CatalogItemOptionValueForItemVariation.Raw[] | null) | null;
        measurement_unit_id?: (string | null) | null;
        sellable?: (boolean | null) | null;
        stockable?: (boolean | null) | null;
        image_ids?: (string[] | null) | null;
        team_member_ids?: (string[] | null) | null;
        stockable_conversion?: CatalogStockConversion.Raw | null;
    }
}
