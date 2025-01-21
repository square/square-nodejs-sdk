import { createClient, createTestCatalogItem, getTestFile, newTestSquareTempId, newTestUuid } from "./helpers";
import { Square, SquareClient } from "../../src";

const MAX_CATALOG_PAGE_SIZE = 100;
const MAX_RETRIES_CATALOG = 5;
const MAX_TIMEOUT = 120;

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
    jest.setTimeout(120_000);

    it("should bulk create and iterate through paginated catalog objects", async () => {
        await deleteAllCatalogObjects(client);

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

        // List all catalog objects
        let numberOfPages = 0;
        let catalogObjectsResp = await client.catalog.list();
        numberOfPages++;
        expect(catalogObjectsResp.data).toHaveLength(MAX_CATALOG_PAGE_SIZE);

        while (catalogObjectsResp.hasNextPage()) {
            catalogObjectsResp = await catalogObjectsResp.getNextPage();
            numberOfPages++;
        }

        expect(numberOfPages).toBeGreaterThan(1);

        const deleteCatalogObjectsResp = await deleteAllCatalogObjects(client);
        expect(deleteCatalogObjectsResp.deletedObjectIds).toHaveLength(200);
    });

    it("should upload catalog image", async () => {
        // Setup: Load a test image file
        const imageFile = await getTestFile();

        // Setup: Create a catalog object to associate the image with
        const catalogObject = createTestCatalogItem();
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
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(createCatalogResp.objects).toHaveLength(1);
        const createdCatalogObject = createCatalogResp.objects?.[0];
        expect(createdCatalogObject).toBeDefined();

        // Create a new catalog image
        const imageName = `Test Image ${newTestUuid()}`;
        const createCatalogImageResp = await client.catalog.images.create(
            {
                imageFile,
                request: {
                    idempotencyKey: newTestUuid(),
                    objectId: createdCatalogObject!.id,
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
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(createCatalogImageResp.image).toBeDefined();

        // Cleanup: Delete the created catalog object and image
        await client.catalog.batchDelete(
            {
                objectIds: [createdCatalogObject!.id!, createCatalogImageResp.image!.id!],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    });

    it("should test upsert catalog object", async () => {
        const coffee = createTestCatalogItem({
            name: "Coffee",
            description: "Strong coffee",
            abbreviation: "C",
            price: BigInt(100),
            variationName: "Colombian Fair Trade",
        });

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
    });

    it("should test catalog info", async () => {
        const response = await client.catalog.info();
        expect(response).toBeDefined();
    });

    it("should test list catalog", async () => {
        const response = await client.catalog.list();
        expect(response).toBeDefined();
    });

    it("should test search catalog objects", async () => {
        const response = await client.catalog.search({
            limit: 1,
        });
        expect(response).toBeDefined();
    });

    it("should test search catalog items", async () => {
        const response = await client.catalog.searchItems({
            limit: 1,
        });
        expect(response).toBeDefined();
    });

    it("should test batch upsert catalog objects", async () => {
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
    });

    it("should test retrieve catalog object", async () => {
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

        // Then retrieve it
        const response = await client.catalog.object.get({
            objectId: createResp.catalogObject!.id!,
        });
        expect(response.object).toBeDefined();
        expect(response.object!.id).toBe(createResp.catalogObject!.id);

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject!.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    });

    it("should test batch retrieve catalog objects", async () => {
        // Use the IDs created in the batch upsert test
        const response = await client.catalog.batchGet({
            objectIds: [catalogModifierId, catalogModifierListId, catalogTaxId],
        });

        expect(response.objects).toBeDefined();
        expect(response.objects).toHaveLength(3);
        expect(response.objects!.map((obj) => obj.id)).toEqual(
            expect.arrayContaining([catalogModifierId, catalogModifierListId, catalogTaxId]),
        );
    });

    it("should test update item taxes", async () => {
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

        const response = await client.catalog.updateItemTaxes(
            {
                itemIds: [createResp.catalogObject!.id!],
                taxesToEnable: [catalogTaxId],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(response.updatedAt).toBeDefined();

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject!.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    });

    it("should test update item modifier lists", async () => {
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

        const response = await client.catalog.updateItemModifierLists(
            {
                itemIds: [createResp.catalogObject!.id!],
                modifierListsToEnable: [catalogModifierListId],
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );

        expect(response.updatedAt).toBeDefined();

        // Cleanup
        await client.catalog.object.delete(
            {
                objectId: createResp.catalogObject!.id!,
            },
            {
                maxRetries: MAX_RETRIES_CATALOG,
                timeoutInSeconds: MAX_TIMEOUT,
            },
        );
    });
});
