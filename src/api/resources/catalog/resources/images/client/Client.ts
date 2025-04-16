/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Square from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { toJson } from "../../../../../../core/json";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Images {
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

export class Images {
    constructor(protected readonly _options: Images.Options = {}) {}

    /**
     * Uploads an image file to be represented by a [CatalogImage](entity:CatalogImage) object that can be linked to an existing
     * [CatalogObject](entity:CatalogObject) instance. The resulting `CatalogImage` is unattached to any `CatalogObject` if the `object_id`
     * is not specified.
     *
     * This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
     * JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
     *
     * @param {Square.catalog.CreateImagesRequest} request
     * @param {Images.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.images.create({})
     */
    public async create(
        request: Square.catalog.CreateImagesRequest,
        requestOptions?: Images.RequestOptions,
    ): Promise<Square.CreateCatalogImageResponse> {
        const _request = await core.newFormData();
        if (request.request != null) {
            _request.append(
                "request",
                toJson(
                    serializers.CreateCatalogImageRequest.jsonOrThrow(request.request, {
                        unrecognizedObjectKeys: "strip",
                        omitUndefined: true,
                    }),
                ),
            );
        }

        if (request.imageFile != null) {
            await _request.appendFile("image_file", request.imageFile);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                "v2/catalog/images",
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
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateCatalogImageResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling POST /v2/catalog/images.");
            case "unknown":
                throw new errors.SquareError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Uploads a new image file to replace the existing one in the specified [CatalogImage](entity:CatalogImage) object.
     *
     * This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
     * JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
     *
     * @param {Square.catalog.UpdateImagesRequest} request
     * @param {Images.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.catalog.images.update({
     *         imageId: "image_id"
     *     })
     */
    public async update(
        request: Square.catalog.UpdateImagesRequest,
        requestOptions?: Images.RequestOptions,
    ): Promise<Square.UpdateCatalogImageResponse> {
        const _request = await core.newFormData();
        if (request.request != null) {
            _request.append(
                "request",
                toJson(
                    serializers.UpdateCatalogImageRequest.jsonOrThrow(request.request, {
                        unrecognizedObjectKeys: "strip",
                        omitUndefined: true,
                    }),
                ),
            );
        }

        if (request.imageFile != null) {
            await _request.appendFile("image_file", request.imageFile);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SquareEnvironment.Production,
                `v2/catalog/images/${encodeURIComponent(request.imageId)}`,
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
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UpdateCatalogImageResponse.parseOrThrow(_response.body, {
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
                throw new errors.SquareTimeoutError("Timeout exceeded when calling PUT /v2/catalog/images/{image_id}.");
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
