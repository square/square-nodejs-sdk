/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Payments {
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

export class Payments {
    constructor(protected readonly _options: Payments.Options = {}) {}

    /**
     * Retrieves a list of payments taken by the account making the request.
     *
     * Results are eventually consistent, and new payments or changes to payments might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param {Square.ListPaymentsRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.list()
     */
    public async list(
        request: Square.ListPaymentsRequest = {},
        requestOptions?: Payments.RequestOptions,
    ): Promise<core.Page<Square.Payment>> {
        const list = async (request: Square.ListPaymentsRequest): Promise<Square.ListPaymentsResponse> => {
            const {
                beginTime,
                endTime,
                sortOrder,
                cursor,
                locationId,
                total,
                last4,
                cardBrand,
                limit,
                isOfflinePayment,
                offlineBeginTime,
                offlineEndTime,
                updatedAtBeginTime,
                updatedAtEndTime,
                sortField,
            } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (beginTime !== undefined) {
                _queryParams["begin_time"] = beginTime;
            }
            if (endTime !== undefined) {
                _queryParams["end_time"] = endTime;
            }
            if (sortOrder !== undefined) {
                _queryParams["sort_order"] = sortOrder;
            }
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (locationId !== undefined) {
                _queryParams["location_id"] = locationId;
            }
            if (total !== undefined) {
                _queryParams["total"] = total?.toString() ?? null;
            }
            if (last4 !== undefined) {
                _queryParams["last_4"] = last4;
            }
            if (cardBrand !== undefined) {
                _queryParams["card_brand"] = cardBrand;
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            if (isOfflinePayment !== undefined) {
                _queryParams["is_offline_payment"] = isOfflinePayment?.toString() ?? null;
            }
            if (offlineBeginTime !== undefined) {
                _queryParams["offline_begin_time"] = offlineBeginTime;
            }
            if (offlineEndTime !== undefined) {
                _queryParams["offline_end_time"] = offlineEndTime;
            }
            if (updatedAtBeginTime !== undefined) {
                _queryParams["updated_at_begin_time"] = updatedAtBeginTime;
            }
            if (updatedAtEndTime !== undefined) {
                _queryParams["updated_at_end_time"] = updatedAtEndTime;
            }
            if (sortField !== undefined) {
                _queryParams["sort_field"] = serializers.ListPaymentsRequestSortField.jsonOrThrow(sortField, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/payments",
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
                return serializers.ListPaymentsResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/payments.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListPaymentsResponse, Square.Payment>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.payments ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Creates a payment using the provided source. You can use this endpoint
     * to charge a card (credit/debit card or
     * Square gift card) or record a payment that the seller received outside of Square
     * (cash payment from a buyer or a payment that an external entity
     * processed on behalf of the seller).
     *
     * The endpoint creates a
     * `Payment` object and returns it in the response.
     *
     * @param {Square.CreatePaymentRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.create({
     *         sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
     *         idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
     *         amountMoney: {
     *             amount: 1000,
     *             currency: "USD"
     *         },
     *         appFeeMoney: {
     *             amount: 10,
     *             currency: "USD"
     *         },
     *         autocomplete: true,
     *         customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
     *         locationId: "L88917AVBK2S5",
     *         referenceId: "123456",
     *         note: "Brief description"
     *     })
     */
    public async create(
        request: Square.CreatePaymentRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.CreatePaymentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/payments",
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
            body: serializers.CreatePaymentRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreatePaymentResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/payments.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Cancels (voids) a payment identified by the idempotency key that is specified in the
     * request.
     *
     * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
     * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
     * direct Square to cancel the payment using this endpoint. In the request, you provide the same
     * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
     * canceling the payment, you can submit your `CreatePayment` request again.
     *
     * Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
     * returns successfully.
     *
     * @param {Square.CancelPaymentByIdempotencyKeyRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.cancelByIdempotencyKey({
     *         idempotencyKey: "a7e36d40-d24b-11e8-b568-0800200c9a66"
     *     })
     */
    public async cancelByIdempotencyKey(
        request: Square.CancelPaymentByIdempotencyKeyRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.CancelPaymentByIdempotencyKeyResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/payments/cancel",
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
            body: serializers.CancelPaymentByIdempotencyKeyRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CancelPaymentByIdempotencyKeyResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/payments/cancel.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves details for a specific payment.
     *
     * @param {Square.GetPaymentsRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.get({
     *         paymentId: "payment_id"
     *     })
     */
    public async get(
        request: Square.GetPaymentsRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.GetPaymentResponse> {
        const { paymentId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/payments/${encodeURIComponent(paymentId)}`,
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetPaymentResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/payments/{payment_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a payment with the APPROVED status.
     * You can update the `amount_money` and `tip_money` using this endpoint.
     *
     * @param {Square.UpdatePaymentRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.update({
     *         paymentId: "payment_id",
     *         payment: {
     *             amountMoney: {
     *                 amount: 1000,
     *                 currency: "USD"
     *             },
     *             tipMoney: {
     *                 amount: 100,
     *                 currency: "USD"
     *             },
     *             versionToken: "ODhwVQ35xwlzRuoZEwKXucfu7583sPTzK48c5zoGd0g6o"
     *         },
     *         idempotencyKey: "956f8b13-e4ec-45d6-85e8-d1d95ef0c5de"
     *     })
     */
    public async update(
        request: Square.UpdatePaymentRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.UpdatePaymentResponse> {
        const { paymentId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/payments/${encodeURIComponent(paymentId)}`,
            ),
            method: "PUT",
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
            body: serializers.UpdatePaymentRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdatePaymentResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling PUT /v2/payments/{payment_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Cancels (voids) a payment. You can use this endpoint to cancel a payment with
     * the APPROVED `status`.
     *
     * @param {Square.CancelPaymentsRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.cancel({
     *         paymentId: "payment_id"
     *     })
     */
    public async cancel(
        request: Square.CancelPaymentsRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.CancelPaymentResponse> {
        const { paymentId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/payments/${encodeURIComponent(paymentId)}/cancel`,
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CancelPaymentResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/payments/{payment_id}/cancel.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Completes (captures) a payment.
     * By default, payments are set to complete immediately after they are created.
     *
     * You can use this endpoint to complete a payment with the APPROVED `status`.
     *
     * @param {Square.CompletePaymentRequest} request
     * @param {Payments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payments.complete({
     *         paymentId: "payment_id"
     *     })
     */
    public async complete(
        request: Square.CompletePaymentRequest,
        requestOptions?: Payments.RequestOptions,
    ): Promise<Square.CompletePaymentResponse> {
        const { paymentId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/payments/${encodeURIComponent(paymentId)}/complete`,
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
            body: serializers.CompletePaymentRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CompletePaymentResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/payments/{payment_id}/complete.",
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
