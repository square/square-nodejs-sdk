import { Customers } from "../../src/api/resources/customers/client/Client";
import { Catalog } from "../../src/api/resources/catalog/client/Client";
import {
    createClient,
    createTestCatalogItem,
    createTestCustomer,
    newTestUuid,
} from "./helpers";

// Add a sleep helper function
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type TestClient = Customers | Catalog;

describe("Pagination", () => {
    const client = createClient();

    interface TestCase {
        name: string;
        client: TestClient;
        limit: number;
        perPage?: number;
        greaterThan: number;
        setup: () => Promise<any>;
    }

    const testCases: TestCase[] = [
        {
            name: "customers",
            client: client.customers,
            limit: 5,
            perPage: 1,
            greaterThan: 4,
            async setup() {
                // Add sequential processing with delays instead of Promise.all
                for (let i = 0; i < 5; i++) {
                    await createTestCustomer(client);
                    await sleep(1000); // Wait 1 second between customer creations
                }
            },
        },
        {
            name: "catalog",
            client: client.catalog,
            limit: 5,
            greaterThan: 4,
            async setup() {
                // Create items sequentially with delays instead of in parallel
                for (let i = 0; i < 5; i++) {
                    const item = createTestCatalogItem();
                    await client.catalog.object.upsert(
                        {
                            idempotencyKey: newTestUuid(),
                            object: item,
                        },
                        {
                            maxRetries: 5,
                            timeoutInSeconds: 60,
                        },
                    );
                    await sleep(2000); // Wait 2 seconds between catalog operations
                }
            },
        },
    ];

    async function testIterator({
        client,
        limit,
        params,
    }: {
        client: TestClient;
        limit: number;
        params: Record<string, any>;
    }) {
        const page = await client.list(params);
        expect(page).toBeDefined();

        let count = 0;
        let currentPage = page;

        while (currentPage.data.length > 0) {
            for (const item of currentPage.data) {
                expect(item).toBeDefined();
                expect(item.id).toBeDefined();
                count++;

                if (count >= limit) {
                    return count;
                }
            }

            if (!currentPage.hasNextPage()) {
                break;
            }

            await sleep(1000); // Add delay before fetching next page
            currentPage = await currentPage.getNextPage();
        }

        return count;
    }

    async function testPager({
        client,
        limit,
        params,
    }: {
        client: TestClient;
        limit: number;
        params: Record<string, any>;
    }) {
        const pager = await client.list(params);
        expect(pager).toBeDefined();

        let count = pager.data.length;
        while (pager.hasNextPage()) {
            await sleep(1000); // Add delay before fetching next page
            await pager.getNextPage();
            count += pager.data.length;

            if (count >= limit) {
                break;
            }
        }
        return count;
    }

    testCases.forEach(({ name, client, limit, perPage, greaterThan, setup }) => {
        it(
            name,
            async () => {
                let params: Record<string, any> = { limit: perPage };
                if (setup) {
                    await setup();
                }
                
                await sleep(2000); // Wait before starting tests

                // Add delay between iterator and pager tests
                const iteratorCount = await testIterator({ client, limit, params: { ...params } });
                await sleep(5000); // Increased wait between major operations
                const pagerCount = await testPager({ client, limit, params: { ...params } });

                expect(iteratorCount).toBeGreaterThan(greaterThan);
                expect(pagerCount).toBeGreaterThan(greaterThan);

                if (perPage != null) {
                    expect(pagerCount).toEqual(iteratorCount);
                }
            },
            180_000, // Increased timeout to 3 minutes
        );
    });
});