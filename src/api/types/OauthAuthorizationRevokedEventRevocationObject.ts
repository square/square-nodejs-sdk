/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Square from "../index";

export interface OauthAuthorizationRevokedEventRevocationObject {
    /** Timestamp of when the revocation event occurred, in RFC 3339 format. */
    revokedAt?: string | null;
    /**
     * Type of client that performed the revocation, either APPLICATION, MERCHANT, or SQUARE.
     * See [OauthAuthorizationRevokedEventRevokerType](#type-oauthauthorizationrevokedeventrevokertype) for possible values
     */
    revokerType?: Square.OauthAuthorizationRevokedEventRevokerType;
}
