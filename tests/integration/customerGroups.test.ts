import { Square, SquareClient, SquareError } from "../../src";
import { createClient, newTestUuid } from "./helpers";

async function createTestCustomerGroup(client: SquareClient): Promise<Square.CreateCustomerGroupResponse> {
    return await client.customers.groups.create({
        idempotencyKey: newTestUuid(),
        group: {
            name: `Default-${newTestUuid()}`,
        },
    });
}

function deleteTestCustomerGroup(client: SquareClient, groupId: string): Promise<Square.DeleteCustomerGroupResponse> {
    return client.customers.groups.delete({ groupId });
}

describe("CustomerGroups API", () => {
    const client = createClient();

    it("should create and list a customer group", async () => {
        // create
        const response = await createTestCustomerGroup(client);

        expect(response.group).toBeDefined();
        expect(response.group?.name).toBeDefined();

        // list
        const listResponse = await client.customers.groups.list();

        expect(listResponse.data).toBeDefined();
        expect(listResponse.data.length).toBeGreaterThan(0);

        // Cleanup
        await deleteTestCustomerGroup(client, response.group?.id!);
    });

    it("should retrieve a customer group", async () => {
        const createResponse = await createTestCustomerGroup(client);

        const getResponse = await client.customers.groups.get({ groupId: createResponse.group?.id! });

        expect(getResponse.group).toEqual(expect.objectContaining(createResponse.group));

        // Cleanup
        await deleteTestCustomerGroup(client, createResponse.group?.id!);
    });

    it("should update a customer group", async () => {
        const createResponse = await createTestCustomerGroup(client);

        const newName = `Updated-${newTestUuid()}`;
        const updateResponse = await client.customers.groups.update({
            groupId: createResponse.group?.id!,
            group: { name: newName },
        });

        expect(updateResponse.group).toEqual(expect.objectContaining({ name: newName }));

        // Cleanup
        await deleteTestCustomerGroup(client, createResponse.group?.id!);
    });

    it("should delete a customer group", async () => {
        const createResponse = await createTestCustomerGroup(client);

        const deleteResponse = await deleteTestCustomerGroup(client, createResponse.group?.id!);

        expect(deleteResponse).toBeDefined();
        expect(deleteResponse.errors).toBeUndefined();
    });

    it("should handle error when retrieving non-existent group", async () => {
        const nonExistentId = "non-existent-id";

        expect(async () => await client.customers.groups.get({ groupId: nonExistentId })).rejects.toThrow(SquareError);
    });

    it("should handle error when creating group with invalid data", async () => {
        expect(
            async () =>
                await client.customers.groups.create({
                    idempotencyKey: newTestUuid(),
                    group: {
                        name: "", // Empty name should be invalid
                    },
                }),
        ).rejects.toThrow(SquareError);
    });
});
