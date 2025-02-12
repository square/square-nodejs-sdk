/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a Quick Amount in the Catalog.
 */
export interface CatalogQuickAmount {
    /**
     * Represents the type of the Quick Amount.
     * See [CatalogQuickAmountType](#type-catalogquickamounttype) for possible values
     */
    type: Square.CatalogQuickAmountType;
    /** Represents the actual amount of the Quick Amount with Money type. */
    amount: Square.Money;
    /**
     * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100].
     * MANUAL type amount will always have score = 100.
     */
    score?: bigint | null;
    /** The order in which this Quick Amount should be displayed. */
    ordinal?: bigint | null;
}
