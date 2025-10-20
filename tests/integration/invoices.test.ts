import type { SquareClient } from "../../src";
import { createClient, newTestUuid } from "./helpers";

describe("Invoices API", () => {
    const client: SquareClient = createClient();
    let locationId: string;
    let customerId: string;
    let orderId: string;
    let invoiceId: string;
    let paymentRequestUid: string;

    beforeAll(async () => {
        // Get first location
        const locationResponse = await client.locations.list();
        locationId = locationResponse.locations?.[0].id!;

        // Create test order
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

        // Create test customer
        const customerResponse = await client.customers.create({
            idempotencyKey: newTestUuid(),
            givenName: "Amelia",
            familyName: "Earhart",
            phoneNumber: "1-212-555-4240",
            note: "a customer",
            address: {
                addressLine1: "500 Electric Ave",
                addressLine2: "Suite 600",
                locality: "New York",
                administrativeDistrictLevel1: "NY",
                postalCode: "10003",
                country: "US",
            },
        });
        customerId = customerResponse.customer?.id!;

        // Create test invoice
        const invoiceResponse = await client.invoices.create({
            idempotencyKey: newTestUuid(),
            invoice: {
                title: "Brand New Invoice",
                description: "A Blank Invoice",
                orderId: orderId,
                locationId: locationId,
                paymentRequests: [
                    {
                        requestType: "BALANCE",
                        dueDate: new Date().toISOString().slice(0, 10),
                    },
                ],
                invoiceNumber: String(Math.floor(Math.random() * (100000000 - 10000000) + 10000000)),
                deliveryMethod: "SHARE_MANUALLY",
                acceptedPaymentMethods: {
                    card: true,
                    bankAccount: true,
                    squareGiftCard: false,
                },
                primaryRecipient: {
                    customerId: customerId,
                },
            },
        });
        invoiceId = invoiceResponse.invoice?.id!;
        paymentRequestUid = invoiceResponse.invoice?.paymentRequests?.[0].uid!;

        expect(invoiceResponse.invoice).toEqual(
            expect.objectContaining({
                title: "Brand New Invoice",
                description: "A Blank Invoice",
                orderId: orderId,
                locationId: locationId,
                acceptedPaymentMethods: expect.objectContaining({
                    card: true,
                    bankAccount: true,
                    squareGiftCard: false,
                }),
                paymentRequests: [
                    expect.objectContaining({
                        requestType: "BALANCE",
                        dueDate: expect.any(String),
                    }),
                ],
                primaryRecipient: expect.objectContaining({
                    customerId: customerId,
                }),
            }),
        );
    });

    afterAll(async () => {
        await client.customers.delete({
            customerId,
        });
    });

    it("should list invoices", async () => {
        const response = await client.invoices.list({
            locationId,
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should search invoices", async () => {
        const response = await client.invoices.search({
            limit: 1,
            query: {
                filter: {
                    locationIds: [locationId],
                },
            },
        });

        expect(response.invoices).toBeDefined();
        expect(response.invoices?.length).toBeGreaterThan(0);
    });

    it("should get invoice", async () => {
        const response = await client.invoices.get({
            invoiceId,
        });

        expect(response.invoice).toBeDefined();
        expect(response.invoice?.id).toBe(invoiceId);
    });

    it("should update invoice", async () => {
        const response = await client.invoices.update({
            invoiceId,
            invoice: {
                version: 0,
                title: "Updated Invoice",
                description: "A Blank Invoice",
                orderId: orderId,
                locationId: locationId,
                acceptedPaymentMethods: {
                    card: true,
                    bankAccount: true,
                    squareGiftCard: false,
                },
                paymentRequests: [
                    {
                        requestMethod: "SHARE_MANUALLY",
                        requestType: "BALANCE",
                        dueDate: new Date().toISOString().slice(0, 10),
                    },
                ],
            },
            idempotencyKey: newTestUuid(),
            fieldsToClear: [`payment_requests[${paymentRequestUid}]`],
        });

        expect(response.invoice).toBeDefined();
        expect(response.invoice?.title).toBe("Updated Invoice");
    });

    it("should publish invoice", async () => {
        const response = await client.invoices.publish({
            invoiceId,
            version: 1,
            idempotencyKey: newTestUuid(),
        });

        expect(response.invoice).toBeDefined();
        expect(response.invoice?.status).toBe("UNPAID");
    });

    it("should cancel invoice", async () => {
        const response = await client.invoices.cancel({
            invoiceId,
            version: 2,
        });

        expect(response.invoice).toBeDefined();
        expect(response.invoice?.status).toBe("CANCELED");
    });

    it("should delete invoice", async () => {
        // Create new order for deletion test
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

        // Create new invoice for deletion test
        const invoiceResponse = await client.invoices.create({
            idempotencyKey: newTestUuid(),
            invoice: {
                title: "Brand New Invoice",
                description: "A Blank Invoice",
                locationId: locationId,
                orderId: orderResponse.order?.id!,
                paymentRequests: [
                    {
                        requestMethod: "SHARE_MANUALLY",
                        requestType: "BALANCE",
                        dueDate: new Date().toISOString().slice(0, 10),
                    },
                ],
                acceptedPaymentMethods: {
                    card: true,
                    bankAccount: true,
                    squareGiftCard: false,
                },
            },
        });

        const response = await client.invoices.delete({
            invoiceId: invoiceResponse.invoice?.id!,
            version: 0,
        });

        expect(response).toBeDefined();
    });
});
