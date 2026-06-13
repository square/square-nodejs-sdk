import type { SquareClient } from "../../src";
import { ReportingHelper } from "../../src";
import type * as Square from "../../src/api";
import * as serializers from "../../src/serialization";

/**
 * The Reporting API answers a still-processing `/v1/load` query with an HTTP 200
 * whose body is `{ "error": "Continue wait" }`. `ReportingHelper.loadAndWait` owns
 * the retry loop around that sentinel. These tests exercise that loop without a
 * network by scripting `client.reporting.load`, plus one test that proves the
 * sentinel actually survives the generated client's deserialization.
 */

const CONTINUE_WAIT = "Continue wait";

/** A `SquareClient` stub whose `reporting.load` returns a scripted sequence of responses. */
function fakeClient(sequence: Square.LoadResponse[]): { client: SquareClient; callCount: () => number } {
    let i = 0;
    const client = {
        reporting: {
            load: async (): Promise<Square.LoadResponse> => {
                const response = sequence[Math.min(i, sequence.length - 1)];
                i += 1;
                return response;
            },
        },
    } as unknown as SquareClient;
    return { client, callCount: () => i };
}

const continueWait = { error: CONTINUE_WAIT } as unknown as Square.LoadResponse;
const resolved = { results: [{ data: { "Orders.count": "128" } }] } as unknown as Square.LoadResponse;

describe("ReportingHelper.loadAndWait", () => {
    it("polls past 'Continue wait' responses and returns the resolved result", async () => {
        const { client, callCount } = fakeClient([continueWait, continueWait, resolved]);

        const response = await ReportingHelper.loadAndWait(
            client,
            { query: { measures: ["Orders.count"] } },
            { initialDelayMs: 1, maxDelayMs: 1, maxAttempts: 5 },
        );

        // The helper must never hand back the raw sentinel.
        expect((response as unknown as { error?: string }).error).toBeUndefined();
        expect(response.results).toBeDefined();
        expect(callCount()).toBe(3);
    });

    it("returns immediately when the first response already has results", async () => {
        const { client, callCount } = fakeClient([resolved]);

        const response = await ReportingHelper.loadAndWait(client, {}, { initialDelayMs: 1 });

        expect(response.results).toBeDefined();
        expect(callCount()).toBe(1);
    });

    it("throws once maxAttempts is exhausted while still 'Continue wait'", async () => {
        const { client, callCount } = fakeClient([continueWait]); // never resolves

        await expect(
            ReportingHelper.loadAndWait(client, {}, { initialDelayMs: 1, maxDelayMs: 1, maxAttempts: 3 }),
        ).rejects.toThrow(/did not complete after 3 attempts/);
        expect(callCount()).toBe(3);
    });

    it("rejects promptly when the abort signal fires mid-poll", async () => {
        const { client } = fakeClient([continueWait]); // would otherwise poll forever
        const controller = new AbortController();

        const pending = ReportingHelper.loadAndWait(
            client,
            {},
            {
                initialDelayMs: 1_000,
                maxAttempts: 10,
                signal: controller.signal,
            },
        );
        controller.abort();

        await expect(pending).rejects.toThrow(/aborted/);
    });

    it("treats a real-serializer 'Continue wait' body as a retry signal, not a result", async () => {
        // The crux of the design: the generated `reporting.load` parses the body with
        // skipValidation + passthrough, so the `error` sentinel survives onto a
        // LoadResponse-shaped object (and `results` stays absent). If this ever stops
        // being true, loadAndWait would mistake "Continue wait" for a real result.
        const parsed = serializers.LoadResponse.parseOrThrow(
            { error: CONTINUE_WAIT },
            {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            },
        ) as unknown as { error?: string; results?: unknown };

        expect(parsed.error).toBe(CONTINUE_WAIT);
        expect(parsed.results).toBeUndefined();
    });
});
