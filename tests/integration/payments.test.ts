import { createClient, getDefaultLocationId, newTestUuid } from "./helpers";
import { SquareClient } from "../../src";

describe("Payments API", () => {
    const client: SquareClient = createClient();
    let paymentId: string;
    let locationId: string;

    beforeAll(async () => {
        locationId = await getDefaultLocationId(client);

        // Create initial payment for testing
        const paymentResponse = await client.payments.create({
            sourceId: "cnon:card-nonce-ok",
            idempotencyKey: newTestUuid(),
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
            appFeeMoney: {
                amount: BigInt(10),
                currency: "USD",
            },
            autocomplete: false,
        });
        paymentId = paymentResponse.payment!.id!;
    });

    it("should list payments", async () => {
        const response = await client.payments.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should create payment", async () => {
        const response = await client.payments.create({
            sourceId: "cnon:card-nonce-ok",
            idempotencyKey: newTestUuid(),
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
            appFeeMoney: {
                amount: BigInt(10),
                currency: "USD",
            },
            autocomplete: true,
        });

        expect(response.payment).toBeDefined();
        expect(response.payment?.appFeeMoney?.amount).toBe(BigInt(10));
        expect(response.payment?.appFeeMoney?.currency).toBe("USD");
        expect(response.payment?.amountMoney?.amount).toBe(BigInt(200));
        expect(response.payment?.amountMoney?.currency).toBe("USD");
    });

    it("should get payment", async () => {
        const response = await client.payments.get({
            paymentId,
        });

        expect(response.payment).toBeDefined();
        expect(response.payment?.id).toBe(paymentId);
    });

    it("should cancel payment", async () => {
        const response = await client.payments.cancel({
            paymentId,
        });

        expect(response.payment).toBeDefined();
        expect(response.payment?.id).toBe(paymentId);
    });

    it("should cancel payment by idempotency key", async () => {
        const idempotencyKey = newTestUuid();

        // Create payment to cancel
        await client.payments.create({
            sourceId: "cnon:card-nonce-ok",
            idempotencyKey,
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
            appFeeMoney: {
                amount: BigInt(10),
                currency: "USD",
            },
            autocomplete: false,
        });

        // Cancel by idempotency key
        const response = await client.payments.cancelByIdempotencyKey({
            idempotencyKey,
        });

        expect(response).toBeDefined();
    });

    it("should complete payment", async () => {
        // Create payment to complete
        const createResponse = await client.payments.create({
            sourceId: "cnon:card-nonce-ok",
            idempotencyKey: newTestUuid(),
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
            appFeeMoney: {
                amount: BigInt(10),
                currency: "USD",
            },
            autocomplete: false,
        });

        const response = await client.payments.complete({
            paymentId: createResponse.payment!.id!,
        });

        expect(response.payment).toBeDefined();
        expect(response.payment?.status).toBe("COMPLETED");
    });
});
