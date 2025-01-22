import { Client } from "../../legacy/exports";
import { createLegacyClient } from "./helpers";

describe("Legacy SDK", () => {
    const legacyClient: Client = createLegacyClient();

    it("should list locations", async () => {
        const response = await legacyClient.locationsApi.listLocations();

        expect(response.result.locations).toBeDefined();
        expect(response.result.locations?.length).toBeGreaterThan(0);
    });
});
