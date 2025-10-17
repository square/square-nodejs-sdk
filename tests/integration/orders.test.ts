import type { SquareClient } from "../../src";
import { createClient, getDefaultLocationId, newTestUuid } from "./helpers";

describe("Orders API", () => {
    const client: SquareClient = createClient();
    let locationId: string;
    let orderId: string;
    let lineItemUid: string;

    beforeAll(async () => {
        locationId = await getDefaultLocationId(client);

        // Create initial order for testing
        const orderResponse = await client.orders.create({
            idempotencyKey: newTestUuid(),
            order: {
                locationId: locationId,
                lineItems: [
                    {
                        name: "New Item",
                        quantity: "1",
                        basePriceMoney: {
                            amount: BigInt(100),
                            currency: "USD",
                        },
                    },
                ],
            },
        });

        orderId = orderResponse.order?.id!;
        lineItemUid = orderResponse.order?.lineItems?.[0].uid!;
    });

    it("should create order", async () => {
        const response = await client.orders.create({
            idempotencyKey: newTestUuid(),
            order: {
                locationId: locationId,
                lineItems: [
                    {
                        name: "New Item",
                        quantity: "1",
                        basePriceMoney: {
                            amount: BigInt(100),
                            currency: "USD",
                        },
                    },
                ],
            },
        });

        expect(response.order).toBeDefined();
        expect(response.order?.locationId).toBe(locationId);
        expect(response.order?.lineItems?.[0].name).toBe("New Item");
    });

    it("should batch retrieve orders", async () => {
        const response = await client.orders.batchGet({
            orderIds: [orderId],
        });

        expect(response.orders).toBeDefined();
        expect(response.orders?.[0].id).toBe(orderId);
    });

    it("should search orders", async () => {
        const response = await client.orders.search({
            limit: 1,
            locationIds: [locationId],
        });

        expect(response.orders).toBeDefined();
        expect(response.orders?.length).toBeGreaterThan(0);
    });

    it("should update order", async () => {
        const response = await client.orders.update({
            orderId,
            idempotencyKey: newTestUuid(),
            order: {
                version: 1,
                locationId: locationId,
                lineItems: [
                    {
                        name: "Updated Item",
                        quantity: "1",
                        basePriceMoney: {
                            amount: BigInt(0),
                            currency: "USD",
                        },
                        note: null,
                    },
                ],
            },
            fieldsToClear: [`line_items[${lineItemUid}]`],
        });

        expect(response.order).toBeDefined();
        expect(response.order?.id).toBe(orderId);
        expect(response.order?.lineItems?.[0].name).toBe("Updated Item");
    });

    it("should pay order", async () => {
        const response = await client.orders.pay({
            orderId,
            idempotencyKey: newTestUuid(),
            orderVersion: 2,
            paymentIds: [],
        });

        expect(response.order).toBeDefined();
        expect(response.order?.id).toBe(orderId);
    });

    it("should calculate order", async () => {
        const response = await client.orders.calculate({
            order: {
                locationId: locationId,
                lineItems: [
                    {
                        name: "New Item",
                        quantity: "1",
                        basePriceMoney: {
                            amount: BigInt(100),
                            currency: "USD",
                        },
                    },
                ],
            },
        });

        expect(response.order).toBeDefined();
        expect(response.order?.totalMoney).toBeDefined();
    });
});
