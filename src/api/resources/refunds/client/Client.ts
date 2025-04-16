/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Refunds {
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

export class Refunds {
    constructor(protected readonly _options: Refunds.Options = {}) {}

    /**
     * Retrieves a list of refunds for the account making the request.
     *
     * Results are eventually consistent, and new refunds or changes to refunds might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param {Square.ListRefundsRequest} request
     * @param {Refunds.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.refunds.list()
     */
    public async list(
        request: Square.ListRefundsRequest = {},
        requestOptions?: Refunds.RequestOptions,
    ): Promise<core.Page<Square.PaymentRefund>> {
        const list = async (request: Square.ListRefundsRequest): Promise<Square.ListPaymentRefundsResponse> => {
            const {
                beginTime,
                endTime,
                sortOrder,
                cursor,
                locationId,
                status,
                sourceType,
                limit,
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
            if (status !== undefined) {
                _queryParams["status"] = status;
            }
            if (sourceType !== undefined) {
                _queryParams["source_type"] = sourceType;
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            if (updatedAtBeginTime !== undefined) {
                _queryParams["updated_at_begin_time"] = updatedAtBeginTime;
            }
            if (updatedAtEndTime !== undefined) {
                _queryParams["updated_at_end_time"] = updatedAtEndTime;
            }
            if (sortField !== undefined) {
                _queryParams["sort_field"] = serializers.ListPaymentRefundsRequestSortField.jsonOrThrow(sortField, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/refunds",
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
                return serializers.ListPaymentRefundsResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/refunds.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListPaymentRefundsResponse, Square.PaymentRefund>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.refunds ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Refunds a payment. You can refund the entire payment amount or a
     * portion of it. You can use this endpoint to refund a card payment or record a
     * refund of a cash or external payment. For more information, see
     * [Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).
     *
     * @param {Square.RefundPaymentRequest} request
     * @param {Refunds.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.refunds.refundPayment({
     *         idempotencyKey: "9b7f2dcf-49da-4411-b23e-a2d6af21333a",
     *         amountMoney: {
     *             amount: 1000,
     *             currency: "USD"
     *         },
     *         appFeeMoney: {
     *             amount: 10,
     *             currency: "USD"
     *         },
     *         paymentId: "R2B3Z8WMVt3EAmzYWLZvz7Y69EbZY",
     *         reason: "Example"
     *     })
     */
    public async refundPayment(
        request: Square.RefundPaymentRequest,
        requestOptions?: Refunds.RequestOptions,
    ): Promise<Square.RefundPaymentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/refunds",
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
            body: serializers.RefundPaymentRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RefundPaymentResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/refunds.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves a specific refund using the `refund_id`.
     *
     * @param {Square.GetRefundsRequest} request
     * @param {Refunds.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.refunds.get({
     *         refundId: "refund_id"
     *     })
     */
    public async get(
        request: Square.GetRefundsRequest,
        requestOptions?: Refunds.RequestOptions,
    ): Promise<Square.GetPaymentRefundResponse> {
        const { refundId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/refunds/${encodeURIComponent(refundId)}`,
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
            return serializers.GetPaymentRefundResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/refunds/{refund_id}.");
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
