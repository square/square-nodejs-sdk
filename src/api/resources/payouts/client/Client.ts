/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Payouts {
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

export class Payouts {
    constructor(protected readonly _options: Payouts.Options = {}) {}

    /**
     * Retrieves a list of all payouts for the default location.
     * You can filter payouts by location ID, status, time range, and order them in ascending or descending order.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param {Square.ListPayoutsRequest} request
     * @param {Payouts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payouts.list()
     */
    public async list(
        request: Square.ListPayoutsRequest = {},
        requestOptions?: Payouts.RequestOptions,
    ): Promise<core.Page<Square.Payout>> {
        const list = async (request: Square.ListPayoutsRequest): Promise<Square.ListPayoutsResponse> => {
            const { locationId, status, beginTime, endTime, sortOrder, cursor, limit } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (locationId !== undefined) {
                _queryParams["location_id"] = locationId;
            }
            if (status !== undefined) {
                _queryParams["status"] = serializers.PayoutStatus.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (beginTime !== undefined) {
                _queryParams["begin_time"] = beginTime;
            }
            if (endTime !== undefined) {
                _queryParams["end_time"] = endTime;
            }
            if (sortOrder !== undefined) {
                _queryParams["sort_order"] = serializers.SortOrder.jsonOrThrow(sortOrder, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/payouts",
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
                return serializers.ListPayoutsResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/payouts.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListPayoutsResponse, Square.Payout>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.payouts ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Retrieves details of a specific payout identified by a payout ID.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param {Square.GetPayoutsRequest} request
     * @param {Payouts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payouts.get({
     *         payoutId: "payout_id"
     *     })
     */
    public async get(
        request: Square.GetPayoutsRequest,
        requestOptions?: Payouts.RequestOptions,
    ): Promise<Square.GetPayoutResponse> {
        const { payoutId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/payouts/${encodeURIComponent(payoutId)}`,
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
            return serializers.GetPayoutResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/payouts/{payout_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves a list of all payout entries for a specific payout.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param {Square.ListEntriesPayoutsRequest} request
     * @param {Payouts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payouts.listEntries({
     *         payoutId: "payout_id"
     *     })
     */
    public async listEntries(
        request: Square.ListEntriesPayoutsRequest,
        requestOptions?: Payouts.RequestOptions,
    ): Promise<core.Page<Square.PayoutEntry>> {
        const list = async (request: Square.ListEntriesPayoutsRequest): Promise<Square.ListPayoutEntriesResponse> => {
            const { payoutId, sortOrder, cursor, limit } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (sortOrder !== undefined) {
                _queryParams["sort_order"] = serializers.SortOrder.jsonOrThrow(sortOrder, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (limit !== undefined) {
                _queryParams["limit"] = limit?.toString() ?? null;
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    `v2/payouts/${encodeURIComponent(payoutId)}/payout-entries`,
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
                return serializers.ListPayoutEntriesResponse.parseOrThrow(_response.body, {
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
                        "Timeout exceeded when calling GET /v2/payouts/{payout_id}/payout-entries.",
                    );
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListPayoutEntriesResponse, Square.PayoutEntry>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.payoutEntries ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SQUARE_TOKEN"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
