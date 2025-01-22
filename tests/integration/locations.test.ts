import { createClient } from "./helpers";

describe("Locations API", () => {
    const client = createClient();

    it("should list locations", async () => {
        const response = await client.locations.list();

        expect(response.locations).toBeDefined();
        expect(response.locations?.length).toBeGreaterThan(0);
    });
});
