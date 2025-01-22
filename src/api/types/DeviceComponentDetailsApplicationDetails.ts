/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface DeviceComponentDetailsApplicationDetails {
    /**
     * The type of application.
     * See [ApplicationType](#type-applicationtype) for possible values
     */
    applicationType?: Square.ApplicationType;
    /** The version of the application. */
    version?: string;
    /** The location_id of the session for the application. */
    sessionLocation?: string | null;
    /** The id of the device code that was used to log in to the device. */
    deviceCodeId?: string | null;
}
