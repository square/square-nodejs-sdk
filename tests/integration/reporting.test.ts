import { ReportingHelper, SquareClient, SquareEnvironment } from "../../src";
import type * as Square from "../../src/api";

// The Reporting API is a beta, bespoke offering served ONLY from production
// (connect.squareup.com/reporting) — it is not routed on sandbox (returns 404 there).
// So, unlike the other integration suites (which target sandbox), this one targets
// production by default and needs a production-capable TEST_SQUARE_TOKEN. The endpoints
// are read-only (schema discovery + queries), so running them against prod is safe.
// The polling *logic* is covered without a live account in tests/unit/reporting.test.ts.
//
// Run it:
//   TEST_SQUARE_TOKEN=<prod-access-token> yarn test:integration --testPathPattern reporting
//   # override the host with TEST_SQUARE_BASE_URL=<url> if reporting moves.

function createReportingClient(): SquareClient {
    const token = process.env.TEST_SQUARE_TOKEN;
    if (!token) {
        throw new Error("TEST_SQUARE_TOKEN must be set to run the reporting integration suite.");
    }
    // Reporting only exists on production; allow overriding the host via TEST_SQUARE_BASE_URL.
    const baseUrl = process.env.TEST_SQUARE_BASE_URL ?? SquareEnvironment.Production;
    // Make the live target unambiguous in the test output (useful when triaging CI).
    console.log(`[reporting] base URL: ${baseUrl}  ->  ${baseUrl}/reporting/v1/{meta,load}`);
    return new SquareClient({ token, baseUrl });
}

describe("Reporting API (live)", () => {
    let client: SquareClient;
    beforeAll(() => {
        client = createReportingClient();
    });

    // Resolves the first queryable measure from the live schema, e.g. "Orders.count".
    async function firstMeasureName(): Promise<string> {
        const metadata = await client.reporting.getMetadata();
        const measure = metadata.cubes?.[0]?.measures?.[0]?.name;
        if (!measure) {
            throw new Error("No cubes/measures are available on the reporting schema for this account.");
        }
        return measure;
    }

    it("getMetadata() returns the queryable schema (cubes + measures)", async () => {
        const metadata = await client.reporting.getMetadata();

        expect(metadata.cubes).toBeDefined();
        expect(metadata.cubes?.length ?? 0).toBeGreaterThan(0);

        // Surface the live schema so a developer can see what is queryable.
        const summary = (metadata.cubes ?? []).slice(0, 5).map((cube) => ({
            cube: cube.name,
            measures: (cube.measures ?? []).slice(0, 5).map((measure) => measure.name),
        }));
        console.log("Reporting schema (first 5 cubes):", JSON.stringify(summary, null, 2));
    });

    it("load() returns either results or the 'Continue wait' sentinel for an in-flight query", async () => {
        const measure = await firstMeasureName();
        const response = await client.reporting.load({ query: { measures: [measure] } });

        const sentinel = (response as unknown as { error?: string }).error;
        if (sentinel) {
            // Documented async behavior: a still-processing query comes back as HTTP 200
            // with { "error": "Continue wait" } instead of results.
            expect(sentinel).toBe("Continue wait");
        } else {
            expect(response.results).toBeDefined();
        }
    });

    it(
        "loadAndWait() resolves a query end-to-end without surfacing 'Continue wait'",
        async () => {
            const measure = await firstMeasureName();

            const response: Square.LoadResponse = await ReportingHelper.loadAndWait(
                client,
                { query: { measures: [measure] } },
                { maxAttempts: 20, initialDelayMs: 2_000, maxDelayMs: 20_000 },
            );

            // The polling helper must never hand back the raw "Continue wait" sentinel.
            expect((response as unknown as { error?: string }).error).toBeUndefined();
            expect(response.results).toBeDefined();
        },
        5 * 60_000, // polling can take minutes; override jest's default 5s timeout
    );
});
