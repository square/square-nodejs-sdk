import type { Square, SquareClient } from "../../src";
import { createClient, createTestCatalogItem, getTestFile, newTestSquareTempId, newTestUuid } from "./helpers";

const MAX_CATALOG_PAGE_SIZE = 100;
const MAX_RETRIES_CATALOG = 5;
const MAX_TIMEOUT = 120;

const sleep = (ms: number) =>
    new Promise((resolve) => {
        const timer = setTimeout(resolve, ms);
        timer.unref();
    });

async function deleteAllCatalogObjects(client: SquareClient): Promise<Square.BatchDeleteCatalogObjectsResponse> {
    const catalogObjectsResp = await client.catalog.list();
    const objectIds: string[] = [];
    catalogObjectsResp.data.forEach((catalogObject) => {
        if (!catalogObject.id) {
            return;
        }
        objectIds.push(catalogObject.id!);
        if (!("itemData" in catalogObject)) {
            return;
        }
        const variation = catalogObject.itemData?.variations?.[0];
        if (!variation || !variation.id) {
            return;
        }
        objectIds.push(variation.id);
    });
    return await client.catalog.batchDelete(
        { objectIds },
        {
            maxRetries: MAX_RETRIES_CATALOG,
            timeoutInSeconds: MAX_TIMEOUT,
        },
    );
}

describe("Catalog API", () => {
    const client: SquareClient = createClient();
    let catalogModifierListId: string;
    let catalogModifierId: string;
    let catalogTaxId: string;

    beforeAll(async () => {
        jest.setTimeout(240_000); // Set timeout for all tests
    }, 240_000);

    afterAll(async () => {
        // Cleanup any remaining objects
        try {
            await deleteAllCatalogObjects(client);
            // Create a promise that resolves after cleanup delay
            await new Promise((resolve) => {
                const timer = setTimeout(() => {
                    resolve(true);
                }, 2000);
                // Unref the timer so it doesn't keep the process alive
                timer.unref();
            });
        } catch (error) {
            console.warn("Cleanup failed:", error);
        }
    }, 240_000);

    it("should bulk create and iterate through paginated catalog objects", async () => {
        await deleteAllCatalogObjects(client);
        await sleep(2000); // Wait after deletion

        // Setup: Create 100 catalog objects with 1 CatalogItemVariation each
        const catalogObjects = Array(200)
            .fill(null)
            .map(() => createTestCatalogItem());

        // Create the catalog objects in a bulk request
        const createCatalogObjectsResp = await client.catalog.batchUpsert(
            {
                idempotencyKey: newTestUuid(),
                batches: [
                    {
                        objects: catalogObjects,
                    },
                ],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(createCatalogObjectsResp.objects).toHaveLength(200);
        await sleep(2000); // Wait after bulk creation

        // List all catalog objects
        let numberOfPages = 0;
        let catalogObjectsResp = await client.catalog.list();
        numberOfPages++;
        expect(catalogObjectsResp.data).toHaveLength(MAX_CATALOG_PAGE_SIZE);

        while (catalogObjectsResp.hasNextPage()) {
            await sleep(1000); // Wait between page requests
            catalogObjectsResp = await catalogObjectsResp.getNextPage();
            numberOfPages++;
        }

        expect(numberOfPages).toBeGreaterThan(1);
        await sleep(2000); // Wait before cleanup

        const deleteCatalogObjectsResp = await deleteAllCatalogObjects(client);
        expect(deleteCatalogObjectsResp.deletedObjectIds).toHaveLength(200);
    }, 240_000);

    it("should upload catalog image", async () => {
        // Add retry logic for the image upload
        const maxRetries = 5; // Increased from 3 to 5
        let lastError = null;

        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                // If this isn't the first attempt, wait before retrying
                if (attempt > 0) {
                    console.log(`Attempt ${attempt + 1} for image upload...`);
                    // Increase wait time between retries exponentially
                    await sleep(2 ** attempt * 5000);
                }

                console.log(`Starting image upload attempt ${attempt + 1}`);

                // Setup: Load a test image file
                const imageFile = await getTestFile();
                console.log("Test file loaded");

                // Setup: Create a catalog object to associate the image with
                const catalogObject = createTestCatalogItem();

                // Add delay before catalog creation
                await sleep(3000);
                console.log("Creating catalog object...");

                const createCatalogResp = await client.catalog.batchUpsert(
                    {
                        idempotencyKey: newTestUuid(),
                        batches: [
                            {
                                objects: [catalogObject],
                            },
                        ],
                    },
                    {
                        maxRetries: MAX_RETRIES_CATALOG * 2,
                        timeoutInSeconds: MAX_TIMEOUT,
                    },
                );

                console.log("Catalog object created");
                expect(createCatalogResp.objects).toHaveLength(1);
                const createdCatalogObject = createCatalogResp.objects?.[0];
                expect(createdCatalogObject).toBeDefined();

                // Add delay before image upload
                await sleep(5000);
                console.log("Uploading image...");

                // Create a new catalog image
                const imageName = `Test Image ${newTestUuid()}`;
                const createCatalogImageResp = await client.catalog.images.create(
                    {
                        imageFile,
                        request: {
                            idempotencyKey: newTestUuid(),
                            objectId: createdCatalogObject?.id,
                            image: {
                                type: "IMAGE",
                                id: newTestSquareTempId(),
                                imageData: {
                                    name: imageName,
                                },
                            },
                        },
                    },
                    {
                        maxRetries: MAX_RETRIES_CATALOG,
                        timeoutInSeconds: 180, // Increased timeout for image upload
                    },
                );

                console.log("Image uploaded successfully");
                expect(createCatalogImageResp.image).toBeDefined();

                // Add delay before cleanup
                await sleep(3000);
                console.log("Starting cleanup...");

                // Cleanup: Delete the created catalog object and image
                await client.catalog.batchDelete(
                    {
                        objectIds: [createdCatalogObject?.id!, createCatalogImageResp.image?.id!],
                    },
                    {
                        maxRetries: MAX_RETRIES_CATALOG,
                        timeoutInSeconds: MAX_TIMEOUT,
                    },
                );

                console.log("Cleanup completed");
                // If we get here, the test succeeded, so break out of retry loop
                return;
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${attempt + 1} failed with error:`, error);
                // If this was the last attempt, the error will be thrown below
            }
        }

        // If we get here, all retries failed
        console.log("All image upload attempts failed");
        throw lastError;
    }, 360_000);

    it("should test upsert catalog object", async () => {
        const coffee = createTestCatalogItem({
            name: "Coffee",
            description: "Strong coffee",
            abbreviation: "C",
            price: BigInt(100),
            variationName: "Colombian Fair Trade",
        });

        await sleep(2000); // Wait before upsert

        const response = await client.catalog.object.upsert(
            {
                object: coffee,
                idempotencyKey: newTestUuid(),
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
        const catalogObject = response.catalogObject as Square.CatalogObject.Item;

        expect(response).toBeDefined();
        expect(catalogObject).toBeDefined();
        expect(catalogObject.type).toBe("ITEM");
        expect(catalogObject.itemData?.variations).toHaveLength(1);

        const variation = catalogObject.itemData?.variations?.[0] as Square.CatalogObject.ItemVariation;
        expect(variation.itemVariationData?.name).toBe("Colombian Fair Trade");
    }, 240_000);

    it("should test catalog info", async () => {
        await sleep(2000); // Wait before info request
        const response = await client.catalog.info();
        expect(response).toBeDefined();
    }, 240_000);

    it("should test list catalog", async () => {
        await sleep(2000); // Wait before list request
        const response = await client.catalog.list();
        expect(response).toBeDefined();
    }, 240_000);

    it("should test search catalog objects", async () => {
        await sleep(2000); // Wait before search
        const response = await client.catalog.search({
            limit: 1,
        });
        expect(response).toBeDefined();
    }, 240_000);

    it("should test search catalog items", async () => {
        await sleep(2000); // Wait before search items
        const response = await client.catalog.searchItems({
            limit: 1,
        });
        expect(response).toBeDefined();
    }, 240_000);

    it("should test batch upsert catalog objects", async () => {
        await sleep(2000); // Wait before batch upsert

        const modifier: Square.CatalogObject = {
            type: "MODIFIER",
            id: "#temp-modifier-id",
            modifierData: {
                name: "Limited Time Only Price",
                priceMoney: {
                    amount: BigInt(200),
                    currency: "USD",
                },
            },
        };

        const modifierList: Square.CatalogObject = {
            type: "MODIFIER_LIST",
            id: "#temp-modifier-list-id",
            modifierListData: {
                name: "Special weekend deals",
                modifiers: [modifier],
            },
        };

        const tax: Square.CatalogObject = {
            type: "TAX",
            id: "#temp-tax-id",
            taxData: {
                name: "Online only Tax",
                calculationPhase: "TAX_SUBTOTAL_PHASE",
                inclusionType: "ADDITIVE",
                percentage: "5.0",
                appliesToCustomAmounts: true,
                enabled: true,
            },
        };

        const response = await client.catalog.batchUpsert(
            {
                idempotencyKey: newTestUuid(),
                batches: [
                    {
                        objects: [tax, modifierList],
                    },
                ],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(response).toBeDefined();
        expect(response.objects).toHaveLength(2);

        // Store IDs for later use
        response.idMappings?.forEach(({ clientObjectId, objectId }) => {
            if (clientObjectId === "#temp-tax-id") catalogTaxId = objectId!;
            if (clientObjectId === "#temp-modifier-id") catalogModifierId = objectId!;
            if (clientObjectId === "#temp-modifier-list-id") catalogModifierListId = objectId!;
        });
    }, 240_000);

    it("should test retrieve catalog object", async () => {
        await sleep(5000); // Wait before test start to avoid rate limiting

        // First create a catalog object
        const coffee = createTestCatalogItem();
        const createResp = await client.catalog.object.upsert(
            {
                object: coffee,
                idempotencyKey: newTestUuid(),
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        await sleep(3000); // Wait before retrieve

        // Then retrieve it
        const response = await client.catalog.object.get({
            objectId: createResp.catalogObject?.id!,
        });
        expect(response.object).toBeDefined();
        expect(response.object?.id).toBe(createResp.catalogObject?.id);

        await sleep(3000); // Wait before cleanup

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject?.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    }, 240_000);

    it("should test batch retrieve catalog objects", async () => {
        await sleep(5000); // Wait before batch retrieve

        // Use the IDs created in the batch upsert test
        const response = await client.catalog.batchGet({
            objectIds: [catalogModifierId, catalogModifierListId, catalogTaxId],
        });

        expect(response.objects).toBeDefined();
        expect(response.objects).toHaveLength(3);
        expect(response.objects?.map((obj) => obj.id)).toEqual(
            expect.arrayContaining([catalogModifierId, catalogModifierListId, catalogTaxId]),
        );
    }, 240_000);

    it("should test update item taxes", async () => {
        await sleep(5000); // Wait before test start

        // First create a test item
        const item = createTestCatalogItem();
        const createResp = await client.catalog.object.upsert(
            {
                object: item,
                idempotencyKey: newTestUuid(),
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        await sleep(3000); // Wait before update

        const response = await client.catalog.updateItemTaxes(
            {
                itemIds: [createResp.catalogObject?.id!],
                taxesToEnable: [catalogTaxId],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(response.updatedAt).toBeDefined();

        await sleep(3000); // Wait before cleanup

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject?.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    }, 240_000);

    it("should test update item modifier lists", async () => {
        await sleep(5000); // Wait before test start

        // First create a test item
        const item = createTestCatalogItem();
        const createResp = await client.catalog.object.upsert(
            {
                object: item,
                idempotencyKey: newTestUuid(),
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        await sleep(3000); // Wait before update

        const response = await client.catalog.updateItemModifierLists(
            {
                itemIds: [createResp.catalogObject?.id!],
                modifierListsToEnable: [catalogModifierListId],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(response.updatedAt).toBeDefined();

        await sleep(3000); // Wait before cleanup

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject?.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    }, 240_000);
});
