import { SquareClient } from "../../src";
import { createClient } from "./helpers";

describe("CustomerSegments API", () => {
    const client: SquareClient = createClient();

    it("should list customer segments", async () => {
        const response = await client.customers.segments.list();

        expect(response.data).toBeDefined();
        expect(response.data.length).toBeGreaterThan(0);
    });

    it("should retrieve a customer segment", async () => {
        const listResponse = await client.customers.segments.list();
        const segmentId = listResponse.data[0].id;

        const response = await client.customers.segments.get({ segmentId: segmentId! });

        expect(response.segment).toBeDefined();
        expect(response.segment?.name).toBeDefined();
    });
});
