import type { SquareClient } from "../../src";
import { createClient, getDefaultLocationId } from "./helpers";

describe("MobileAuthorization API", () => {
    const client: SquareClient = createClient();

    it("should create mobile authorization code", async () => {
        const response = await client.mobile.authorizationCode({
            locationId: await getDefaultLocationId(client),
        });

        expect(response.authorizationCode).toBeDefined();
        expect(response.expiresAt).toBeDefined();
    });
});
