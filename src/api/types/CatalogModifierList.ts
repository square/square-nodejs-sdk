/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * A container for a list of modifiers, or a text-based modifier.
 * For text-based modifiers, this represents text configuration for an item. (For example, custom text to print on a t-shirt).
 * For non text-based modifiers, this represents a list of modifiers that can be applied to items at the time of sale.
 * (For example, a list of condiments for a hot dog, or a list of ice cream flavors).
 * Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER` type.
 */
export interface CatalogModifierList {
    /**
     * The name of the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of
     * Unicode code points.
     */
    name?: string | null;
    /** The position of this `CatalogModifierList` within a list of `CatalogModifierList` instances. */
    ordinal?: number | null;
    /**
     * __Deprecated__: Indicates whether a single (`SINGLE`) modifier or multiple (`MULTIPLE`) modifiers can be selected. Use
     * `min_selected_modifiers` and `max_selected_modifiers` instead.
     * See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values
     */
    selectionType?: Square.CatalogModifierListSelectionType;
    /**
     * A non-empty list of `CatalogModifier` objects to be included in the `CatalogModifierList`,
     * for non text-based modifiers when the `modifier_type` attribute is `LIST`. Each element of this list
     * is a `CatalogObject` instance of the `MODIFIER` type, containing the following attributes:
     * ```
     * {
     * "id": "{{catalog_modifier_id}}",
     * "type": "MODIFIER",
     * "modifier_data": {{a CatalogModifier instance>}}
     * }
     * ```
     */
    modifiers?: Square.CatalogObject[] | null;
    /**
     * The IDs of images associated with this `CatalogModifierList` instance.
     * Currently these images are not displayed on Square products, but may be displayed in 3rd-party applications.
     */
    imageIds?: string[] | null;
    /** When `true`, allows multiple quantities of the same modifier to be selected. */
    allowQuantities?: boolean | null;
    /** True if modifiers belonging to this list can be used conversationally. */
    isConversational?: boolean | null;
    /**
     * The type of the modifier.
     *
     * When this `modifier_type` value is `TEXT`,  the `CatalogModifierList` represents a text-based modifier.
     * When this `modifier_type` value is `LIST`, the `CatalogModifierList` contains a list of `CatalogModifier` objects.
     * See [CatalogModifierListModifierType](#type-catalogmodifierlistmodifiertype) for possible values
     */
    modifierType?: Square.CatalogModifierListModifierType;
    /**
     * The maximum length, in Unicode points, of the text string of the text-based modifier as represented by
     * this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
     */
    maxLength?: number | null;
    /**
     * Whether the text string must be a non-empty string (`true`) or not (`false`) for a text-based modifier
     * as represented by this `CatalogModifierList` object with the `modifier_type` set to `TEXT`.
     */
    textRequired?: boolean | null;
    /**
     * A note for internal use by the business.
     *
     * For example, for a text-based modifier applied to a T-shirt item, if the buyer-supplied text of "Hello, Kitty!"
     * is to be printed on the T-shirt, this `internal_name` attribute can be "Use italic face" as
     * an instruction for the business to follow.
     *
     * For non text-based modifiers, this `internal_name` attribute can be
     * used to include SKUs, internal codes, or supplemental descriptions for internal use.
     */
    internalName?: string | null;
    /**
     * The minimum number of modifiers that must be selected from this list. The value can be overridden with `CatalogItemModifierListInfo`.
     *
     * Values:
     *
     * - 0: No selection is required.
     * - -1: Default value, the attribute was not set by the client. Treated as no selection required.
     * - &gt;0: The required minimum modifier selections. This can be larger than the total `CatalogModifiers` when `allow_quantities` is enabled.
     * - &lt; -1: Invalid. Treated as no selection required.
     */
    minSelectedModifiers?: bigint | null;
    /**
     * The maximum number of modifiers that must be selected from this list. The value can be overridden with `CatalogItemModifierListInfo`.
     *
     * Values:
     *
     * - 0: No maximum limit.
     * - -1: Default value, the attribute was not set by the client. Treated as no maximum limit.
     * - &gt;0: The maximum total modifier selections. This can be larger than the total `CatalogModifiers` when `allow_quantities` is enabled.
     * - &lt; -1: Invalid. Treated as no maximum limit.
     */
    maxSelectedModifiers?: bigint | null;
    /**
     * If `true`, modifiers from this list are hidden from customer receipts. The default value is `false`.
     * This setting can be overridden with `CatalogItemModifierListInfo.hidden_from_customer_override`.
     */
    hiddenFromCustomer?: boolean | null;
}
