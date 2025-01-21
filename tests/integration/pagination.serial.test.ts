import { Customers } from "../../src/api/resources/customers/client/Client";
import { Catalog } from "../../src/api/resources/catalog/client/Client";
import {
    createClient,
    createTestCatalogItem,
    createTestCustomer,
    newTestUuid,
} from "./helpers";

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
                await Promise.all(
                    Array(5)
                        .fill(null)
                        .map(() => createTestCustomer(client)),
                );
            },
        },
        {
            name: "catalog",
            client: client.catalog,
            limit: 5,
            greaterThan: 4,
            async setup() {
                await Promise.all(
                    Array(5)
                        .fill(null)
                        .map(() => createTestCatalogItem())
                        .map((item) =>
                            client.catalog.object.upsert(
                                {
                                    idempotencyKey: newTestUuid(),
                                    object: item,
                                },
                                {
                                    maxRetries: 5,
                                    timeoutInSeconds: 60,
                                },
                            ),
                        ),
                );
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

                const iteratorCount = await testIterator({ client, limit, params: { ...params } });
                const pagerCount = await testPager({ client, limit, params: { ...params } });
                expect(iteratorCount).toBeGreaterThan(greaterThan);
                expect(pagerCount).toBeGreaterThan(greaterThan);

                if (perPage != null) {
                    // Confirm iterator and pager return same count.
                    expect(pagerCount).toEqual(iteratorCount);
                }
            },
            60_000,
        );
    });
});
