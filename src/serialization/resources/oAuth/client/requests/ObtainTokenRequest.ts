/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Square from "../../../../../api/index";
import * as core from "../../../../../core";

export const ObtainTokenRequest: core.serialization.Schema<
    serializers.ObtainTokenRequest.Raw,
    Square.ObtainTokenRequest
> = core.serialization.object({
    clientId: core.serialization.property("client_id", core.serialization.string()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string().optionalNullable()),
    code: core.serialization.string().optionalNullable(),
    redirectUri: core.serialization.property("redirect_uri", core.serialization.string().optionalNullable()),
    grantType: core.serialization.property("grant_type", core.serialization.string()),
    refreshToken: core.serialization.property("refresh_token", core.serialization.string().optionalNullable()),
    migrationToken: core.serialization.property("migration_token", core.serialization.string().optionalNullable()),
    scopes: core.serialization.list(core.serialization.string()).optionalNullable(),
    shortLived: core.serialization.property("short_lived", core.serialization.boolean().optionalNullable()),
    codeVerifier: core.serialization.property("code_verifier", core.serialization.string().optionalNullable()),
});

export declare namespace ObtainTokenRequest {
    export interface Raw {
        client_id: string;
        client_secret?: (string | null) | null;
        code?: (string | null) | null;
        redirect_uri?: (string | null) | null;
        grant_type: string;
        refresh_token?: (string | null) | null;
        migration_token?: (string | null) | null;
        scopes?: (string[] | null) | null;
        short_lived?: (boolean | null) | null;
        code_verifier?: (string | null) | null;
    }
}
