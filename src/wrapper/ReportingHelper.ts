import type * as Square from "../api";
import type { ReportingClient } from "../api/resources/reporting/client/Client";
import type { SquareClient } from "../Client";
import { SquareError } from "../errors";

/**
 * Sentinel returned by the Reporting API on an HTTP 200 while a `/v1/load`
 * query is still processing. It is NOT an error — the request should be retried.
 * See the {@link https://developer.squareup.com/docs/reporting-api/overview Reporting API docs}.
 */
const CONTINUE_WAIT = "Continue wait";

export interface LoadAndWaitOptions {
    /** Maximum poll attempts before giving up. Default 20. */
    maxAttempts?: number;
    /** Delay before the first retry, in ms. Default 2000. */
    initialDelayMs?: number;
    /** Upper bound on the backoff delay, in ms. Default 20000. */
    maxDelayMs?: number;
    /** Multiplier applied to the delay after each attempt. Default 2. */
    backoffFactor?: number;
    /** Aborts the poll loop (and the in-flight wait) when signalled. */
    signal?: AbortSignal;
    /** Forwarded to each underlying `client.reporting.load` call. */
    requestOptions?: ReportingClient.RequestOptions;
}

/**
 * Utility to help with the {@link https://developer.squareup.com/docs/reporting-api/overview Square Reporting API}.
 *
 * The `/v1/load` endpoint is asynchronous: a query that is still being computed
 * comes back as an HTTP 200 whose body is `{ "error": "Continue wait" }` rather
 * than the results. Clients are expected to re-send the identical request, with
 * backoff, until real results arrive. This helper owns that retry loop.
 */
export class ReportingHelper {
    /**
     * Runs a reporting query and transparently polls until it resolves, returning
     * the final {@link Square.LoadResponse}. Re-sends the identical request with
     * exponential backoff while the API answers "Continue wait".
     *
     * @param client    A configured {@link SquareClient}.
     * @param request   The reporting query (same shape as `client.reporting.load`).
     * @param options   Polling/backoff configuration.
     * @returns         The resolved `LoadResponse` (never the "Continue wait" sentinel).
     * @throws          {@link SquareError} if the query does not resolve within `maxAttempts`.
     */
    static async loadAndWait(
        client: SquareClient,
        request: Square.LoadRequest = {},
        options: LoadAndWaitOptions = {},
    ): Promise<Square.LoadResponse> {
        const {
            maxAttempts = 20,
            initialDelayMs = 2_000,
            maxDelayMs = 20_000,
            backoffFactor = 2,
            signal,
            requestOptions,
        } = options;

        let delayMs = initialDelayMs;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            if (signal?.aborted) {
                throw new SquareError({ message: "Reporting query polling was aborted." });
            }
            const response = await client.reporting.load(request, requestOptions);
            if (!ReportingHelper.isContinueWait(response)) {
                return response;
            }
            if (attempt === maxAttempts) {
                break;
            }
            await ReportingHelper.sleep(delayMs, signal);
            delayMs = Math.min(delayMs * backoffFactor, maxDelayMs);
        }
        throw new SquareError({
            message: `Reporting query did not complete after ${maxAttempts} attempts ("${CONTINUE_WAIT}").`,
        });
    }

    /**
     * A "Continue wait" body parses into a `LoadResponse` (validation is skipped)
     * with the `error` field preserved and `results` absent. That's the signal to retry.
     */
    private static isContinueWait(response: Square.LoadResponse): boolean {
        return (response as unknown as Square.ReportingError).error === CONTINUE_WAIT;
    }

    private static sleep(ms: number, signal?: AbortSignal): Promise<void> {
        return new Promise((resolve, reject) => {
            if (signal?.aborted) {
                reject(new SquareError({ message: "Reporting query polling was aborted." }));
                return;
            }
            const timer = setTimeout(() => {
                signal?.removeEventListener("abort", onAbort);
                resolve();
            }, ms);
            const onAbort = () => {
                clearTimeout(timer);
                reject(new SquareError({ message: "Reporting query polling was aborted." }));
            };
            signal?.addEventListener("abort", onAbort, { once: true });
        });
    }
}
