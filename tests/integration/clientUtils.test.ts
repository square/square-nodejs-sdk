import type { SquareClient } from "../../src";
import { createClient, getDefaultLocationId, newTestMoney, newTestSquareTempId, newTestUuid } from "./helpers";

describe("Square Client Utils", () => {
    const client: SquareClient = createClient();

    test("should generate a new UUID", () => {
        const uuid = newTestUuid();
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    test("should generate a new Square temporary ID", () => {
        const tempID = newTestSquareTempId();
        expect(tempID).toMatch(/^#[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    test("should create a new Money object", () => {
        const amount = BigInt(1000);
        const money = newTestMoney(amount);
        expect(money).toEqual({ amount: amount, currency: "USD" });
    });

    test("should get the default location ID", async () => {
        const locationID = await getDefaultLocationId(client);
        expect(locationID).toBeDefined();
    });
});
