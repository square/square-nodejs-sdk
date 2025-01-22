/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Square from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import { CustomAttributeDefinitions } from "../resources/customAttributeDefinitions/client/Client";
import { CustomAttributes } from "../resources/customAttributes/client/Client";
import { Transactions } from "../resources/transactions/client/Client";

export declare namespace Locations {
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

export class Locations {
    protected _customAttributeDefinitions: CustomAttributeDefinitions | undefined;
    protected _customAttributes: CustomAttributes | undefined;
    protected _transactions: Transactions | undefined;

    constructor(protected readonly _options: Locations.Options = {}) {}

    public get customAttributeDefinitions(): CustomAttributeDefinitions {
        return (this._customAttributeDefinitions ??= new CustomAttributeDefinitions(this._options));
    }

    public get customAttributes(): CustomAttributes {
        return (this._customAttributes ??= new CustomAttributes(this._options));
    }

    public get transactions(): Transactions {
        return (this._transactions ??= new Transactions(this._options));
    }

    /**
     * Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-api),
     * including those with an inactive status. Locations are listed alphabetically by `name`.
     *
     * @param {Locations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.list()
     */
    public async list(requestOptions?: Locations.RequestOptions): Promise<Square.ListLocationsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/locations",
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
            return serializers.ListLocationsResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/locations.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a [location](https://developer.squareup.com/docs/locations-api).
     * Creating new locations allows for separate configuration of receipt layouts, item prices,
     * and sales reports. Developers can use locations to separate sales activity through applications
     * that integrate with Square from sales activity elsewhere in a seller's account.
     * Locations created programmatically with the Locations API last forever and
     * are visible to the seller for their own management. Therefore, ensure that
     * each location has a sensible and unique name.
     *
     * @param {Square.CreateLocationRequest} request
     * @param {Locations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.create({
     *         location: {
     *             name: "Midtown",
     *             address: {
     *                 addressLine1: "1234 Peachtree St. NE",
     *                 locality: "Atlanta",
     *                 administrativeDistrictLevel1: "GA",
     *                 postalCode: "30309"
     *             },
     *             description: "Midtown Atlanta store"
     *         }
     *     })
     */
    public async create(
        request: Square.CreateLocationRequest = {},
        requestOptions?: Locations.RequestOptions,
    ): Promise<Square.CreateLocationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/locations",
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
            body: serializers.CreateLocationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateLocationResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/locations.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieves details of a single location. Specify "main"
     * as the location ID to retrieve details of the [main location](https://developer.squareup.com/docs/locations-api#about-the-main-location).
     *
     * @param {Square.LocationsGetRequest} request
     * @param {Locations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.get({
     *         locationId: "location_id"
     *     })
     */
    public async get(
        request: Square.LocationsGetRequest,
        requestOptions?: Locations.RequestOptions,
    ): Promise<Square.GetLocationResponse> {
        const { locationId } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}`,
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
            return serializers.GetLocationResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling GET /v2/locations/{location_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a [location](https://developer.squareup.com/docs/locations-api).
     *
     * @param {Square.UpdateLocationRequest} request
     * @param {Locations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.update({
     *         locationId: "location_id",
     *         location: {
     *             businessHours: {
     *                 periods: [{
     *                         dayOfWeek: "FRI",
     *                         startLocalTime: "07:00",
     *                         endLocalTime: "18:00"
     *                     }, {
     *                         dayOfWeek: "SAT",
     *                         startLocalTime: "07:00",
     *                         endLocalTime: "18:00"
     *                     }, {
     *                         dayOfWeek: "SUN",
     *                         startLocalTime: "09:00",
     *                         endLocalTime: "15:00"
     *                     }]
     *             },
     *             description: "Midtown Atlanta store - Open weekends"
     *         }
     *     })
     */
    public async update(
        request: Square.UpdateLocationRequest,
        requestOptions?: Locations.RequestOptions,
    ): Promise<Square.UpdateLocationResponse> {
        const { locationId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}`,
            ),
            method: "PUT",
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
            body: serializers.UpdateLocationRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateLocationResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling PUT /v2/locations/{location_id}.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers are
     * directed to in order to provide their payment information using a
     * payment processing workflow hosted on connect.squareup.com.
     *
     *
     * NOTE: The Checkout API has been updated with new features.
     * For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-api#checkout-api-highlights).
     *
     * @param {Square.CreateCheckoutRequest} request
     * @param {Locations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.locations.checkouts({
     *         locationId: "location_id",
     *         idempotencyKey: "86ae1696-b1e3-4328-af6d-f1e04d947ad6",
     *         order: {
     *             order: {
     *                 locationId: "location_id",
     *                 referenceId: "reference_id",
     *                 customerId: "customer_id",
     *                 lineItems: [{
     *                         name: "Printed T Shirt",
     *                         quantity: "2",
     *                         appliedTaxes: [{
     *                                 taxUid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3"
     *                             }],
     *                         appliedDiscounts: [{
     *                                 discountUid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4"
     *                             }],
     *                         basePriceMoney: {
     *                             amount: 1500,
     *                             currency: "USD"
     *                         }
     *                     }, {
     *                         name: "Slim Jeans",
     *                         quantity: "1",
     *                         basePriceMoney: {
     *                             amount: 2500,
     *                             currency: "USD"
     *                         }
     *                     }, {
     *                         name: "Woven Sweater",
     *                         quantity: "3",
     *                         basePriceMoney: {
     *                             amount: 3500,
     *                             currency: "USD"
     *                         }
     *                     }],
     *                 taxes: [{
     *                         uid: "38ze1696-z1e3-5628-af6d-f1e04d947fg3",
     *                         type: "INCLUSIVE",
     *                         percentage: "7.75",
     *                         scope: "LINE_ITEM"
     *                     }],
     *                 discounts: [{
     *                         uid: "56ae1696-z1e3-9328-af6d-f1e04d947gd4",
     *                         type: "FIXED_AMOUNT",
     *                         amountMoney: {
     *                             amount: 100,
     *                             currency: "USD"
     *                         },
     *                         scope: "LINE_ITEM"
     *                     }]
     *             },
     *             idempotencyKey: "12ae1696-z1e3-4328-af6d-f1e04d947gd4"
     *         },
     *         askForShippingAddress: true,
     *         merchantSupportEmail: "merchant+support@website.com",
     *         prePopulateBuyerEmail: "example@email.com",
     *         prePopulateShippingAddress: {
     *             addressLine1: "1455 Market St.",
     *             addressLine2: "Suite 600",
     *             locality: "San Francisco",
     *             administrativeDistrictLevel1: "CA",
     *             postalCode: "94103",
     *             country: "US",
     *             firstName: "Jane",
     *             lastName: "Doe"
     *         },
     *         redirectUrl: "https://merchant.website.com/order-confirm",
     *         additionalRecipients: [{
     *                 locationId: "057P5VYJ4A5X1",
     *                 description: "Application fees",
     *                 amountMoney: {
     *                     amount: 60,
     *                     currency: "USD"
     *                 }
     *             }]
     *     })
     */
    public async checkouts(
        request: Square.CreateCheckoutRequest,
        requestOptions?: Locations.RequestOptions,
    ): Promise<Square.CreateCheckoutResponse> {
        const { locationId, ..._body } = request;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/locations/${encodeURIComponent(locationId)}/checkouts`,
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
            body: serializers.CreateCheckoutRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
                omitUndefined: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateCheckoutResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /v2/locations/{location_id}/checkouts.",
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
