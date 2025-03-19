/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Square from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace CustomAttributeDefinitions {
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

export class CustomAttributeDefinitions {
    constructor(protected readonly _options: CustomAttributeDefinitions.Options = {}) {}

    /**
     * Lists the merchant-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.merchants.ListCustomAttributeDefinitionsRequest} request
     * @param {CustomAttributeDefinitions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.merchants.customAttributeDefinitions.list()
     */
    public async list(
        request: Square.merchants.ListCustomAttributeDefinitionsRequest = {},
        requestOptions?: CustomAttributeDefinitions.RequestOptions,
    ): Promise<core.Page<Square.CustomAttributeDefinition>> {
        const list = async (
            request: Square.merchants.ListCustomAttributeDefinitionsRequest,
        ): Promise<Square.ListMerchantCustomAttributeDefinitionsResponse> => {
            const { visibilityFilter, limit, cursor } = request;
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
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/merchants/custom-attribute-definitions",
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "42.0.0",
                    "User-Agent": "square/42.0.0",
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
                return serializers.ListMerchantCustomAttributeDefinitionsResponse.parseOrThrow(_response.body, {
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
                        "Timeout exceeded when calling GET /v2/merchants/custom-attribute-definitions.",
                    );
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<
            Square.ListMerchantCustomAttributeDefinitionsResponse,
            Square.CustomAttributeDefinition
        >({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.customAttributeDefinitions ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Creates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
     * Use this endpoint to define a custom attribute that can be associated with a merchant connecting to your application.
     * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
     * for a custom attribute. After the definition is created, you can call
     * [UpsertMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-UpsertMerchantCustomAttribute) or
     * [BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
     * to set the custom attribute for a merchant.
     *
     * @param {Square.merchants.CreateMerchantCustomAttributeDefinitionRequest} request
     * @param {CustomAttributeDefinitions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.merchants.customAttributeDefinitions.create({
     *         customAttributeDefinition: {
     *             key: "alternative_seller_name",
     *             schema: {
     *                 "ref": "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String"
     *             },
     *             name: "Alternative Merchant Name",
     *             description: "This is the other name this merchant goes by.",
     *             visibility: "VISIBILITY_READ_ONLY"
     *         }
     *     })
     */
    public async create(
        request: Square.merchants.CreateMerchantCustomAttributeDefinitionRequest,
        requestOptions?: CustomAttributeDefinitions.RequestOptions,
    ): Promise<Square.CreateMerchantCustomAttributeDefinitionResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/merchants/custom-attribute-definitions",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.0",
                "User-Agent": "square/42.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.merchants.CreateMerchantCustomAttributeDefinitionRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateMerchantCustomAttributeDefinitionResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/merchants/custom-attribute-definitions.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param {Square.merchants.GetCustomAttributeDefinitionsRequest} request
     * @param {CustomAttributeDefinitions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.merchants.customAttributeDefinitions.get({
     *         key: "key"
     *     })
     */
    public async get(
        request: Square.merchants.GetCustomAttributeDefinitionsRequest,
        requestOptions?: CustomAttributeDefinitions.RequestOptions,
    ): Promise<Square.RetrieveMerchantCustomAttributeDefinitionResponse> {
        const { key, version } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (version !== undefined) {
            _queryParams["version"] = version?.toString() ?? null;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/merchants/custom-attribute-definitions/${encodeURIComponent(key)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.0",
                "User-Agent": "square/42.0.0",
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
            return serializers.RetrieveMerchantCustomAttributeDefinitionResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v2/merchants/custom-attribute-definitions/{key}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
     * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
     * `schema` for a `Selection` data type.
     * Only the definition owner can update a custom attribute definition.
     *
     * @param {Square.merchants.UpdateMerchantCustomAttributeDefinitionRequest} request
     * @param {CustomAttributeDefinitions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.merchants.customAttributeDefinitions.update({
     *         key: "key",
     *         customAttributeDefinition: {
     *             description: "Update the description as desired.",
     *             visibility: "VISIBILITY_READ_ONLY"
     *         }
     *     })
     */
    public async update(
        request: Square.merchants.UpdateMerchantCustomAttributeDefinitionRequest,
        requestOptions?: CustomAttributeDefinitions.RequestOptions,
    ): Promise<Square.UpdateMerchantCustomAttributeDefinitionResponse> {
        const { key, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/merchants/custom-attribute-definitions/${encodeURIComponent(key)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.0",
                "User-Agent": "square/42.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.merchants.UpdateMerchantCustomAttributeDefinitionRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateMerchantCustomAttributeDefinitionResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling PUT /v2/merchants/custom-attribute-definitions/{key}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
     * Deleting a custom attribute definition also deletes the corresponding custom attribute from
     * the merchant.
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param {Square.merchants.DeleteCustomAttributeDefinitionsRequest} request
     * @param {CustomAttributeDefinitions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.merchants.customAttributeDefinitions.delete({
     *         key: "key"
     *     })
     */
    public async delete(
        request: Square.merchants.DeleteCustomAttributeDefinitionsRequest,
        requestOptions?: CustomAttributeDefinitions.RequestOptions,
    ): Promise<Square.DeleteMerchantCustomAttributeDefinitionResponse> {
        const { key } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/merchants/custom-attribute-definitions/${encodeURIComponent(key)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-03-19",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.0.0",
                "User-Agent": "square/42.0.0",
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
            return serializers.DeleteMerchantCustomAttributeDefinitionResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling DELETE /v2/merchants/custom-attribute-definitions/{key}.",
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
