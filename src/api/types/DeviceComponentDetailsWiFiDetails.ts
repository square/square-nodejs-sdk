/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface DeviceComponentDetailsWiFiDetails {
    /** A boolean to represent whether the WiFI interface is currently active. */
    active?: boolean | null;
    /** The name of the connected WIFI network. */
    ssid?: string | null;
    /** The string representation of the device’s IPv4 address. */
    ipAddressV4?: string | null;
    /**
     * The security protocol for a secure connection (e.g. WPA2). None provided if the connection
     * is unsecured.
     */
    secureConnection?: string | null;
    /** A representation of signal strength of the WIFI network connection. */
    signalStrength?: Square.DeviceComponentDetailsMeasurement;
}
