/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Images } from "../resources/images/client/Client";
import { Object_ } from "../resources/object/client/Client";

export declare namespace Catalog {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-04-16";
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
        version?: "2025-04-16";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Catalog {
    protected _images: Images | undefined;
    protected _object: Object_ | undefined;

    constructor(protected readonly _options: Catalog.Options = {}) {}

    public get images(): Images {
        return (this._images ??= new Images(this._options));
    }

    public get object(): Object_ {
        return (this._object ??= new Object_(this._options));
    }

    /**
     * Deletes a set of [CatalogItem](entity:CatalogItem)s based on the
     * provided list of target IDs and returns a set of successfully deleted IDs in
     * the response. Deletion is a cascading event such that all children of the
     * targeted object are also deleted. For example, deleting a CatalogItem will
     * also delete all of its [CatalogItemVariation](entity:CatalogItemVariation)
     * children.
     *
     * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
     * IDs can be deleted. The response will only include IDs that were
     * actually deleted.
     *
     * To ensure consistency, only one delete request is processed at a time per seller account.
     * While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
     * delete requests are rejected with the `429` error code.
     *
     * @param {Square.BatchDeleteCatalogObjectsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.batchDelete({
     *         objectIds: ["W62UWFY35CWMYGVWK6TWJDNI", "AA27W3M2GGTF3H6AVPNB77CK"]
     *     })
     */
    public async batchDelete(
        request: Square.BatchDeleteCatalogObjectsRequest,
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.BatchDeleteCatalogObjectsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/batch-delete",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BatchDeleteCatalogObjectsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchDeleteCatalogObjectsResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/catalog/batch-delete.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a set of objects based on the provided ID.
     * Each [CatalogItem](entity:CatalogItem) returned in the set includes all of its
     * child information including: all of its
     * [CatalogItemVariation](entity:CatalogItemVariation) objects, references to
     * its [CatalogModifierList](entity:CatalogModifierList) objects, and the ids of
     * any [CatalogTax](entity:CatalogTax) objects that apply to it.
     *
     * @param {Square.BatchGetCatalogObjectsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.batchGet({
     *         objectIds: ["W62UWFY35CWMYGVWK6TWJDNI", "AA27W3M2GGTF3H6AVPNB77CK"],
     *         includeRelatedObjects: true
     *     })
     */
    public async batchGet(
        request: Square.BatchGetCatalogObjectsRequest,
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.BatchGetCatalogObjectsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/batch-retrieve",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BatchGetCatalogObjectsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchGetCatalogObjectsResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/catalog/batch-retrieve.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates or updates up to 10,000 target objects based on the provided
     * list of objects. The target objects are grouped into batches and each batch is
     * inserted/updated in an all-or-nothing manner. If an object within a batch is
     * malformed in some way, or violates a database constraint, the entire batch
     * containing that item will be disregarded. However, other batches in the same
     * request may still succeed. Each batch may contain up to 1,000 objects, and
     * batches will be processed in order as long as the total object count for the
     * request (items, variations, modifier lists, discounts, and taxes) is no more
     * than 10,000.
     *
     * To ensure consistency, only one update request is processed at a time per seller account.
     * While one (batch or non-batch) update request is being processed, other (batched and non-batched)
     * update requests are rejected with the `429` error code.
     *
     * @param {Square.BatchUpsertCatalogObjectsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.batchUpsert({
     *         idempotencyKey: "789ff020-f723-43a9-b4b5-43b5dc1fa3dc",
     *         batches: [{
     *                 objects: [{
     *                         type: "ITEM",
     *                         id: "id"
     *                     }, {
     *                         type: "ITEM",
     *                         id: "id"
     *                     }, {
     *                         type: "ITEM",
     *                         id: "id"
     *                     }, {
     *                         type: "TAX",
     *                         id: "id"
     *                     }]
     *             }]
     *     })
     */
    public async batchUpsert(
        request: Square.BatchUpsertCatalogObjectsRequest,
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.BatchUpsertCatalogObjectsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/batch-upsert",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BatchUpsertCatalogObjectsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchUpsertCatalogObjectsResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/catalog/batch-upsert.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves information about the Square Catalog API, such as batch size
     * limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
     *
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.info()
     */
    public async info(requestOptions?: Catalog.RequestOptions): Promise<Square.CatalogInfoResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/info",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
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
            return serializers.CatalogInfoResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/catalog/info.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of all [CatalogObject](entity:CatalogObject)s of the specified types in the catalog.
     *
     * The `types` parameter is specified as a comma-separated list of the [CatalogObjectType](entity:CatalogObjectType) values,
     * for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`".
     *
     * __Important:__ ListCatalog does not return deleted catalog items. To retrieve
     * deleted catalog items, use [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
     * and set the `include_deleted_objects` attribute value to `true`.
     *
     * @param {Square.ListCatalogRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.list()
     */
    public async list(
        request: Square.ListCatalogRequest = {},
        requestOptions?: Catalog.RequestOptions,
    ): Promise<core.Page<Square.CatalogObject>> {
        const list = async (request: Square.ListCatalogRequest): Promise<Square.ListCatalogResponse> => {
            const { cursor, types, catalogVersion } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (types !== undefined) {
                _queryParams["types"] = types;
            }
            if (catalogVersion !== undefined) {
                _queryParams["catalog_version"] = catalogVersion?.toString() ?? null;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/catalog/list",
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "42.1.0",
                    "User-Agent": "square/42.1.0",
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
                return serializers.ListCatalogResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/catalog/list.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListCatalogResponse, Square.CatalogObject>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.objects ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Searches for [CatalogObject](entity:CatalogObject) of any type by matching supported search attribute values,
     * excluding custom attribute values on items or item variations, against one or more of the specified query filters.
     *
     * This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints have different call conventions, including the query filter formats.
     *
     * @param {Square.SearchCatalogObjectsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.search({
     *         objectTypes: ["ITEM"],
     *         query: {
     *             prefixQuery: {
     *                 attributeName: "name",
     *                 attributePrefix: "tea"
     *             }
     *         },
     *         limit: 100
     *     })
     */
    public async search(
        request: Square.SearchCatalogObjectsRequest = {},
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.SearchCatalogObjectsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/search",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SearchCatalogObjectsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchCatalogObjectsResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/catalog/search.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Searches for catalog items or item variations by matching supported search attribute values, including
     * custom attribute values, against one or more of the specified query filters.
     *
     * This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints use different call conventions, including the query filter formats.
     *
     * @param {Square.SearchCatalogItemsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.searchItems({
     *         textFilter: "red",
     *         categoryIds: ["WINE_CATEGORY_ID"],
     *         stockLevels: ["OUT", "LOW"],
     *         enabledLocationIds: ["ATL_LOCATION_ID"],
     *         limit: 100,
     *         sortOrder: "ASC",
     *         productTypes: ["REGULAR"],
     *         customAttributeFilters: [{
     *                 customAttributeDefinitionId: "VEGAN_DEFINITION_ID",
     *                 boolFilter: true
     *             }, {
     *                 customAttributeDefinitionId: "BRAND_DEFINITION_ID",
     *                 stringFilter: "Dark Horse"
     *             }, {
     *                 key: "VINTAGE",
     *                 numberFilter: {
     *                     min: "min",
     *                     max: "max"
     *                 }
     *             }, {
     *                 customAttributeDefinitionId: "VARIETAL_DEFINITION_ID"
     *             }]
     *     })
     */
    public async searchItems(
        request: Square.SearchCatalogItemsRequest = {},
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.SearchCatalogItemsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/search-catalog-items",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SearchCatalogItemsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchCatalogItemsResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/catalog/search-catalog-items.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the [CatalogModifierList](entity:CatalogModifierList) objects
     * that apply to the targeted [CatalogItem](entity:CatalogItem) without having
     * to perform an upsert on the entire item.
     *
     * @param {Square.UpdateItemModifierListsRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.updateItemModifierLists({
     *         itemIds: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
     *         modifierListsToEnable: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
     *         modifierListsToDisable: ["7WRC16CJZDVLSNDQ35PP6YAD"]
     *     })
     */
    public async updateItemModifierLists(
        request: Square.UpdateItemModifierListsRequest,
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.UpdateItemModifierListsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/update-item-modifier-lists",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateItemModifierListsRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateItemModifierListsResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/catalog/update-item-modifier-lists.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates the [CatalogTax](entity:CatalogTax) objects that apply to the
     * targeted [CatalogItem](entity:CatalogItem) without having to perform an
     * upsert on the entire item.
     *
     * @param {Square.UpdateItemTaxesRequest} request
     * @param {Catalog.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.updateItemTaxes({
     *         itemIds: ["H42BRLUJ5KTZTTMPVSLFAACQ", "2JXOBJIHCWBQ4NZ3RIXQGJA6"],
     *         taxesToEnable: ["4WRCNHCJZDVLSNDQ35PP6YAD"],
     *         taxesToDisable: ["AQCEGCEBBQONINDOHRGZISEX"]
     *     })
     */
    public async updateItemTaxes(
        request: Square.UpdateItemTaxesRequest,
        requestOptions?: Catalog.RequestOptions,
    ): Promise<Square.UpdateItemTaxesResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/update-item-taxes",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-04-16",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "42.1.0",
                "User-Agent": "square/42.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateItemTaxesRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateItemTaxesResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/catalog/update-item-taxes.",
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
