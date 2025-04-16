/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { CustomAttributeDefinitions } from "../resources/customAttributeDefinitions/client/Client";
import { CustomAttributes } from "../resources/customAttributes/client/Client";

export declare namespace Orders {
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

export class Orders {
    protected _customAttributeDefinitions: CustomAttributeDefinitions | undefined;
    protected _customAttributes: CustomAttributes | undefined;

    constructor(protected readonly _options: Orders.Options = {}) {}

    public get customAttributeDefinitions(): CustomAttributeDefinitions {
        return (this._customAttributeDefinitions ??= new CustomAttributeDefinitions(this._options));
    }

    public get customAttributes(): CustomAttributes {
        return (this._customAttributes ??= new CustomAttributes(this._options));
    }

    /**
     * Creates a new [order](entity:Order) that can include information about products for
     * purchase and settings to apply to the purchase.
     *
     * To pay for a created order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     *
     * You can modify open orders using the [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint.
     *
     * @param {Square.CreateOrderRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.create({
     *         order: {
     *             locationId: "057P5VYJ4A5X1",
     *             referenceId: "my-order-001",
     *             lineItems: [{
     *                     name: "New York Strip Steak",
     *                     quantity: "1",
     *                     basePriceMoney: {
     *                         amount: 1599,
     *                         currency: "USD"
     *                     }
     *                 }, {
     *                     quantity: "2",
     *                     catalogObjectId: "BEMYCSMIJL46OCDV4KYIKXIB",
     *                     modifiers: [{
     *                             catalogObjectId: "CHQX7Y4KY6N5KINJKZCFURPZ"
     *                         }],
     *                     appliedDiscounts: [{
     *                             discountUid: "one-dollar-off"
     *                         }]
     *                 }],
     *             taxes: [{
     *                     uid: "state-sales-tax",
     *                     name: "State Sales Tax",
     *                     percentage: "9",
     *                     scope: "ORDER"
     *                 }],
     *             discounts: [{
     *                     uid: "labor-day-sale",
     *                     name: "Labor Day Sale",
     *                     percentage: "5",
     *                     scope: "ORDER"
     *                 }, {
     *                     uid: "membership-discount",
     *                     catalogObjectId: "DB7L55ZH2BGWI4H23ULIWOQ7",
     *                     scope: "ORDER"
     *                 }, {
     *                     uid: "one-dollar-off",
     *                     name: "Sale - $1.00 off",
     *                     amountMoney: {
     *                         amount: 100,
     *                         currency: "USD"
     *                     },
     *                     scope: "LINE_ITEM"
     *                 }]
     *         },
     *         idempotencyKey: "8193148c-9586-11e6-99f9-28cfe92138cf"
     *     })
     */
    public async create(
        request: Square.CreateOrderRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.CreateOrderResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/orders",
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
            body: serializers.CreateOrderRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves a set of [orders](entity:Order) by their IDs.
     *
     * If a given order ID does not exist, the ID is ignored instead of generating an error.
     *
     * @param {Square.BatchGetOrdersRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.batchGet({
     *         locationId: "057P5VYJ4A5X1",
     *         orderIds: ["CAISEM82RcpmcFBM0TfOyiHV3es", "CAISENgvlJ6jLWAzERDzjyHVybY"]
     *     })
     */
    public async batchGet(
        request: Square.BatchGetOrdersRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.BatchGetOrdersResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/orders/batch-retrieve",
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
            body: serializers.BatchGetOrdersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchGetOrdersResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders/batch-retrieve.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Enables applications to preview order pricing without creating an order.
     *
     * @param {Square.CalculateOrderRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.calculate({
     *         order: {
     *             locationId: "D7AVYMEAPJ3A3",
     *             lineItems: [{
     *                     name: "Item 1",
     *                     quantity: "1",
     *                     basePriceMoney: {
     *                         amount: 500,
     *                         currency: "USD"
     *                     }
     *                 }, {
     *                     name: "Item 2",
     *                     quantity: "2",
     *                     basePriceMoney: {
     *                         amount: 300,
     *                         currency: "USD"
     *                     }
     *                 }],
     *             discounts: [{
     *                     name: "50% Off",
     *                     percentage: "50",
     *                     scope: "ORDER"
     *                 }]
     *         }
     *     })
     */
    public async calculate(
        request: Square.CalculateOrderRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.CalculateOrderResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/orders/calculate",
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
            body: serializers.CalculateOrderRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CalculateOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders/calculate.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order has
     * only the core fields (such as line items, taxes, and discounts) copied from the original order.
     *
     * @param {Square.CloneOrderRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.clone({
     *         orderId: "ZAISEM52YcpmcWAzERDOyiWS123",
     *         version: 3,
     *         idempotencyKey: "UNIQUE_STRING"
     *     })
     */
    public async clone(
        request: Square.CloneOrderRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.CloneOrderResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/orders/clone",
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
            body: serializers.CloneOrderRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CloneOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders/clone.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Search all orders for one or more locations. Orders include all sales,
     * returns, and exchanges regardless of how or when they entered the Square
     * ecosystem (such as Point of Sale, Invoices, and Connect APIs).
     *
     * `SearchOrders` requests need to specify which locations to search and define a
     * [SearchOrdersQuery](entity:SearchOrdersQuery) object that controls
     * how to sort or filter the results. Your `SearchOrdersQuery` can:
     *
     *   Set filter criteria.
     *   Set the sort order.
     *   Determine whether to return results as complete `Order` objects or as
     * [OrderEntry](entity:OrderEntry) objects.
     *
     * Note that details for orders processed with Square Point of Sale while in
     * offline mode might not be transmitted to Square for up to 72 hours. Offline
     * orders have a `created_at` value that reflects the time the order was created,
     * not the time it was subsequently transmitted to Square.
     *
     * @param {Square.SearchOrdersRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.search({
     *         locationIds: ["057P5VYJ4A5X1", "18YC4JDH91E1H"],
     *         query: {
     *             filter: {
     *                 stateFilter: {
     *                     states: ["COMPLETED"]
     *                 },
     *                 dateTimeFilter: {
     *                     closedAt: {
     *                         startAt: "2018-03-03T20:00:00+00:00",
     *                         endAt: "2019-03-04T21:54:45+00:00"
     *                     }
     *                 }
     *             },
     *             sort: {
     *                 sortField: "CLOSED_AT",
     *                 sortOrder: "DESC"
     *             }
     *         },
     *         limit: 3,
     *         returnEntries: true
     *     })
     */
    public async search(
        request: Square.SearchOrdersRequest = {},
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.SearchOrdersResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/orders/search",
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
            body: serializers.SearchOrdersRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SearchOrdersResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders/search.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves an [Order](entity:Order) by ID.
     *
     * @param {Square.GetOrdersRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.get({
     *         orderId: "order_id"
     *     })
     */
    public async get(
        request: Square.GetOrdersRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.GetOrderResponse> {
        const { orderId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/orders/${encodeURIComponent(orderId)}`,
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
            return serializers.GetOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/orders/{order_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates an open [order](entity:Order) by adding, replacing, or deleting
     * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
     *
     * An `UpdateOrder` request requires the following:
     *
     * - The `order_id` in the endpoint path, identifying the order to update.
     * - The latest `version` of the order to update.
     * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#sparse-order-objects)
     * containing only the fields to update and the version to which the update is
     * being applied.
     * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
     * identifying the fields to clear.
     *
     * To pay for an order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     *
     * @param {Square.UpdateOrderRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.update({
     *         orderId: "order_id",
     *         order: {
     *             locationId: "location_id",
     *             lineItems: [{
     *                     uid: "cookie_uid",
     *                     name: "COOKIE",
     *                     quantity: "2",
     *                     basePriceMoney: {
     *                         amount: 200,
     *                         currency: "USD"
     *                     }
     *                 }],
     *             version: 1
     *         },
     *         fieldsToClear: ["discounts"],
     *         idempotencyKey: "UNIQUE_STRING"
     *     })
     */
    public async update(
        request: Square.UpdateOrderRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.UpdateOrderResponse> {
        const { orderId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/orders/${encodeURIComponent(orderId)}`,
            ),
            method: "PUT",
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
            body: serializers.UpdateOrderRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling PUT /v2/orders/{order_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Pay for an [order](entity:Order) using one or more approved [payments](entity:Payment)
     * or settle an order with a total of `0`.
     *
     * The total of the `payment_ids` listed in the request must be equal to the order
     * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
     * array of `payment_ids` in the request.
     *
     * To be used with `PayOrder`, a payment must:
     *
     * - Reference the order by specifying the `order_id` when [creating the payment](api-endpoint:Payments-CreatePayment).
     * Any approved payments that reference the same `order_id` not specified in the
     * `payment_ids` is canceled.
     * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments/card-payments/delayed-capture).
     * Using a delayed capture payment with `PayOrder` completes the approved payment.
     *
     * @param {Square.PayOrderRequest} request
     * @param {Orders.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.orders.pay({
     *         orderId: "order_id",
     *         idempotencyKey: "c043a359-7ad9-4136-82a9-c3f1d66dcbff",
     *         paymentIds: ["EnZdNAlWCmfh6Mt5FMNST1o7taB", "0LRiVlbXVwe8ozu4KbZxd12mvaB"]
     *     })
     */
    public async pay(
        request: Square.PayOrderRequest,
        requestOptions?: Orders.RequestOptions,
    ): Promise<Square.PayOrderResponse> {
        const { orderId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/orders/${encodeURIComponent(orderId)}/pay`,
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
            body: serializers.PayOrderRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PayOrderResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/orders/{order_id}/pay.");
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
