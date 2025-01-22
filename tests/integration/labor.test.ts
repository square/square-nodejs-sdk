import { createClient, createLocation, newTestUuid } from "./helpers";
import { SquareClient } from "../../src";

function formatDateString(date: Date): string {
    return date.toISOString().slice(0, 19) + "Z";
}

describe("Labor API", () => {
    const client: SquareClient = createClient();
    let locationId: string;
    let memberId: string;
    let breakId: string;
    let shiftId: string;

    beforeAll(async () => {
        // Get first location
        locationId = await createLocation(client);

        // Create team member for testing
        const teamResponse = await client.teamMembers.create({
            idempotencyKey: newTestUuid(),
            teamMember: {
                givenName: "Sherlock",
                familyName: "Holmes",
            },
        });
        memberId = teamResponse.teamMember!.id!;

        // Create break type for testing
        const breakResponse = await client.labor.breakTypes.create({
            idempotencyKey: newTestUuid(),
            breakType: {
                locationId: locationId,
                expectedDuration: "PT0H30M0S", // 30 min duration in RFC 3339 format
                breakName: `Lunch_${newTestUuid()}`,
                isPaid: true,
            },
        });
        breakId = breakResponse.breakType!.id!;

        // Create shift for testing
        const shiftResponse = await client.labor.shifts.create({
            idempotencyKey: newTestUuid(),
            shift: {
                startAt: formatDateString(new Date()),
                locationId: locationId,
                teamMemberId: memberId,
            },
        });
        shiftId = shiftResponse.shift!.id!;
    });

    afterAll(async () => {
        // Clean up resources
        await client.labor.shifts.delete({
            id: shiftId,
        });
        await client.labor.breakTypes.delete({
            id: breakId,
        });
    });

    it("should list break types", async () => {
        const response = await client.labor.breakTypes.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });

    it("should get break type", async () => {
        const response = await client.labor.breakTypes.get({
            id: breakId,
        });

        expect(response.breakType).toBeDefined();
        expect(response.breakType?.id).toBe(breakId);
    });

    it("should update break type", async () => {
        const response = await client.labor.breakTypes.update({
            id: breakId,
            breakType: {
                locationId: locationId,
                expectedDuration: "PT1H0M0S", // 1 hour duration
                breakName: `Lunch_${newTestUuid()}`,
                isPaid: true,
            },
        });

        expect(response.breakType).toBeDefined();
        expect(response.breakType?.id).toBe(breakId);
        expect(response.breakType?.expectedDuration).toBe("PT1H");
    });

    it("should search shifts", async () => {
        const response = await client.labor.shifts.search({
            limit: 1,
        });

        expect(response.shifts).toBeDefined();
        expect(response.shifts?.length).toBeGreaterThan(0);
    });

    it("should get shift", async () => {
        const response = await client.labor.shifts.get({
            id: shiftId,
        });

        expect(response.shift).toBeDefined();
        expect(response.shift?.id).toBe(shiftId);
    });

    it("should update shift", async () => {
        const response = await client.labor.shifts.update({
            id: shiftId,
            shift: {
                locationId: locationId,
                teamMemberId: memberId,
                startAt: formatDateString(new Date(Date.now() - 6000)),
                wage: {
                    title: "Manager",
                    hourlyRate: {
                        amount: BigInt(2500),
                        currency: "USD",
                    },
                },
            },
        });

        expect(response.shift).toBeDefined();
        expect(response.shift?.wage?.title).toBe("Manager");
        expect(response.shift?.wage?.hourlyRate?.amount).toBe(BigInt(2500));
        expect(response.shift?.wage?.hourlyRate?.currency).toBe("USD");
    });

    it("should delete shift", async () => {
        // create team member
        const teamMemberResponse = await client.teamMembers.create({
            idempotencyKey: newTestUuid(),
            teamMember: {
                givenName: "Sherlock",
                familyName: "Holmes",
            },
        });

        // create shift
        const shiftResponse = await client.labor.shifts.create({
            idempotencyKey: newTestUuid(),
            shift: {
                startAt: formatDateString(new Date()),
                locationId: locationId,
                teamMemberId: teamMemberResponse.teamMember?.id!,
            },
        });

        const response = await client.labor.shifts.delete({
            id: shiftResponse.shift?.id!,
        });
        expect(response).toBeDefined();
    });

    it("should delete break type", async () => {
        // create break type
        const breakResponse = await client.labor.breakTypes.create({
            idempotencyKey: newTestUuid(),
            breakType: {
                locationId: locationId,
                expectedDuration: "PT0H30M0S",
                breakName: `Lunch_${newTestUuid()}`,
                isPaid: true,
            },
        });

        const response = await client.labor.breakTypes.delete({
            id: breakResponse.breakType?.id!,
        });
        expect(response).toBeDefined();
    });

    it("should list workweek configs", async () => {
        const response = await client.labor.workweekConfigs.list();

        expect(response.data).toBeDefined();
        expect(response.data?.length).toBeGreaterThan(0);
    });
});
