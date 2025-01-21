import { createClient, getDefaultLocationId } from "./helpers";

describe("CashDrawers API", () => {
    const client = createClient();

    it("should list cash drawer shifts", async () => {
        const start = new Date(Date.now() - 1000 * 60 * 60).toISOString();
        const end = new Date().toISOString();
        const response = await client.cashDrawers.shifts.list({
            locationId: await getDefaultLocationId(client),
            beginTime: start,
            endTime: end,
        });
        expect(response).toBeDefined();
        expect(response.data).toBeDefined();
    });
});
