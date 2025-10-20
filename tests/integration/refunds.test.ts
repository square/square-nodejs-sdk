import { type SquareClient, SquareError } from "../../src";
import { createClient, newTestUuid } from "./helpers";

describe("Refunds API", () => {
    const client: SquareClient = createClient();
    let paymentId: string;
    let refundId: string;

    beforeAll(async () => {
        // Create payment for testing refunds
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
            autocomplete: true,
        });
        paymentId = paymentResponse.payment?.id!;

        // Create initial refund for testing
        const refundResponse = await client.refunds.refundPayment({
            idempotencyKey: newTestUuid(),
            paymentId,
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
        });
        refundId = refundResponse.refund?.id!;
    });

    it("should list payment refunds", async () => {
        const response = await client.refunds.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should refund payment", async () => {
        // Create new payment to refund
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
            autocomplete: true,
        });

        const response = await client.refunds.refundPayment({
            idempotencyKey: newTestUuid(),
            paymentId: paymentResponse.payment?.id!,
            amountMoney: {
                amount: BigInt(200),
                currency: "USD",
            },
        });

        expect(response.refund).toBeDefined();
        expect(response.refund?.paymentId).toBe(paymentResponse.payment?.id);
    });

    it("should get payment refund", async () => {
        const response = await client.refunds.get({
            refundId,
        });

        expect(response.refund).toBeDefined();
        expect(response.refund?.id).toBe(refundId);
        expect(response.refund?.paymentId).toBe(paymentId);
    });

    it("should handle invalid refund ID", async () => {
        await expect(
            client.refunds.get({
                refundId: "invalid-id",
            }),
        ).rejects.toThrow(SquareError);
    });
});
