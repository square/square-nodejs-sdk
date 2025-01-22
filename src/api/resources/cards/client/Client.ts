/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Cards {
    export interface Options {
        environment?: core.Supplier<environments.SquareEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Square-Version header */
        version?: "2025-01-23";
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
        version?: "2025-01-23";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Cards {
    constructor(protected readonly _options: Cards.Options = {}) {}

    /**
     * Retrieves a list of cards owned by the account making the request.
     * A max of 25 cards will be returned.
     *
     * @param {Square.CardsListRequest} request
     * @param {Cards.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cards.list()
     */
    public async list(
        request: Square.CardsListRequest = {},
        requestOptions?: Cards.RequestOptions,
    ): Promise<core.Page<Square.Card>> {
        const list = async (request: Square.CardsListRequest): Promise<Square.ListCardsResponse> => {
            const { cursor, customerId, includeDisabled, referenceId, sortOrder } = request;
            const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
            if (cursor !== undefined) {
                _queryParams["cursor"] = cursor;
            }
            if (customerId !== undefined) {
                _queryParams["customer_id"] = customerId;
            }
            if (includeDisabled !== undefined) {
                _queryParams["include_disabled"] = includeDisabled?.toString() ?? null;
            }
            if (referenceId !== undefined) {
                _queryParams["reference_id"] = referenceId;
            }
            if (sortOrder !== undefined) {
                _queryParams["sort_order"] = serializers.SortOrder.jsonOrThrow(sortOrder, {
                    unrecognizedObjectKeys: "strip",
                    omitUndefined: true,
                });
            }
            const _response = await (this._options.fetcher ?? core.fetcher)({
                url: urlJoin(
                    (await core.Supplier.get(this._options.baseUrl)) ??
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.SquareEnvironment.Production,
                    "v2/cards",
                ),
                method: "GET",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                    "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-01-23",
                    "X-Fern-Language": "JavaScript",
                    "X-Fern-SDK-Name": "square",
                    "X-Fern-SDK-Version": "40.0.0",
                    "User-Agent": "square/40.0.0",
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
                return serializers.ListCardsResponse.parseOrThrow(_response.body, {
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
                    throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/cards.");
                case "unknown":
                    throw new errors.SquareError({
                        message: _response.error.errorMessage,
                    });
            }
        };
        return new core.Pageable<Square.ListCardsResponse, Square.Card>({
            response: await list(request),
            hasNextPage: (response) => response?.cursor != null,
            getItems: (response) => response?.cards ?? [],
            loadPage: (response) => {
                return list(core.setObjectProperty(request, "cursor", response?.cursor));
            },
        });
    }

    /**
     * Adds a card on file to an existing merchant.
     *
     * @param {Square.CreateCardRequest} request
     * @param {Cards.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cards.create({
     *         idempotencyKey: "4935a656-a929-4792-b97c-8848be85c27c",
     *         sourceId: "cnon:uIbfJXhXETSP197M3GB",
     *         card: {
     *             cardholderName: "Amelia Earhart",
     *             billingAddress: {
     *                 addressLine1: "500 Electric Ave",
     *                 addressLine2: "Suite 600",
     *                 locality: "New York",
     *                 administrativeDistrictLevel1: "NY",
     *                 postalCode: "10003",
     *                 country: "US"
     *             },
     *             customerId: "VDKXEEKPJN48QDG3BGGFAK05P8",
     *             referenceId: "user-id-1"
     *         }
     *     })
     */
    public async create(
        request: Square.CreateCardRequest,
        requestOptions?: Cards.RequestOptions,
    ): Promise<Square.CreateCardResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/cards",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-01-23",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "40.0.0",
                "User-Agent": "square/40.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateCardRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateCardResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/cards.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves details for a specific Card.
     *
     * @param {Square.CardsGetRequest} request
     * @param {Cards.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cards.get({
     *         cardId: "card_id"
     *     })
     */
    public async get(
        request: Square.CardsGetRequest,
        requestOptions?: Cards.RequestOptions,
    ): Promise<Square.GetCardResponse> {
        const { cardId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/cards/${encodeURIComponent(cardId)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-01-23",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "40.0.0",
                "User-Agent": "square/40.0.0",
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
            return serializers.GetCardResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/cards/{card_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Disables the card, preventing any further updates or charges.
     * Disabling an already disabled card is allowed but has no effect.
     *
     * @param {Square.CardsDisableRequest} request
     * @param {Cards.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.cards.disable({
     *         cardId: "card_id"
     *     })
     */
    public async disable(
        request: Square.CardsDisableRequest,
        requestOptions?: Cards.RequestOptions,
    ): Promise<Square.DisableCardResponse> {
        const { cardId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/cards/${encodeURIComponent(cardId)}/disable`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "Square-Version": requestOptions?.version ?? this._options?.version ?? "2025-01-23",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "square",
                "X-Fern-SDK-Version": "40.0.0",
                "User-Agent": "square/40.0.0",
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
            return serializers.DisableCardResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/cards/{card_id}/disable.");
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
