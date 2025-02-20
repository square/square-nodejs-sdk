/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Shifts } from "../resources/shifts/client/Client";

export declare namespace CashDrawers {
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

export class CashDrawers {
    protected _shifts: Shifts | undefined;

    constructor(protected readonly _options: CashDrawers.Options = {}) {}

    public get shifts(): Shifts {
        return (this._shifts ??= new Shifts(this._options));
    }
}
