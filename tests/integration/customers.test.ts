import type { SquareClient } from "../../src";
import { createClient, createTestCustomer, newTestUuid } from "./helpers";

describe("Customers API", () => {
    const client: SquareClient = createClient();
    let customerGroupId: string;
    let customAttributeKey: string;

    beforeAll(async () => {
        // Create a customer group for testing
        const createGroupResponse = await client.customers.groups.create({
            idempotencyKey: newTestUuid(),
            group: {
                name: `Test Group ${newTestUuid()}`,
            },
        });
        customerGroupId = createGroupResponse.group?.id!;

        // Create custom attribute definition
        customAttributeKey = `favorite-drink-${newTestUuid()}`;
        await client.customers.customAttributeDefinitions.create({
            customAttributeDefinition: {
                key: customAttributeKey,
                name: `Favorite Drink ${newTestUuid()}`,
                description: "A customer's favorite drink",
                visibility: "VISIBILITY_READ_WRITE_VALUES",
                schema: {
                    $ref: "https://developer-production-s.squarecdn.com/schemas/v1/common.json#squareup.common.String",
                },
            },
        });
    });

    afterAll(async () => {
        await client.customers.groups.delete({ groupId: customerGroupId });
        await client.customers.customAttributeDefinitions.delete({ key: customAttributeKey });
    });

    it("should create and retrieve a customer", async () => {
        const customerId = await createTestCustomer(client);

        const retrieveResponse = await client.customers.get({ customerId });
        expect(retrieveResponse.customer).toBeDefined();
        expect(retrieveResponse.customer?.givenName).toBe("Amelia");
        expect(retrieveResponse.customer?.familyName).toBe("Earhart");

        await client.customers.delete({ customerId });
    });

    it("should update a customer", async () => {
        const customerId = await createTestCustomer(client);

        const response = await client.customers.update({
            customerId,
            phoneNumber: "1-917-500-1000",
            note: "Updated test customer",
        });

        expect(response.customer).toBeDefined();
        expect(response.customer?.phoneNumber).toBe("1-917-500-1000");
        expect(response.customer?.note).toBe("Updated test customer");

        await client.customers.delete({ customerId });
    });

    it("should create customer card", async () => {
        const customerId = await createTestCustomer(client);

        const createCardResponse = await client.customers.cards.create({
            customerId,
            cardNonce: "cnon:card-nonce-ok",
        });

        expect(createCardResponse.card).toBeDefined();
        const customerCardId = createCardResponse.card?.id!;

        const deleteCardResponse = await client.customers.cards.delete({
            customerId,
            cardId: customerCardId,
        });
        expect(deleteCardResponse).toBeDefined();

        await client.customers.delete({ customerId });
    });

    it("should add customer to group", async () => {
        const customerId = await createTestCustomer(client);

        const addGroupResponse = await client.customers.groups.add({
            customerId,
            groupId: customerGroupId,
        });
        expect(addGroupResponse).toBeDefined();

        const removeGroupResponse = await client.customers.groups.remove({
            customerId,
            groupId: customerGroupId,
        });
        expect(removeGroupResponse).toBeDefined();

        await client.customers.delete({ customerId });
    });

    it("should create customer custom attribute", async () => {
        const customerId = await createTestCustomer(client);

        const createAttrResponse = await client.customers.customAttributes.upsert({
            customerId,
            key: customAttributeKey,
            customAttribute: {
                value: "Double-shot breve",
            },
        });

        expect(createAttrResponse.customAttribute).toBeDefined();
        expect(createAttrResponse.customAttribute?.value).toBe("Double-shot breve");
    });

    it("should update customer custom attribute", async () => {
        const customerId = await createTestCustomer(client);

        const updateAttrResponse = await client.customers.customAttributes.upsert({
            customerId,
            key: customAttributeKey,
            customAttribute: {
                value: "Black coffee",
            },
        });

        expect(updateAttrResponse.customAttribute?.value).toBe("Black coffee");
    });

    it("should list customer custom attributes", async () => {
        const customerId = await createTestCustomer(client);
        await client.customers.customAttributes.upsert({
            customerId,
            key: customAttributeKey,
            customAttribute: {
                value: "Double-shot breve",
            },
        });

        const listAttrResponse = await client.customers.customAttributes.list({
            customerId,
            withDefinitions: true,
        });
        expect(listAttrResponse).toBeDefined();
        expect(listAttrResponse.data).toBeDefined();
        expect(listAttrResponse.data?.length).toBeGreaterThan(0);

        const deleteAttrResponse = await client.customers.customAttributes.delete({
            customerId,
            key: customAttributeKey,
        });
        expect(deleteAttrResponse).toBeDefined();

        await client.customers.delete({ customerId });
    });

    it("should delete a custom attribute for a customer", async () => {
        const customerId = await createTestCustomer(client);
        await client.customers.customAttributes.upsert({
            customerId: customerId,
            key: customAttributeKey,
            customAttribute: {
                value: "Double-shot breve",
            },
        });

        const response = await client.customers.customAttributes.delete({
            customerId: customerId,
            key: customAttributeKey,
        });
        expect(response).toBeDefined();
    });

    it("should delete a custom attribute definition", async () => {
        const response = await client.customers.customAttributeDefinitions.delete({ key: customAttributeKey });
        expect(response).toBeDefined();
    });

    it("should delete a customer", async () => {
        const customerId = await createTestCustomer(client);
        const response = await client.customers.delete({ customerId });
        expect(response).toBeDefined();
    });
});
