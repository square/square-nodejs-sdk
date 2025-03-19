/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Square from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Shifts {
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

export class Shifts {
    constructor(protected readonly _options: Shifts.Options = {}) {}

    /**
     * Provides the details for all of the cash drawer shifts for a location
     * in a date range.
     *
     * @param {Square.cashDrawers.ListShiftsRequest} request
     * @param {Shifts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cashDrawers.shifts.list({
     *         locationId: "location_id"
     *     })
     */
    public async list(
        request: Square.cashDrawers.ListShiftsRequest,
        requestOptions?: Shifts.RequestOptions,
    ): Promise<core.Page<Square.CashDrawerShiftSummary>> {
        const list = async (
            request: Square.cashDrawers.ListShiftsRequest,
        ): Promise<Square.ListCashDrawerShiftsResponse> => {
            const { locationId, sortOrder, beginTime, endTime, limit, cursor } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            _queryParams["location_id"] = locationId;
            if (sortOrder !== undefined) {
                _queryParams["sort_order"] = serializers.SortOrder.jsonOrThrow(sortOrder, {
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
                    "v2/cash-drawers/shifts",
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
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
                return serializers.ListCashDrawerShiftsResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/cash-drawers/shifts.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListCashDrawerShiftsResponse, Square.CashDrawerShiftSummary>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.cashDrawerShifts ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Provides the summary details for a single cash drawer shift. See
     * [ListCashDrawerShiftEvents](api-endpoint:CashDrawers-ListCashDrawerShiftEvents) for a list of cash drawer shift events.
     *
     * @param {Square.cashDrawers.GetShiftsRequest} request
     * @param {Shifts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cashDrawers.shifts.get({
     *         shiftId: "shift_id",
     *         locationId: "location_id"
     *     })
     */
    public async get(
        request: Square.cashDrawers.GetShiftsRequest,
        requestOptions?: Shifts.RequestOptions,
    ): Promise<Square.GetCashDrawerShiftResponse> {
        const { shiftId, locationId } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["location_id"] = locationId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/cash-drawers/shifts/${encodeURIComponent(shiftId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
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
            return serializers.GetCashDrawerShiftResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /v2/cash-drawers/shifts/{shift_id}.",
                );
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Provides a paginated list of events for a single cash drawer shift.
     *
     * @param {Square.cashDrawers.ListEventsShiftsRequest} request
     * @param {Shifts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cashDrawers.shifts.listEvents({
     *         shiftId: "shift_id",
     *         locationId: "location_id"
     *     })
     */
    public async listEvents(
        request: Square.cashDrawers.ListEventsShiftsRequest,
        requestOptions?: Shifts.RequestOptions,
    ): Promise<core.Page<Square.CashDrawerShiftEvent>> {
        const list = async (
            request: Square.cashDrawers.ListEventsShiftsRequest,
        ): Promise<Square.ListCashDrawerShiftEventsResponse> => {
            const { shiftId, locationId, limit, cursor } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            _queryParams["location_id"] = locationId;
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
                    `v2/cash-drawers/shifts/${encodeURIComponent(shiftId)}/events`,
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-02-20",
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
                return serializers.ListCashDrawerShiftEventsResponse.parseOrThrow(_response.body, {
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
                        "Timeout exceeded when calling GET /v2/cash-drawers/shifts/{shift_id}/events.",
                    );
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListCashDrawerShiftEventsResponse, Square.CashDrawerShiftEvent>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.cashDrawerShiftEvents ?? [],
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
