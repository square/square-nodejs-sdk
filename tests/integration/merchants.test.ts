import type { SquareClient } from "../../src";
import { createClient } from "./helpers";

describe("Merchants API", () => {
    const client: SquareClient = createClient();
    let merchantId: string;

    beforeAll(async () => {
        // Get first merchant ID
        const merchantResponse = await client.merchants.list();
        merchantId = merchantResponse.data?.[0].id!;
    });

    it("should list merchants", async () => {
        const response = await client.merchants.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should retrieve merchant", async () => {
        const response = await client.merchants.get({
            merchantId,
        });

        expect(response.merchant).toBeDefined();
        expect(response.merchant?.id).toBe(merchantId);
    });
});
