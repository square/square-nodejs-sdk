/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low.
 */
export type InventoryAlertType = "NONE" | "LOW_QUANTITY";
export const InventoryAlertType = {
    None: "NONE",
    LowQuantity: "LOW_QUANTITY",
} as const;
