/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace OAuth {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-02-20";
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Square-Version header */
        version?: "2025-02-20";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class OAuth {
    constructor(protected readonly _options: OAuth.Options = {}) {}

    /**
     * Revokes an access token generated with the OAuth flow.
     *
     * If an account has more than one OAuth access token for your application, this
     * endpoint revokes all of them, regardless of which token you specify.
     *
     * __Important:__ The `Authorization` header for this endpoint must have the
     * following format:
     *
     * ```
     * Authorization: Client APPLICATION_SECRET
     * ```
     *
     * Replace `APPLICATION_SECRET` with the application secret on the **OAuth**
     * page for your application in the Developer Dashboard.
     *
     * @param {Square.RevokeTokenRequest} request
     * @param {OAuth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.oAuth.revokeToken({
     *         clientId: "CLIENT_ID",
     *         accessToken: "ACCESS_TOKEN"
     *     })
     */
    public async revokeToken(
        request: Square.RevokeTokenRequest = {},
        requestOptions?: OAuth.RequestOptions,
    ): Promise<Square.RevokeTokenResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "oauth2/revoke",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RevokeTokenRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RevokeTokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /oauth2/revoke.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns an OAuth access token and a refresh token unless the
     * `short_lived` parameter is set to `true`, in which case the endpoint
     * returns only an access token.
     *
     * The `grant_type` parameter specifies the type of OAuth request. If
     * `grant_type` is `authorization_code`, you must include the authorization
     * code you received when a seller granted you authorization. If `grant_type`
     * is `refresh_token`, you must provide a valid refresh token. If you're using
     * an old version of the Square APIs (prior to March 13, 2019), `grant_type`
     * can be `migration_token` and you must provide a valid migration token.
     *
     * You can use the `scopes` parameter to limit the set of permissions granted
     * to the access token and refresh token. You can use the `short_lived` parameter
     * to create an access token that expires in 24 hours.
     *
     * __Note:__ OAuth tokens should be encrypted and stored on a secure server.
     * Application clients should never interact directly with OAuth tokens.
     *
     * @param {Square.ObtainTokenRequest} request
     * @param {OAuth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.oAuth.obtainToken({
     *         clientId: "APPLICATION_ID",
     *         clientSecret: "APPLICATION_SECRET",
     *         code: "CODE_FROM_AUTHORIZE",
     *         grantType: "authorization_code"
     *     })
     */
    public async obtainToken(
        request: Square.ObtainTokenRequest,
        requestOptions?: OAuth.RequestOptions,
    ): Promise<Square.ObtainTokenResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "oauth2/token",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.ObtainTokenRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ObtainTokenResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /oauth2/token.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns information about an [OAuth access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-an-oauth-access-token) or an application’s [personal access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).
     *
     * Add the access token to the Authorization header of the request.
     *
     * __Important:__ The `Authorization` header you provide to this endpoint must have the following format:
     *
     * ```
     * Authorization: Bearer ACCESS_TOKEN
     * ```
     *
     * where `ACCESS_TOKEN` is a
     * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).
     *
     * If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED` error.
     *
     * @param {OAuth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.oAuth.retrieveTokenStatus()
     */
    public async retrieveTokenStatus(
        requestOptions?: OAuth.RequestOptions,
    ): Promise<Square.RetrieveTokenStatusResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "oauth2/token/status",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RetrieveTokenStatusResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /oauth2/token/status.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {OAuth.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.oAuth.authorize()
     */
    public async authorize(requestOptions?: OAuth.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "oauth2/authorize",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "41.0.0",
                "User-Agent": "square/41.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquareError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquareError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /oauth2/authorize.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SQUARE_TOKEN"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
