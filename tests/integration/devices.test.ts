import { createClient, newTestUuid } from "./helpers";
import { Square, SquareClient } from "../../src";

describe("Devices API", () => {
    const client: SquareClient = createClient();
    let deviceCodeId: string;

    beforeAll(async () => {
        const createResponse = await client.devices.codes.create({
            idempotencyKey: newTestUuid(),
            deviceCode: {
                productType: "TERMINAL_API",
            },
        });
        deviceCodeId = createResponse.deviceCode!.id!;
    });

    it("should list device codes", async () => {
        const response = await client.devices.codes.list();
        expect(response).toBeDefined();
        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should create device code", async () => {
        const response = await client.devices.codes.create({
            idempotencyKey: newTestUuid(),
            deviceCode: {
                productType: "TERMINAL_API",
            },
        });

        expect(response.deviceCode).toBeDefined();
        expect(response.deviceCode?.productType).toBe("TERMINAL_API");
    });

    it("should get device code", async () => {
        const response = await client.devices.codes.get({
            id: deviceCodeId,
        });

        expect(response.deviceCode).toBeDefined();
        expect(response.deviceCode?.id).toBe(deviceCodeId);
        expect(response.deviceCode?.productType).toBe("TERMINAL_API");
    });
});
