import { randomUUID } from "crypto";
import { Square, SquareClient, SquareEnvironment } from "../../src";
import path from "path";
import { readFile } from "fs/promises";

export const createClient = (): SquareClient => {
    const token = process.env.TEST_SQUARE_TOKEN;
    if (!token) {
        throw new Error("TEST_SQUARE_TOKEN is not set");
    }
    return new SquareClient({
        token,
        environment: SquareEnvironment.Sandbox,
    });
};

export function newTestUuid(): string {
    return randomUUID();
}

export function newTestSquareTempId(): string {
    return `#${randomUUID()}`;
}

export function newTestMoney(amount: number | bigint): Square.Money {
    return {
        amount: typeof amount === "number" ? BigInt(amount) : amount,
        currency: "USD",
    };
}

export async function getTestFile(): Promise<Blob> {
    const buffer = await readFile(path.join(__dirname, "./testdata/image.jpeg"));
    return new Blob([buffer], { type: "image/jpeg" });
}

export async function getDefaultLocationId(client: SquareClient): Promise<string> {
    const locationsResponse = await client.locations.list();
    return locationsResponse.locations?.[0].id!;
}

export async function createLocation(client: SquareClient): Promise<string> {
    const locationsResponse = await client.locations.create({
        location: {
            name: `Test Location ${newTestUuid()}`,
        },
    });
    return locationsResponse.location!.id!;
}

export interface TestCatalogItemOptions {
    name?: string;
    description?: string;
    abbreviation?: string;
    price?: bigint;
    currency?: Square.Currency;
    variationName?: string;
}

export function createTestCatalogItem(opts: TestCatalogItemOptions = {}): Square.CatalogObject {
    const variation: Square.CatalogObject = {
        type: "ITEM_VARIATION",
        id: "#" + newTestUuid(),
        presentAtAllLocations: true,
        itemVariationData: {
            name: opts.variationName || `Variation ${newTestUuid()}`,
            trackInventory: true,
            pricingType: "FIXED_PRICING",
            priceMoney: {
                amount: opts.price ?? BigInt(1000),
                currency: opts.currency ?? Square.Currency.Usd,
            },
        },
    };

    return {
        type: "ITEM",
        id: "#" + newTestUuid(),
        presentAtAllLocations: true,
        itemData: {
            name: opts.name || `Item ${newTestUuid()}`,
            description: opts.description || "Test item description",
            abbreviation: opts.abbreviation || "TST",
            availableOnline: true,
            availableForPickup: true,
            availableElectronically: false,
            variations: [variation],
        },
    };
}

const testAddress: Square.Address = {
    addressLine1: "500 Electric Ave",
    addressLine2: "Suite 600",
    locality: "New York",
    administrativeDistrictLevel1: "NY",
    postalCode: "10003",
    country: "US",
};

export function createTestCustomerRequest(): Square.CreateCustomerRequest {
    return {
        idempotencyKey: newTestUuid(),
        givenName: "Amelia",
        familyName: "Earhart",
        phoneNumber: "1-212-555-4240",
        note: "test customer",
        address: testAddress,
    };
}

export async function createTestCustomer(client: SquareClient): Promise<string> {
    const response = await client.customers.create(createTestCustomerRequest(), {
        maxRetries: 5,
        timeoutInSeconds: 60,
    });
    return response.customer!.id!;
}
