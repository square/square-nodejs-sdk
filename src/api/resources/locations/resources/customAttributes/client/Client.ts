/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Square from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace CustomAttributes {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-03-19";
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
        version?: "2025-03-19";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class CustomAttributes {
    constructor(protected readonly _options: CustomAttributes.Options = {}) {}

    /**
     * Deletes [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.BulkDeleteLocationCustomAttributesRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.batchDelete({
     *         values: {
     *             "id1": {
     *                 key: "bestseller"
     *             },
     *             "id2": {
     *                 key: "bestseller"
     *             },
     *             "id3": {
     *                 key: "phone-number"
     *             }
     *         }
     *     })
     */
    public async batchDelete(
        request: Square.locations.BulkDeleteLocationCustomAttributesRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<Square.BulkDeleteLocationCustomAttributesResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/locations/custom-attributes/bulk-delete",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.1",
                "User-Agent": "square/42.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.locations.BulkDeleteLocationCustomAttributesRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkDeleteLocationCustomAttributesResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/locations/custom-attributes/bulk-delete.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates or updates [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
     * Use this endpoint to set the value of one or more custom attributes for one or more locations.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which is
     * created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
     * This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides a location ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.BulkUpsertLocationCustomAttributesRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.batchUpsert({
     *         values: {
     *             "id1": {
     *                 locationId: "L0TBCBTB7P8RQ",
     *                 customAttribute: {
     *                     key: "bestseller",
     *                     value: "hot cocoa"
     *                 }
     *             },
     *             "id2": {
     *                 locationId: "L9XMD04V3STJX",
     *                 customAttribute: {
     *                     key: "bestseller",
     *                     value: "berry smoothie"
     *                 }
     *             },
     *             "id3": {
     *                 locationId: "L0TBCBTB7P8RQ",
     *                 customAttribute: {
     *                     key: "phone-number",
     *                     value: "+12223334444"
     *                 }
     *             }
     *         }
     *     })
     */
    public async batchUpsert(
        request: Square.locations.BulkUpsertLocationCustomAttributesRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<Square.BulkUpsertLocationCustomAttributesResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/locations/custom-attributes/bulk-upsert",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.1",
                "User-Agent": "square/42.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.locations.BulkUpsertLocationCustomAttributesRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkUpsertLocationCustomAttributesResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/locations/custom-attributes/bulk-upsert.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists the [custom attributes](entity:CustomAttribute) associated with a location.
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.ListCustomAttributesRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.list({
     *         locationId: "location_id"
     *     })
     */
    public async list(
        request: Square.locations.ListCustomAttributesRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<core.Page<Square.CustomAttribute>> {
        const list = async (
            request: Square.locations.ListCustomAttributesRequest,
        ): Promise<Square.ListLocationCustomAttributesResponse> => {
            const { locationId, visibilityFilter, limit, cursor, withDefinitions } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (visibilityFilter !== undefined) {
                _queryParams["visibility_filter"] = serializers.VisibilityFilter.jsonOrThrow(visibilityFilter, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (withDefinitions !== undefined) {
                _queryParams["with_definitions"] = withDefinitions?.toString() ?? null;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    `v2/locations/${encodeURIComponent(locationId)}/custom-attributes`,
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "42.0.1",
                    "User-Agent": "square/42.0.1",
                    "X-Fern-Runtime": core.RUNTIME.type,
                    "X-Fern-Runtime-Version": core.RUNTIME.version,
                    ...requestOptions?.headers,
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                requestType: "json",
                timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions?.maxRetries,
                abortSignal: requestOptions?.abortSignal,
            });
            if (_response.ok) {
                return serializers.ListLocationCustomAttributesResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError(
                        "Timeout exceeded when calling GET /v2/locations/{location_id}/custom-attributes.",
                    );
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListLocationCustomAttributesResponse, Square.CustomAttribute>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.customAttributes ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Retrieves a [custom attribute](entity:CustomAttribute) associated with a location.
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.GetCustomAttributesRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.get({
     *         locationId: "location_id",
     *         key: "key"
     *     })
     */
    public async get(
        request: Square.locations.GetCustomAttributesRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<Square.RetrieveLocationCustomAttributeResponse> {
        const { locationId, key, withDefinition, version } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (withDefinition !== undefined) {
            _queryParams["with_definition"] = withDefinition?.toString() ?? null;
        }

        if (version !== undefined) {
            _queryParams["version"] = version?.toString() ?? null;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}/custom-attributes/${encodeURIComponent(key)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.1",
                "User-Agent": "square/42.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RetrieveLocationCustomAttributeResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling GET /v2/locations/{location_id}/custom-attributes/{key}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates or updates a [custom attribute](entity:CustomAttribute) for a location.
     * Use this endpoint to set the value of a custom attribute for a specified location.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which
     * is created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.UpsertLocationCustomAttributeRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.upsert({
     *         locationId: "location_id",
     *         key: "key",
     *         customAttribute: {
     *             value: "hot cocoa"
     *         }
     *     })
     */
    public async upsert(
        request: Square.locations.UpsertLocationCustomAttributeRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<Square.UpsertLocationCustomAttributeResponse> {
        const { locationId, key, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}/custom-attributes/${encodeURIComponent(key)}`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.1",
                "User-Agent": "square/42.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.locations.UpsertLocationCustomAttributeRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpsertLocationCustomAttributeResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling POST /v2/locations/{location_id}/custom-attributes/{key}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a [custom attribute](entity:CustomAttribute) associated with a location.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.locations.DeleteCustomAttributesRequest} request
     * @param {CustomAttributes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.customAttributes.delete({
     *         locationId: "location_id",
     *         key: "key"
     *     })
     */
    public async delete(
        request: Square.locations.DeleteCustomAttributesRequest,
        requestOptions?: CustomAttributes.RequestOptions,
    ): Promise<Square.DeleteLocationCustomAttributeResponse> {
        const { locationId, key } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}/custom-attributes/${encodeURIComponent(key)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.1",
                "User-Agent": "square/42.0.1",
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
            return serializers.DeleteLocationCustomAttributeResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError(
                    "Timeout exceeded when calling DELETE /v2/locations/{location_id}/custom-attributes/{key}.",
                );
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
