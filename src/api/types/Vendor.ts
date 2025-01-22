/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

/**
 * Represents a supplier to a seller.
 */
export interface Vendor {
    /**
     * A unique Square-generated ID for the [Vendor](entity:Vendor).
     * This field is required when attempting to update a [Vendor](entity:Vendor).
     */
    id?: string;
    /**
     * An RFC 3339-formatted timestamp that indicates when the
     * [Vendor](entity:Vendor) was created.
     */
    createdAt?: string;
    /**
     * An RFC 3339-formatted timestamp that indicates when the
     * [Vendor](entity:Vendor) was last updated.
     */
    updatedAt?: string;
    /**
     * The name of the [Vendor](entity:Vendor).
     * This field is required when attempting to create or update a [Vendor](entity:Vendor).
     */
    name?: string | null;
    /** The address of the [Vendor](entity:Vendor). */
    address?: Square.Address;
    /** The contacts of the [Vendor](entity:Vendor). */
    contacts?: Square.VendorContact[] | null;
    /** The account number of the [Vendor](entity:Vendor). */
    accountNumber?: string | null;
    /** A note detailing information about the [Vendor](entity:Vendor). */
    note?: string | null;
    /** The version of the [Vendor](entity:Vendor). */
    version?: number;
    /**
     * The status of the [Vendor](entity:Vendor).
     * See [Status](#type-status) for possible values
     */
    status?: Square.VendorStatus;
}
