import { createClient, newTestUuid } from "./helpers";
import { SquareClient } from "../../src";

describe("Terminal API", () => {
    const client: SquareClient = createClient();
    let checkoutId: string;
    const sandboxDeviceId = "da40d603-c2ea-4a65-8cfd-f42e36dab0c7";

    beforeAll(async () => {
        // Create terminal checkout for testing
        const checkoutResponse = await client.terminal.checkouts.create({
            idempotencyKey: newTestUuid(),
            checkout: {
                deviceOptions: {
                    deviceId: sandboxDeviceId,
                },
                amountMoney: {
                    amount: BigInt(100),
                    currency: "USD",
                },
            },
        });
        checkoutId = checkoutResponse.checkout!.id!;
    });

    it("should create terminal checkout", async () => {
        const response = await client.terminal.checkouts.create({
            idempotencyKey: newTestUuid(),
            checkout: {
                deviceOptions: {
                    deviceId: sandboxDeviceId,
                },
                amountMoney: {
                    amount: BigInt(100),
                    currency: "USD",
                },
            },
        });

        expect(response.checkout).toBeDefined();
        expect(response.checkout?.deviceOptions?.deviceId).toBe(sandboxDeviceId);
        expect(response.checkout?.amountMoney?.amount).toBe(BigInt(100));
    });

    it("should search terminal checkouts", async () => {
        const response = await client.terminal.checkouts.search({
            limit: 1,
        });

        expect(response.checkouts).toBeDefined();
        expect(response.checkouts?.length).toBeGreaterThan(0);
    });

    it("should get terminal checkout", async () => {
        const response = await client.terminal.checkouts.get({
            checkoutId,
        });

        expect(response.checkout).toBeDefined();
        expect(response.checkout?.id).toBe(checkoutId);
    });

    it("should cancel terminal checkout", async () => {
        const response = await client.terminal.checkouts.cancel({
            checkoutId,
        });

        expect(response.checkout).toBeDefined();
        expect(response.checkout?.status).toBe("CANCELED");
    });
});
