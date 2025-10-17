import type { Square, SquareClient } from "../../src";
import { createClient, newTestUuid } from "./helpers";

describe("Inventory API", () => {
    const client: SquareClient = createClient();
    let locationId: string;
    let itemVariationId: string;
    let inventoryAdjustId: string;
    let physicalCountId: string;

    beforeAll(async () => {
        // Get the first location
        const locationResponse = await client.locations.list();
        locationId = locationResponse.locations?.[0].id!;

        // Create catalog item with variation
        const catalogResponse = await client.catalog.object.upsert({
            idempotencyKey: newTestUuid(),
            object: {
                id: "#single-item",
                type: "ITEM",
                presentAtAllLocations: true,
                itemData: {
                    name: "Coffee",
                    description: "Strong coffee",
                    abbreviation: "C",
                    variations: [
                        {
                            id: "#colombian-coffee",
                            type: "ITEM_VARIATION",
                            presentAtAllLocations: true,
                            itemVariationData: {
                                name: "Colombian Fair Trade",
                                trackInventory: true,
                                pricingType: "FIXED_PRICING",
                                priceMoney: {
                                    amount: BigInt(100),
                                    currency: "USD",
                                },
                            },
                        },
                    ],
                },
            },
        });
        itemVariationId = (catalogResponse.catalogObject as Square.CatalogObject.Item).itemData?.variations?.[0].id!;

        // Create initial inventory adjustment
        const eightHours = 1000 * 60 * 60 * 8;
        const _inventoryResponse = await client.inventory.batchCreateChanges({
            idempotencyKey: newTestUuid(),
            changes: [
                {
                    type: "ADJUSTMENT",
                    adjustment: {
                        catalogObjectId: itemVariationId,
                        locationId: locationId,
                        quantity: "100",
                        fromState: "NONE",
                        toState: "IN_STOCK",
                        occurredAt: new Date(Date.now() - eightHours).toISOString(),
                    },
                },
            ],
        });

        // Get the adjustment ID
        const changesResponse = await client.inventory.batchGetChanges({
            types: ["ADJUSTMENT"],
            catalogObjectIds: [itemVariationId],
            locationIds: [locationId],
        });
        inventoryAdjustId = changesResponse.data?.[0].adjustment?.id!;

        // Create physical count
        const _physicalCountResponse = await client.inventory.batchCreateChanges({
            idempotencyKey: newTestUuid(),
            changes: [
                {
                    type: "PHYSICAL_COUNT",
                    physicalCount: {
                        catalogObjectId: itemVariationId,
                        locationId: locationId,
                        quantity: "1",
                        state: "IN_STOCK",
                        occurredAt: new Date().toISOString(),
                    },
                },
            ],
        });

        const physicalChangesResponse = await client.inventory.batchGetChanges({
            types: ["PHYSICAL_COUNT"],
            catalogObjectIds: [itemVariationId],
            locationIds: [locationId],
        });
        physicalCountId = physicalChangesResponse.data?.[0].physicalCount?.id!;
    }, 30000); // Set a hook timeout of 30 seconds

    it("should retrieve inventory changes", async () => {
        const response = await client.inventory.batchGetChanges({
            catalogObjectIds: [itemVariationId],
            locationIds: [locationId],
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should retrieve inventory adjustment", async () => {
        const response = await client.inventory.getAdjustment({
            adjustmentId: inventoryAdjustId,
        });

        expect(response.adjustment).toBeDefined();
        expect(response.adjustment?.id).toBe(inventoryAdjustId);
    });

    it("should retrieve inventory count", async () => {
        const response = await client.inventory.get({
            catalogObjectId: itemVariationId,
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should batch retrieve inventory counts", async () => {
        const response = await client.inventory.batchGetCounts({
            catalogObjectIds: [itemVariationId],
            locationIds: [locationId],
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should retrieve physical count", async () => {
        const response = await client.inventory.getPhysicalCount({
            physicalCountId,
        });

        expect(response.count).toBeDefined();
        expect(response.count?.id).toBe(physicalCountId);
    });

    it("should batch change inventory", async () => {
        const response = await client.inventory.batchCreateChanges({
            idempotencyKey: newTestUuid(),
            changes: [
                {
                    type: "ADJUSTMENT",
                    adjustment: {
                        catalogObjectId: itemVariationId,
                        locationId: locationId,
                        quantity: "50", // Different quantity than setup
                        fromState: "NONE",
                        toState: "IN_STOCK",
                        occurredAt: new Date().toISOString(),
                    },
                },
            ],
        });

        expect(response.changes).toBeDefined();
        expect(response.changes?.length).toBeGreaterThan(0);
        expect(response.changes?.[0]).toMatchObject({
            type: "ADJUSTMENT",
            adjustment: {
                catalogObjectId: itemVariationId,
                locationId: locationId,
                quantity: "50",
            },
        });
    });

    it("should retrieve inventory changes for specific catalog object", async () => {
        const response = await client.inventory.changes({
            catalogObjectId: itemVariationId,
        });

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
        expect(response.data?.[0].adjustment?.catalogObjectId).toBe(itemVariationId);
    });
});
