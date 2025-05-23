/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a tax that applies to one or more line item in the order.
 *
 * Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount the item
 * contributes to the order subtotal.
 */
export interface OrderLineItemTax {
    /** A unique ID that identifies the tax only within this order. */
    uid?: string | null;
    /** The catalog object ID referencing [CatalogTax](entity:CatalogTax). */
    catalogObjectId?: string | null;
    /** The version of the catalog object that this tax references. */
    catalogVersion?: bigint | null;
    /** The tax's name. */
    name?: string | null;
    /**
     * Indicates the calculation method used to apply the tax.
     * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values
     */
    type?: Square.OrderLineItemTaxType;
    /**
     * The percentage of the tax, as a string representation of a decimal
     * number. For example, a value of `"7.25"` corresponds to a percentage of
     * 7.25%.
     */
    percentage?: string | null;
    /**
     * Application-defined data attached to this tax. Metadata fields are intended
     * to store descriptive references or associations with an entity in another system or store brief
     * information about the object. Square does not process this field; it only stores and returns it
     * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
     * identifiable information or card details).
     *
     * Keys written by applications must be 60 characters or less and must be in the character set
     * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
     * with a namespace, separated from the key with a ':' character.
     *
     * Values have a maximum length of 255 characters.
     *
     * An application can have up to 10 entries per metadata field.
     *
     * Entries written by applications are private and can only be read or modified by the same
     * application.
     *
     * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
     */
    metadata?: Record<string, (string | null) | undefined> | null;
    /**
     * The amount of money applied to the order by the tax.
     *
     * - For percentage-based taxes, `applied_money` is the money
     * calculated using the percentage.
     */
    appliedMoney?: Square.Money;
    /**
     * Indicates the level at which the tax applies. For `ORDER` scoped taxes,
     * Square generates references in `applied_taxes` on all order line items that do
     * not have them. For `LINE_ITEM` scoped taxes, the tax only applies to line items
     * with references in their `applied_taxes` field.
     *
     * This field is immutable. To change the scope, you must delete the tax and
     * re-add it as a new tax.
     * See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values
     */
    scope?: Square.OrderLineItemTaxScope;
    /**
     * Determines whether the tax was automatically applied to the order based on
     * the catalog configuration. For an example, see
     * [Automatically Apply Taxes to an Order](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes).
     */
    autoApplied?: boolean;
}
